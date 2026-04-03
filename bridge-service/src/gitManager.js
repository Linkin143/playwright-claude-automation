const simpleGit = require('simple-git');
const path = require('path');

async function pushToGitHub(fileName, status, PATHS) {
  let originalRepoUrl = null;
  let originalBranch = null;

  try {
    // ✅ Only push if TC passed
    if (status === 'FAILED') {
      console.log('⏭️ TC not passed. Skipping Git push.');
      return;
    }

    console.log('\n📦 Preparing Git operations...');

    const testsDir = path.resolve(PATHS.tests);

    const git = simpleGit({
      baseDir: testsDir,
      binary: 'git',
      maxConcurrentProcesses: 1,
    });

    // ✅ Save original repo + branch
    const currentRemotes = await git.getRemotes(true);
    const origin = currentRemotes.find(r => r.name === 'origin');

    if (!origin) {
      throw new Error('❌ No origin remote found');
    }

    originalRepoUrl = origin.refs.fetch;

    const branchSummary = await git.branchLocal();
    originalBranch = branchSummary.current;

    console.log(`🔙 Original repo: ${originalRepoUrl}`);
    console.log(`🔙 Original branch: ${originalBranch}`);

    // ✅ Git config
    await git.addConfig('user.name', process.env.GITHUB_USERNAME || 'Playwright Bot');
    await git.addConfig('user.email', process.env.GITHUB_EMAIL || 'bot@playwright.com');

    // ✅ Add + commit
    await git.add(fileName);
    await git.commit(`✅ Add: ${fileName} - ${status}`);

    // ❗ Ensure env exists
    if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_REPO_URL) {
      console.log('⚠️ Missing GitHub config. Skipping push.');
      return;
    }

    // ✅ Prepare NEW repo URL (with auth)
    const newRepoUrl = process.env.GITHUB_REPO_URL.replace(
      'https://',
      `https://${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}@`
    );

    // 🔁 Switch to NEW repo
    await git.remote(['set-url', 'origin', newRepoUrl]);
    console.log('🔁 Switched to NEW repo');

    // ✅ Always use MAIN branch
    const targetBranch = 'main';

    await git.checkout('main').catch(async () => {
      console.log('⚠️ main not found → creating...');
      await git.checkoutLocalBranch('main');
    });

    console.log(`📤 Pushing to NEW repo (main branch)...`);

    // 🚀 Push logic
    try {
      await git.push('origin', targetBranch, ['--set-upstream']);
      console.log('🚀 Successfully pushed to NEW repo!');
    } catch (err) {
      console.log('⚠️ Push failed, trying pull + rebase...');

      try {
        await git.pull('origin', targetBranch, { '--rebase': 'true' });
        await git.push('origin', targetBranch);
        console.log('🚀 Push successful after rebase!');
      } catch (err2) {
        console.log('⚠️ Force pushing...');
        await git.push('origin', targetBranch, ['--force']);
        console.log('🚀 Force push successful!');
      }
    }

  } catch (error) {
    console.error('❌ Git operation failed:', error.message);

  } finally {
    try {
      const testsDir = path.resolve(PATHS.tests);
      const git = simpleGit({ baseDir: testsDir });

      // 🔁 Restore original repo
      if (originalRepoUrl) {
        await git.remote(['set-url', 'origin', originalRepoUrl]);
        console.log('🔄 Restored original repository');
      }

      // 🔁 Restore original branch
      if (originalBranch) {
        await git.checkout(originalBranch);
        console.log(`🔄 Switched back to original branch: ${originalBranch}`);
      }

    } catch (restoreError) {
      console.error('❌ Failed to restore original repo/branch:', restoreError.message);
    }
  }
}

module.exports = { pushToGitHub };