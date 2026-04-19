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
    const subFolderName = config.subFolderName;

    console.log(`📦 Using subfolder: ${subFolderName}`);

    const targetFolder = await ensureSubFolder(PATHS.localTC, subFolderName);

    const destPath = path.join(targetFolder, fileName);

    await fs.copyFile(filePath, destPath);
    console.log(`✅ Test file copied to: localTC/${subFolderName}/${fileName}`);

    console.log('⏳ Ensuring file is still stable before execution...');
    await waitForFileStability(destPath, 3000, 10000);

    await testExecutor.execute(fileName, PATHS);

  } catch (error) {
    console.error('❌ Error processing test:', error);
  }
}

async function ensureSubFolder(basePath, folderName) {
  try {
    await fs.mkdir(basePath, { recursive: true });

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