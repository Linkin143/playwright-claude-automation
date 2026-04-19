const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs-extra');
const os = require('os');
const config = require('../../../config/config');
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

    console.log('\n📦 Starting Git push workflow...');

    const subFolderName = config.subFolderName;

    const sourceFilePath = path.resolve(
      PATHS.localTC,
      subFolderName,
      fileName
    );

    console.log(`📂 Source file: allTestFiles/${subFolderName}/${fileName}`);

    if (!fs.existsSync(sourceFilePath)) {
      throw new Error(`❌ File not found in allTestFiles: ${sourceFilePath}`);
    }

    const tempDir = path.join(os.tmpdir(), `git-temp-${Date.now()}`);
    await fs.ensureDir(tempDir);

    console.log(`📁 Temp directory created: ${tempDir}`);

    const git = simpleGit({ baseDir: tempDir });

    const repoUrl = process.env.GITHUB_REPO_URL.replace(
      'https://',
      `https://${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}@`
    );

    try {
      console.log('⬇️ Cloning GitHub repository...');
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

    const passedTestFilesDir = path.join(tempDir, 'tests', 'passedTestFiles');
    await fs.ensureDir(passedTestFilesDir);

    console.log(`📂 Ensuring tests/passedTestFiles directory in temp repo...`);

    const targetSubFolder = await ensureSubFolder(passedTestFilesDir, subFolderName);

    const destFilePath = path.join(targetSubFolder, fileName);

    await fs.copy(sourceFilePath, destFilePath);
    console.log(`✅ Copied to temp repo: tests/passedTestFiles/${path.basename(targetSubFolder)}/${fileName}`);

    console.log('⏳ Waiting for file stability in temp repo...');
    await waitForFileStability(destFilePath, 3000, 10000);

    console.log('✅ File is stable in temp repo');

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
    console.log(`   Structure: tests/passedTestFiles/${path.basename(targetSubFolder)}/${fileName}`);

    await fs.remove(tempDir);
    console.log('🧹 Temp directory cleaned');

  } catch (error) {
    console.error('❌ Git operation failed:', error.message);
  }
}

async function ensureSubFolder(basePath, folderName) {
  try {
    await fs.ensureDir(basePath);

    const entries = await fs.readdir(basePath, { withFileTypes: true });

    const normalizedFolderName = normalizeFolderName(folderName);

    const existing = entries.find(entry => {
      if (!entry.isDirectory()) return false;
      const normalizedEntryName = normalizeFolderName(entry.name);
      return normalizedEntryName === normalizedFolderName;
    });

    if (existing) {
      const existingPath = path.join(basePath, existing.name);
      console.log(`📁 Using existing subfolder: ${existingPath}`);
      return existingPath;
    }

    const newFolderPath = path.join(basePath, folderName);
    await fs.mkdir(newFolderPath, { recursive: true });

    console.log(`📁 Created subfolder: ${newFolderPath}`);
    return newFolderPath;

  } catch (err) {
    console.error('❌ Error ensuring subfolder:', err);
    throw err;
  }
}

function normalizeFolderName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

async function waitForFileStability(filePath, checkInterval = 3000, stableDuration = 10000) {
  let lastSize = -1;
  let stableTime = 0;

  while (true) {
    try {
      const stats = await fs.stat(filePath);
      const currentSize = stats.size;

      if (currentSize === lastSize) {
        stableTime += checkInterval;
        console.log(`⏳ File stable for ${stableTime / 1000}s`);

        if (stableTime >= stableDuration) {
          console.log('✅ File stability confirmed');
          break;
        }
      } else {
        stableTime = 0;
        lastSize = currentSize;
        console.log('🔄 File still changing...');
      }

    } catch (err) {
      console.log('⚠️ Waiting for file to be accessible...');
    }

    await new Promise(resolve => setTimeout(resolve, checkInterval));
  }
}

module.exports = { pushToGitHub };