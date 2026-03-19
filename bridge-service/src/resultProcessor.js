const fs = require('fs').promises;
const path = require('path');
const claudeClient = require('./claudeClient');
const gitManager = require('./gitManager');

async function process(fileName, PATHS) {
  try {
    console.log(`\n📊 Processing results for: ${fileName}`);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const resultsExist = await fs.access(PATHS.results).then(() => true).catch(() => false);
    
    if (!resultsExist) {
      console.log('⚠️  Results file not found, checking test file manually...');
      await checkTestFileDirectly(fileName, PATHS);
      return;
    }

    const resultsData = await fs.readFile(PATHS.results, 'utf-8');
    
    if (!resultsData || resultsData.trim() === '') {
      console.log('⚠️  Results file is empty, checking test file manually...');
      await checkTestFileDirectly(fileName, PATHS);
      return;
    }

    let results;
    try {
      results = JSON.parse(resultsData);
    } catch (parseError) {
      console.log('⚠️  Invalid JSON in results file, checking test file manually...');
      await checkTestFileDirectly(fileName, PATHS);
      return;
    }

    const testSuite = results.suites?.[0];
    const testSpec = testSuite?.specs?.[0];
    const testResult = testSpec?.tests?.[0]?.results?.[0];

    if (!testResult) {
      console.log('⚠️  No test results found in JSON, checking manually...');
      await checkTestFileDirectly(fileName, PATHS);
      return;
    }

    const status = testResult?.status === 'passed' ? 'PASSED' : 'FAILED';
    const duration = testResult?.duration || 0;
    const error = testResult?.error?.message || null;

    console.log(`\n📈 Test Results:`);
    console.log(`   File: ${fileName}`);
    console.log(`   Status: ${status}`);
    console.log(`   Duration: ${duration}ms`);
    if (error) {
      console.log(`   Error: ${error}`);
    }

    const testData = {
      fileName,
      status,
      duration,
      error,
      timestamp: new Date().toISOString()
    };

    await claudeClient.sendResults(testData);

    if (status === 'PASSED') {
      await gitManager.pushToGitHub(fileName, status, PATHS);
    } else {
      console.log('\n⚠️  Test failed - skipping Git commit');
    }

  } catch (error) {
    console.error('❌ Error processing results:', error.message);
    await checkTestFileDirectly(fileName, PATHS);
  }
}

async function checkTestFileDirectly(fileName, PATHS) {
  console.log('\n🔍 Running manual test check...');
  
  const { exec } = require('child_process');
  const projectRoot = path.join(__dirname, '../..');
  
  return new Promise((resolve) => {
    exec(`npx playwright test ${fileName}`, { cwd: projectRoot }, (error, stdout, stderr) => {
      
      const output = stdout + stderr;
      const passed = output.includes('1 passed') || output.includes('passed (');
      const failed = output.includes('1 failed') || output.includes('failed (');
      
      let status = 'UNKNOWN';
      if (passed && !failed) {
        status = 'PASSED';
      } else if (failed) {
        status = 'FAILED';
      }
      
      console.log(`\n📈 Manual Test Check Results:`);
      console.log(`   File: ${fileName}`);
      console.log(`   Status: ${status}`);
      
      const testData = {
        fileName,
        status,
        duration: 0,
        error: failed ? 'Test failed - check output above' : null,
        timestamp: new Date().toISOString()
      };
      
      claudeClient.sendResults(testData);
      
      if (status === 'PASSED') {
        gitManager.pushToGitHub(fileName, status, PATHS);
      }
      
      resolve();
    });
  });
}

module.exports = { process };