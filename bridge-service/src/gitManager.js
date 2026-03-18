const simpleGit = require('simple-git');
const path = require('path');

async function pushToGitHub(fileName, status, PATHS) {
  try {
    console.log('\n📦 Preparing Git operations...');

    const projectRoot = path.join(__dirname, '../..');
    const git = simpleGit(projectRoot);

    await git.addConfig('user.name', process.env.GITHUB_USERNAME || 'Playwright Bot');
    await git.addConfig('user.email', process.env.GITHUB_EMAIL || 'bot@playwright.com');

    const testPath = path.join('tests', fileName);
    
    await git.add(testPath);
    console.log(`✅ Added to git: ${testPath}`);

    const commitMessage = `✅ Add: ${fileName} - ${status}`;
    await git.commit(commitMessage);
    console.log(`✅ Committed: ${commitMessage}`);

    if (process.env.GITHUB_TOKEN && process.env.GITHUB_REPO_URL) {
      const remoteUrl = process.env.GITHUB_REPO_URL.replace(
        'https://',
        `https://${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}@`
      );

      const remotes = await git.getRemotes(false);
      const originExists = remotes.some(r => r.name === 'origin');

      if (!originExists) {
        await git.addRemote('origin', remoteUrl);
        console.log('✅ Remote origin added');
      }

      await git.push('origin', 'main');
      console.log('🚀 Pushed to GitHub successfully!');
    } else {
      console.log('⚠️  GitHub credentials not configured. Skipping push.');
    }

  } catch (error) {
    console.error('❌ Git operation failed:', error.message);
  }
}

module.exports = { pushToGitHub };