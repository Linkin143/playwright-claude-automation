const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs-extra');
const os = require('os');

async function pushToGitHub(fileName, status, PATHS) {
  try {
    // ✅ Only push if TC passed
    if (status === 'FAILED') {
      console.log('⏭️ TC not passed. Skipping Git push.');
      return;
    }

    if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_REPO_URL) {
      console.log('⚠️ Missing GitHub config. Skipping push.');
      return;
    }

    console.log('\n📦 Using TEMP repo (safe mode)...');

    const sourceFilePath = path.resolve(PATHS.tests, fileName);

    if (!fs.existsSync(sourceFilePath)) {
      throw new Error(`❌ File not found: ${sourceFilePath}`);
    }

    // ✅ Create temp directory
    const tempDir = path.join(os.tmpdir(), `git-temp-${Date.now()}`);
    await fs.ensureDir(tempDir);

    console.log(`📁 Temp directory: ${tempDir}`);

    const git = simpleGit({
      baseDir: tempDir,
    });

    // ✅ Auth repo URL
    const repoUrl = process.env.GITHUB_REPO_URL.replace(
      'https://',
      `https://${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}@`
    );

    // 🔽 Clone repo (if exists)
    try {
      console.log('⬇️ Cloning target repo...');
      await git.clone(repoUrl, tempDir);
    } catch (cloneErr) {
      console.log('⚠️ Clone failed, initializing fresh repo...');
      await git.init();
      await git.addRemote('origin', repoUrl);
    }

    const tempGit = simpleGit({ baseDir: tempDir });

    // ✅ Ensure main branch
    await tempGit.checkout('main').catch(async () => {
      await tempGit.checkoutLocalBranch('main');
    });

    // ✅ Pull latest (if repo exists)
    try {
      await tempGit.pull('origin', 'main');
    } catch (e) {
      console.log('ℹ️ No existing remote history (new repo)');
    }

    // 📄 Copy file into temp repo
    const destFilePath = path.join(tempDir, path.basename(fileName));
    await fs.copy(sourceFilePath, destFilePath);

    console.log(`📄 Copied file to temp repo: ${destFilePath}`);

    // ✅ Git config
    await tempGit.addConfig('user.name', process.env.GITHUB_USERNAME || 'Playwright Bot');
    await tempGit.addConfig('user.email', process.env.GITHUB_EMAIL || 'bot@playwright.com');

    // ✅ Commit + push
    await tempGit.add('.');
    await tempGit.commit(`✅ Add: ${fileName} - ${status}`).catch(() => {
      console.log('ℹ️ Nothing to commit');
    });

    console.log('📤 Pushing to target repo (main)...');

    await tempGit.push('origin', 'main', ['--set-upstream']).catch(async () => {
      console.log('⚠️ Push failed, force pushing...');
      await tempGit.push('origin', 'main', ['--force']);
    });

    console.log('🚀 Successfully pushed to NEW repo (safe mode)!');

    // 🧹 Cleanup
    await fs.remove(tempDir);
    console.log('🧹 Temp directory cleaned');

  } catch (error) {
    console.error('❌ Git operation failed:', error.message);
  }
}

module.exports = { pushToGitHub };