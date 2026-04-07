const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs-extra');
const os = require('os');
const config = require('./config');

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

    const subFolderName = config.subFolderName;

    // ✅ Source path (already correct)
    const sourceFilePath = path.resolve(
      PATHS.tests,
      subFolderName,
      fileName
    );

    console.log(`📂 Reading file from: ${sourceFilePath}`);

    if (!fs.existsSync(sourceFilePath)) {
      throw new Error(`❌ File not found: ${sourceFilePath}`);
    }

    // ✅ Create temp directory
    const tempDir = path.join(os.tmpdir(), `git-temp-${Date.now()}`);
    await fs.ensureDir(tempDir);

    console.log(`📁 Temp directory: ${tempDir}`);

    const git = simpleGit({ baseDir: tempDir });

    // ✅ Auth repo URL
    const repoUrl = process.env.GITHUB_REPO_URL.replace(
      'https://',
      `https://${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}@`
    );

    // 🔽 Clone repo
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

    // ✅ Pull latest
    try {
      await tempGit.pull('origin', 'main');
    } catch (e) {
      console.log('ℹ️ No existing remote history (new repo)');
    }

    // ================================
    // 🔥 UPDATED: Work inside /tests folder
    // ================================

    const testsDir = path.join(tempDir, 'tests');

    // ensure tests folder exists (safe)
    await fs.ensureDir(testsDir);

    const entries = await fs.readdir(testsDir, { withFileTypes: true });

    const existingFolder = entries.find(
      entry =>
        entry.isDirectory() &&
        entry.name.toLowerCase() === subFolderName.toLowerCase()
    );

    let targetFolderPath;

    if (existingFolder) {
      targetFolderPath = path.join(testsDir, existingFolder.name);
      console.log(`📁 Using existing folder: tests/${existingFolder.name}`);
    } else {
      targetFolderPath = path.join(testsDir, subFolderName);
      await fs.ensureDir(targetFolderPath);
      console.log(`📁 Created folder: tests/${subFolderName}`);
    }

    // 📄 Copy file into tests/subfolder
    const destFilePath = path.join(targetFolderPath, path.basename(fileName));
    await fs.copy(sourceFilePath, destFilePath);

    console.log(`📄 Copied file to: ${destFilePath}`);

    // ================================
    // ✅ Git config
    // ================================
    await tempGit.addConfig(
      'user.name',
      process.env.GITHUB_USERNAME || 'Playwright Bot'
    );
    await tempGit.addConfig(
      'user.email',
      process.env.GITHUB_EMAIL || 'bot@playwright.com'
    );

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

    console.log('🚀 Successfully pushed to repo!');

    // 🧹 Cleanup
    await fs.remove(tempDir);
    console.log('🧹 Temp directory cleaned');

  } catch (error) {
    console.error('❌ Git operation failed:', error.message);
  }
}

module.exports = { pushToGitHub };