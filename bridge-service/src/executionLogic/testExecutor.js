const { exec } = require('child_process');
const path = require('path');
const resultProcessor = require('./resultProcessor');

function runCommand(command, projectRoot) {
  return new Promise((resolve) => {
    const child = exec(command, {
      cwd: projectRoot,
      maxBuffer: 10 * 1024 * 1024
    }, (error, stdout, stderr) => {

      console.log('\n📋 Test Output:');
      if (stdout) console.log(stdout);

      if (stderr && !stderr.includes('DeprecationWarning')) {
        console.log('⚠️  Errors/Warnings:');
        console.log(stderr);
      }

      if (error) {
        console.log(`❌ Failed: ${command}`);
        return resolve(false);
      }

      console.log(`✅ Passed: ${command}`);
      resolve(true);
    });

    child.on('error', (error) => {
      console.error('❌ Child process error:', error);
      resolve(false);
    });
  });
}

function execute(fileName, PATHS) {
  return new Promise(async (resolve, reject) => {
    const projectRoot = path.resolve(__dirname, '../../..');
    console.log(`\n🚀 Executing test: ${fileName}`);
    console.log(`📂 Working directory: ${projectRoot}`);
    console.log(`🎭 Running in ALL browsers (Chromium + Firefox)`);

    try {
      // ✅ RUN ALL BROWSERS IN ONE COMMAND
      const command = `npx playwright test ${fileName} --project=chromium --project=firefox`;
      const passed = await runCommand(command, projectRoot);

      if (passed) {
        console.log(`🎉 Test passed across browsers`);
      } else {
        console.log(`⚠️ Some browsers failed`);
      }

      console.log('\n✅ Test execution completed');

      await new Promise(r => setTimeout(r, 2000));
      await resultProcessor.process(fileName, PATHS);

      resolve();

    } catch (error) {
      console.error('❌ Execution error:', error);
      reject(error);
    }
  });
}

module.exports = { execute };