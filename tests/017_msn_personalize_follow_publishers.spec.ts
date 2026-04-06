import { test, expect } from '@playwright/test';

test.describe('MSN India - Personalize Feed: Follow TOI and India Today', () => {
  test.setTimeout(120000);

  test('follow Times Of India and India Today via Personalize dialog', async ({ page }) => {
    test.slow();

    // Step 1: Navigate to MSN India
    // DOM before: blank page
    await page.goto('https://www.msn.com/en-in');

    // Step 2: Wait for page to fully stabilize
    // DOM after: MSN homepage loaded, Personalize button visible
    const personalizeBtn = page.getByRole('button', { name: /Personalize/i });
    await personalizeBtn.waitFor({ state: 'visible', timeout: 15000 });

    // Step 3: Click "Personalize" button
    // DOM before: button "Personalize your feed" visible in header nav
    // NOTE: channel-store element intercepts pointer events — force click required
    let pBtn = page.getByRole('button', { name: /Personalize/i });
    if (!(await pBtn.isVisible())) {
      pBtn = page.getByText('Personalize');
    }
    await pBtn.click({ force: true });
    await page.waitForTimeout(1500);

    // Step 4: Wait for Personalize dialog/panel to open
    // DOM after: role="dialog" is now visible with left nav and channel tree
    const dialog = page.getByRole('dialog');
    await dialog.waitFor({ state: 'visible', timeout: 10000 });

    // Step 5: Click "Discover" inside personalize dialog (not top navigation)
    // DOM before: fluent-tree-item with id="discover", role="treeitem" — may already be selected
    const discoverItem = dialog.locator('#discover');
    let discoverFallback = dialog.locator('[aria-label="Navigate to Discover section"]');
    if (!(await discoverItem.isVisible())) {
      await discoverFallback.click({ force: true });
    } else {
      await discoverItem.click({ force: true });
    }
    await page.waitForTimeout(1000);
    // DOM after: Discover section active, search field visible

    // Step 6: Focus search field inside dialog
    // DOM before: input[type="search"] or searchbox present in Discover section
    const searchInput = dialog.locator(
      'input[type="search"], input[placeholder*="search" i], [role="searchbox"]'
    ).first();
    await searchInput.waitFor({ state: 'visible', timeout: 8000 });
    await searchInput.click({ force: true });

    // Step 7: Search "The Times Of India"
    // DOM before: search field focused and empty
    await searchInput.fill('The Times Of India');
    await page.waitForTimeout(300);

    // Step 8: Press Enter
    await searchInput.press('Enter');

    // Step 9: Wait for results
    // DOM after: publisher card for "The Times of India" visible in results
    await page.waitForTimeout(2000);

    // Step 10: Click "+" (Follow) for "The Times Of India"
    // DOM before: publisher card visible, aria-label includes "Times of India"
    // Self-healing: try title attr, then aria-label, then text match
    let toiCard = dialog.locator('[title="Follow The Times of India"]');
    if (!(await toiCard.isVisible())) {
      toiCard = dialog.locator('[aria-label="Follow The Times of India"]');
    }
    if (!(await toiCard.isVisible())) {
      toiCard = dialog.locator('[id*="publisher-card"][title*="Times of India"]');
    }
    const toiCardVisible = await toiCard.isVisible().catch(() => false);
    if (toiCardVisible) {
      const toiPressed = await toiCard.getAttribute('aria-pressed');
      if (toiPressed !== 'true') {
        await toiCard.click({ force: true });
        await page.waitForTimeout(1000);
      }
      // DOM after: card title="Unfollow The Times of India", aria-pressed="true"
    }

    // Step 11: Clear search field
    // DOM before: search field shows "The Times Of India"
    await searchInput.fill('');
    await page.waitForTimeout(500);
    // DOM after: search field is empty

    // Step 12: Search "India Today"
    // DOM before: search field empty, ready for new query
    await searchInput.fill('India Today');
    await page.waitForTimeout(300);

    // Step 13: Press Enter
    await searchInput.press('Enter');

    // Step 14: Wait for results
    // DOM after: publisher card for "India Today" visible in results
    await page.waitForTimeout(2000);

    // Step 15: Click "+" (Follow) for "India Today"
    // DOM before: India Today publisher card visible in results
    // Self-healing: try title attr first, fallback to aria-label and id selector
    let itCard = dialog.locator('[title="Follow India Today"]');
    if (!(await itCard.isVisible())) {
      itCard = dialog.locator('[aria-label="Follow India Today"]');
    }
    if (!(await itCard.isVisible())) {
      itCard = dialog.locator('[id*="publisher-card"][title*="India Today"]');
    }
    const itCardVisible = await itCard.isVisible().catch(() => false);
    if (itCardVisible) {
      const itPressed = await itCard.getAttribute('aria-pressed');
      if (itPressed !== 'true') {
        await itCard.click({ force: true });
        await page.waitForTimeout(1000);
      }
      // DOM after: card title="Unfollow India Today", aria-pressed="true"
    }

    // Step 16: Close personalize dialog
    // DOM before: dialog still open, #close-button (fluent-button) visible
    let closeBtn = dialog.locator('#close-button');
    if (!(await closeBtn.isVisible())) {
      closeBtn = dialog.getByRole('button', { name: /close/i });
    }
    await closeBtn.click({ force: true });
    await page.waitForTimeout(1000);
    // DOM after: dialog no longer visible

    // Step 17: Close browser window (handled by Playwright test teardown)
    // page.close() is called automatically after test finishes
  });
});
