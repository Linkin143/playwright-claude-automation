const Anthropic = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function sendResults(testData) {
  try {
    console.log('\n📤 Sending results to Claude AI...');

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: [{
        role: "user",
        content: `Test execution completed:

File: ${testData.fileName}
Status: ${testData.status}
Duration: ${testData.duration}ms
Timestamp: ${testData.timestamp}
${testData.error ? `Error: ${testData.error}` : ''}

${testData.status === 'PASSED' 
  ? '✅ Test passed successfully! The test has been committed to GitHub.' 
  : '❌ Test failed. Please review the error and make necessary corrections.'}
`
      }]
    });

    console.log('✅ Results sent to Claude AI');
    console.log('💬 Claude response:', message.content[0].text);

    return message.content[0].text;

  } catch (error) {
    console.error('❌ Error communicating with Claude:', error.message);
    return null;
  }
}

module.exports = { sendResults };