const fs = require('fs').promises;
const path = require('path');
const claudeClient = require('./claudeClient');
const gitManager = require('./gitManager');

async function process(fileName, PATHS) {
  try {
    console.log(`\n📊 Processing results for: ${fileName}`);

    await new Promise(resolve => setTimeout(resolve, 3000));

    const resultsExist = await fs.access(PATHS.results).then(() => true).catch(() => false);
    
    if (!resultsExist) {
      console.error('❌ Results file not found at:', PATHS.results);
      console.error('   Test may have failed to execute properly');
      return;
    }

    const resultsData = await fs.readFile(PATHS.results, 'utf-8');
    
    if (!resultsData || resultsData.trim() === '') {
      console.error('❌ Results file is empty');
      console.error('   Test may have crashed or not generated output');
      return;
    }

    let results;
    try {
      results = JSON.parse(resultsData);
    } catch (parseError) {
      console.error('❌ Invalid JSON in results file');
      console.error('   Parse error:', parseError.message);
      return;
    }

    const testSuite = results.suites?.[0];
    const testSpec = testSuite?.specs?.[0];
    const testResult = testSpec?.tests?.[0]?.results?.[0];

    if (!testResult) {
      console.error('❌ No test results found in JSON');
      console.error('   Results structure:', JSON.stringify(results, null, 2));
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
      console.log('\n✅ Test PASSED - proceeding with Git commit and push');
      await gitManager.pushToGitHub(fileName, status, PATHS);
    } else {
      console.log('\n❌ Test FAILED - skipping Git commit and push');
      console.log('   Failed test remains local only in tests/ folder');
      console.log('   Review and fix the test, then resubmit');
    }

  } catch (error) {
    console.error('❌ Error processing results:', error.message);
    console.error('   Stack:', error.stack);
  }
}

module.exports = { process };