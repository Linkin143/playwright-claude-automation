const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs-extra');
const os = require('os');

async function pushToGitHub(fileName, status, PATHS) {
  try {
    if (status === 'FAILED') {
      console.log('⏭️ TC not passed. Skipping Git push.');
      return;
    }

    if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_REPO_URL) {
      console.log('⚠️ Missing GitHub config. Skipping push.');
      return;
    }

    console.log('\n📦 Preparing Git push from passedTC folder...');

    const tempDir = path.join(os.tmpdir(), `git-temp-${Date.now()}`);
    await fs.ensureDir(tempDir);

    console.log(`📁 Temp directory: ${tempDir}`);

    const git = simpleGit({ baseDir: tempDir });

    const repoUrl = process.env.GITHUB_REPO_URL.replace(
      'https://',
      `https://${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}@`
    );

    try {
      console.log('⬇️ Cloning target repo...');
      await git.clone(repoUrl, tempDir);
    } catch (cloneErr) {
      console.log('⚠️ Clone failed, initializing fresh repo...');
      await git.init();
      await git.addRemote('origin', repoUrl);
    }

    const tempGit = simpleGit({ baseDir: tempDir });

    await tempGit.checkout('main').catch(async () => {
      await tempGit.checkoutLocalBranch('main');
    });

    try {
      await tempGit.pull('origin', 'main');
    } catch (e) {
      console.log('ℹ️ No existing remote history (new repo)');
    }

    const tempTestsDir = path.join(tempDir, 'tests');
    await fs.ensureDir(tempTestsDir);

    const sourcePassedTCDir = PATHS.passedTC;

    console.log(`📂 Copying entire passedTC structure to temp repo...`);
    console.log(`   From: ${sourcePassedTCDir}`);
    console.log(`   To: ${tempTestsDir}`);

    await fs.copy(sourcePassedTCDir, tempTestsDir, {
      overwrite: true,
      recursive: true
    });

    console.log(`✅ Copied passedTC structure to temp repo`);

    await tempGit.addConfig(
      'user.name',
      process.env.GITHUB_USERNAME || 'Playwright Bot'
    );
    await tempGit.addConfig(
      'user.email',
      process.env.GITHUB_EMAIL || 'bot@playwright.com'
    );

    await tempGit.add('.');
    
    const commitResult = await tempGit.commit(`✅ Add: ${fileName} - ${status}`).catch(() => {
      console.log('ℹ️ Nothing to commit (no changes detected)');
      return null;
    });

    if (!commitResult) {
      console.log('⏭️ No new changes to push');
      await fs.remove(tempDir);
      return;
    }

    console.log('📤 Pushing to GitHub (main branch)...');

    await tempGit.push('origin', 'main', ['--set-upstream']).catch(async () => {
      console.log('⚠️ Push failed, force pushing...');
      await tempGit.push('origin', 'main', ['--force']);
    });

    console.log('🚀 Successfully pushed to GitHub!');
    console.log(`   Repository: ${process.env.GITHUB_REPO_URL}`);

    await fs.remove(tempDir);
    console.log('🧹 Temp directory cleaned');

  } catch (error) {
    console.error('❌ Git operation failed:', error.message);
  }
}

module.exports = { pushToGitHub };