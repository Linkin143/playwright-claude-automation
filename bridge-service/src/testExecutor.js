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
    const projectRoot = path.join(__dirname, '../..');

    console.log(`\n🚀 Executing test: ${fileName}`);
    console.log(`📂 Working directory: ${projectRoot}`);
    console.log(`🎭 Running in HEADLESS mode`);

    try {
      // 🔥 STEP 1: Chromium (FIRST)
      const chromiumCmd = `npx playwright test ${fileName} --project=chromium --headless`;
      const chromiumPassed = await runCommand(chromiumCmd, projectRoot);

      if (!chromiumPassed) {
        console.log(`🛑 Stopping execution (Chromium failed)`);

        await new Promise(r => setTimeout(r, 2000));
        await resultProcessor.process(fileName, PATHS);

        return resolve();
      }

      // 🔥 STEP 2: Firefox
      const firefoxCmd = `npx playwright test ${fileName} --project=firefox --headless`;
      const firefoxPassed = await runCommand(firefoxCmd, projectRoot);

      // 🔥 STEP 3: WebKit
      const webkitCmd = `npx playwright test ${fileName} --project=webkit --headless`;
      const webkitPassed = await runCommand(webkitCmd, projectRoot);

      if (firefoxPassed && webkitPassed) {
        console.log(`🎉 All browsers passed`);
      } else {
        console.log(`⚠️ Cross-browser issues detected`);
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