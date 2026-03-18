const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs').promises;
const testExecutor = require('./testExecutor');

function start(PATHS) {
  const watcher = chokidar.watch(PATHS.generatedTests, {
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: {
      stabilityThreshold: 2000,
      pollInterval: 100
    }
  });

  watcher.on('add', async (filePath) => {
    console.log(`\n📄 New test file detected: ${path.basename(filePath)}`);
    await processNewTest(filePath, PATHS);
  });

  watcher.on('error', (error) => {
    console.error('❌ File watcher error:', error);
  });

  console.log(`👁️  File watcher started`);
}

async function processNewTest(filePath, PATHS) {
  const fileName = path.basename(filePath);
  const destPath = path.join(PATHS.tests, fileName);

  try {
    await fs.copyFile(filePath, destPath);
    console.log(`✅ Test file copied to: ${destPath}`);

    await testExecutor.execute(fileName, PATHS);

  } catch (error) {
    console.error('❌ Error processing test:', error);
  }
}

module.exports = { start };