const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs').promises;
const testExecutor = require('./testExecutor');
const config = require('../../../config/config');

function start(PATHS) {
  const watcher = chokidar.watch(PATHS.generatedTests, {
    persistent: true,
    ignoreInitial: true
  });

  watcher.on('add', async (filePath) => {
    console.log(`\n📄 New test file detected: ${path.basename(filePath)}`);

    console.log('⏳ Waiting for file to stabilize (no changes)...');
    await waitForFileStability(filePath, 5000, 30000);

    await processNewTest(filePath, PATHS);
  });

  watcher.on('error', (error) => {
    console.error('❌ File watcher error:', error);
  });

  console.log(`👁️  File watcher started`);
}

async function processNewTest(filePath, PATHS) {
  const fileName = path.basename(filePath);

  try {
    const { siteName, testType, moduleName } = config;

    console.log(`\n📦 Building directory structure:`);
    console.log(`   Site: ${siteName}`);
    console.log(`   Type: ${testType}`);
    console.log(`   Module: ${moduleName || '(none - file saved at testType level)'}`);

    // Build multi-level path: tests/allTestFiles/{siteName}/{testType}/{moduleName?}/
    const targetFolder = await ensureDirectoryStructure(
      PATHS.localTC,
      siteName,
      testType,
      moduleName
    );

    const destPath = path.join(targetFolder, fileName);

    await fs.copyFile(filePath, destPath);
    
    const relativePath = path.relative(PATHS.root, destPath);
    console.log(`✅ Test file copied to: ${relativePath}`);

    console.log('⏳ Ensuring file is still stable before execution...');
    await waitForFileStability(destPath, 3000, 10000);

    await testExecutor.execute(fileName, PATHS);

  } catch (error) {
    console.error('❌ Error processing test:', error);
  }
}

/**
 * Ensures multi-level directory structure with regex normalization at each level
 * Structure: basePath/{siteName}/{testType}/{moduleName?}/
 */
async function ensureDirectoryStructure(basePath, siteName, testType, moduleName) {
  try {
    // Ensure base path exists
    await fs.mkdir(basePath, { recursive: true });

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
 * Examples:
 *   MSN-Test → msntest
 *   News_Module → newsmodule
 *   Regression Test → regressiontest
 */
function normalizeFolderName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

async function waitForFileStability(filePath, checkInterval = 5000, stableDuration = 30000) {
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
          console.log('✅ File is stable, proceeding...');
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

    await delay(checkInterval);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { start };