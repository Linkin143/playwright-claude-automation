const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs-extra');
const os = require('os');
const config = require('../../../config/config');

async function pushToGitHub(fileName, status, PATHS) {
  try {
    if (status === 'FAILED') {
      console.log('⏭️ Test not passed. Skipping Git push.');
      return;
    }

    if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_REPO_URL) {
      console.log('⚠️ Missing GitHub config. Skipping push.');
      return;
    }

    console.log('\n📦 Starting Git push workflow...');

    const { siteName, testType, moduleName } = config;

    // Build source path: tests/allTestFiles/{siteName}/{testType}/{moduleName?}/
    const sourcePathParts = [PATHS.localTC, siteName, testType];
    if (moduleName && moduleName.trim() !== '') {
      sourcePathParts.push(moduleName);
    }
    const sourceFilePath = path.join(...sourcePathParts, fileName);

    const relativeSourcePath = path.relative(PATHS.root, sourceFilePath);
    console.log(`📂 Source file: ${relativeSourcePath}`);

    if (!fs.existsSync(sourceFilePath)) {
      throw new Error(`❌ File not found: ${sourceFilePath}`);
    }

    // Create temp directory
    const tempDir = path.join(os.tmpdir(), `git-temp-${Date.now()}`);
    await fs.ensureDir(tempDir);

    console.log(`📁 Temp directory created: ${tempDir}`);

    const git = simpleGit({ baseDir: tempDir });

    const repoUrl = process.env.GITHUB_REPO_URL.replace(
      'https://',
      `https://${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}@`
    );

    // Clone repository
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

    // Build directory structure in temp repo: tests/passedTestFiles/{siteName}/{testType}/{moduleName?}/
    const passedTestFilesBase = path.join(tempDir, 'tests', 'passedTestFiles');
    await fs.ensureDir(passedTestFilesBase);

    console.log(`\n📦 Building directory structure in temp repo:`);
    console.log(`   Site: ${siteName}`);
    console.log(`   Type: ${testType}`);
    console.log(`   Module: ${moduleName || '(none - file saved at testType level)'}`);

    const targetFolder = await ensureDirectoryStructure(
      passedTestFilesBase,
      siteName,
      testType,
      moduleName
    );

    const destFilePath = path.join(targetFolder, fileName);

    await fs.copy(sourceFilePath, destFilePath);
    
    const relativeDestPath = path.relative(tempDir, destFilePath);
    console.log(`✅ Copied to temp repo: ${relativeDestPath}`);

    console.log('⏳ Waiting for file stability in temp repo...');
    await waitForFileStability(destFilePath, 3000, 10000);

    console.log('✅ File is stable in temp repo');

    // Git config
    await tempGit.addConfig(
      'user.name',
      process.env.GITHUB_USERNAME || 'Playwright Bot'
    );
    await tempGit.addConfig(
      'user.email',
      process.env.GITHUB_EMAIL || 'bot@playwright.com'
    );

    // Commit and push
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
    console.log(`   Structure: ${relativeDestPath}`);

    // Cleanup
    await fs.remove(tempDir);
    console.log('🧹 Temp directory cleaned');

  } catch (error) {
    console.error('❌ Git operation failed:', error.message);
  }
}

/**
 * Ensures multi-level directory structure with regex normalization at each level
 * Structure: basePath/{siteName}/{testType}/{moduleName?}/
 */
async function ensureDirectoryStructure(basePath, siteName, testType, moduleName) {
  try {
    // Ensure base path exists
    await fs.ensureDir(basePath);

    // Level 1: siteName
    const siteFolder = await ensureSubFolder(basePath, siteName, 'Site');

    // Level 2: testType
    const typeFolder = await ensureSubFolder(siteFolder, testType, 'TestType');

    // Level 3: moduleName (optional)
    if (moduleName && moduleName.trim() !== '') {
      const moduleFolder = await ensureSubFolder(typeFolder, moduleName, 'Module');
      return moduleFolder;
    }

    // No module - return testType level
    return typeFolder;

  } catch (err) {
    console.error('❌ Error ensuring directory structure:', err);
    throw err;
  }
}

/**
 * Ensures a single folder level with regex normalization
 */
async function ensureSubFolder(basePath, folderName, level = '') {
  try {
    const entries = await fs.readdir(basePath, { withFileTypes: true });
    const normalizedFolderName = normalizeFolderName(folderName);

    // Find existing folder (case-insensitive, special char insensitive)
    const existing = entries.find(entry => {
      if (!entry.isDirectory()) return false;
      const normalizedEntryName = normalizeFolderName(entry.name);
      return normalizedEntryName === normalizedFolderName;
    });

    if (existing) {
      const existingPath = path.join(basePath, existing.name);
      console.log(`   📁 ${level}: Using existing "${existing.name}"`);
      return existingPath;
    }

    // Create new folder
    const newFolderPath = path.join(basePath, folderName);
    await fs.mkdir(newFolderPath, { recursive: true });

    console.log(`   📁 ${level}: Created "${folderName}"`);
    return newFolderPath;

  } catch (err) {
    console.error(`❌ Error ensuring ${level} folder:`, err);
    throw err;
  }
}

/**
 * Normalize folder name: lowercase + alphanumeric only
 */
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