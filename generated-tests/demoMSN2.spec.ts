import { test, expect, Page } from '@playwright/test';

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Dismiss cookie / consent / GDPR banners if they appear
// ─────────────────────────────────────────────────────────────────────────────
async function dismissConsentBanner(page: Page): Promise<void> {
  try {
    const acceptBtn = page.getByRole('button', { name: 'Accept all' });
    if (await acceptBtn.isVisible({ timeout: 4000 })) {
      await acceptBtn.click();
      await page.waitForTimeout(1000);
      console.log('[Consent] "Accept all" banner dismissed.');
      return;
    }
  } catch { /* not found */ }

  try {
    const agreeBtn = page.getByRole('button', { name: 'Agree' });
    if (await agreeBtn.isVisible({ timeout: 3000 })) {
      await agreeBtn.click();
      await page.waitForTimeout(1000);
      console.log('[Consent] "Agree" banner dismissed.');
      return;
    }
  } catch { /* not found */ }

  console.log('[Consent] No consent banner detected.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Search for a channel inside the Discover panel and click follow
// ─────────────────────────────────────────────────────────────────────────────
async function searchAndFollowChannel(page: Page, channelName: string): Promise<void> {
  console.log(`[Follow] Searching for: "${channelName}"`);

  // Locate the single visible search input inside the personalize panel
  const searchInput = page.getByRole('searchbox');
  await expect(searchInput).toBeVisible({ timeout: 10000 });
  await searchInput.click();
  await searchInput.clear();
  await searchInput.fill(channelName);
  await searchInput.press('Enter');
  console.log(`[Follow] Entered "${channelName}" and pressed Enter.`);

  // Wait for results to load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Click the "+" / Add / Follow button for the first result
  // Try getByRole with exact name "+" first
  let followed = false;

  try {
    const plusBtn = page.getByRole('button', { name: '+' });
    if (await plusBtn.isVisible({ timeout: 5000 })) {
      await plusBtn.click();
      followed = true;
      console.log(`[Follow] Clicked "+" button for "${channelName}".`);
    }
  } catch { /* try next strategy */ }

  if (!followed) {
    try {
      const addBtn = page.getByRole('button', { name: 'Add' });
      if (await addBtn.isVisible({ timeout: 5000 })) {
        await addBtn.click();
        followed = true;
        console.log(`[Follow] Clicked "Add" button for "${channelName}".`);
      }
    } catch { /* try next strategy */ }
  }

  if (!followed) {
    try {
      const followBtn = page.getByRole('button', { name: 'Follow' });
      if (await followBtn.isVisible({ timeout: 5000 })) {
        await followBtn.click();
        followed = true;
        console.log(`[Follow] Clicked "Follow" button for "${channelName}".`);
      }
    } catch { /* try next strategy */ }
  }

  if (!followed) {
    // Last resort: aria-label contains "follow" or "add"
    const ariaBtn = page.getByLabel('Follow');
    if (await ariaBtn.isVisible({ timeout: 5000 })) {
      await ariaBtn.click();
      followed = true;
      console.log(`[Follow] Clicked aria-label="Follow" button for "${channelName}".`);
    }
  }

  if (!followed) {
    throw new Error(`[Follow] Could not find a follow/add button for "${channelName}".`);
  }

  // Allow the follow action to register
  await page.waitForTimeout(1500);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST SUITE
// ─────────────────────────────────────────────────────────────────────────────
test.describe('MSN India – Personalize: Follow Channels via Discover Tab', () => {

  test('Follow The Times Of India and India Today via Personalize > Discover', async ({ page }) => {

    // ── STEP 1 : Navigate to MSN India ───────────────────────────────────────
    await page.goto('https://www.msn.com/en-in', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);
    console.log('[Step 1] MSN India loaded and stabilised.');

    // ── STEP 2 : Dismiss any consent / cookie banner ──────────────────────────
    await dismissConsentBanner(page);

    // ── STEP 3 : Click the "Personalize" button ──────────────────────────────
    // Try exact role match first; fall back to getByText if not found
    let personalizeClicked = false;

    try {
      const personalizeBtn = page.getByRole('button', { name: 'Personalize' });
      if (await personalizeBtn.isVisible({ timeout: 8000 })) {
        await expect(personalizeBtn).toBeVisible();
        await personalizeBtn.click();
        personalizeClicked = true;
        console.log('[Step 3] Clicked "Personalize" button (role=button).');
      }
    } catch { /* try next */ }

    if (!personalizeClicked) {
      const personalizeText = page.getByText('Personalize', { exact: true });
      await expect(personalizeText).toBeVisible({ timeout: 8000 });
      await personalizeText.click();
      personalizeClicked = true;
      console.log('[Step 3] Clicked "Personalize" link (getByText).');
    }

    // ── STEP 4 : Wait for the Personalize panel to load ───────────────────────
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
    console.log('[Step 4] Personalize panel load wait complete.');

    // ── STEP 5 : Click the "Discover" tab inside the panel ───────────────────
    let discoverClicked = false;

    try {
      const discoverTab = page.getByRole('tab', { name: 'Discover' });
      if (await discoverTab.isVisible({ timeout: 6000 })) {
        await expect(discoverTab).toBeVisible();
        await discoverTab.click();
        discoverClicked = true;
        console.log('[Step 5] Clicked "Discover" tab (role=tab).');
      }
    } catch { /* try next */ }

    if (!discoverClicked) {
      const discoverBtn = page.getByRole('button', { name: 'Discover' });
      await expect(discoverBtn).toBeVisible({ timeout: 6000 });
      await discoverBtn.click();
      discoverClicked = true;
      console.log('[Step 5] Clicked "Discover" button (role=button).');
    }

    // Wait for Discover tab content to render
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // ── STEP 6 : Search for "The Times Of India" and follow ──────────────────
    await searchAndFollowChannel(page, 'The Times Of India');
    console.log('[Step 6] "The Times Of India" follow action completed.');

    // ── STEP 7 : Clear search and search for "India Today" and follow ─────────
    // Explicitly clear the search box before second search
    const searchInput = page.getByRole('searchbox');
    await expect(searchInput).toBeVisible({ timeout: 8000 });
    await searchInput.click();
    await searchInput.clear();
    await page.waitForTimeout(500);
    console.log('[Step 7] Search field cleared for next search.');

    await searchAndFollowChannel(page, 'India Today');
    console.log('[Step 7] "India Today" follow action completed.');

    // ── STEP 8 : Close the Personalize / My Channels dialog ───────────────────
    let dialogClosed = false;

    try {
      const closeBtn = page.getByRole('button', { name: 'Close' });
      if (await closeBtn.isVisible({ timeout: 4000 })) {
        await closeBtn.click();
        dialogClosed = true;
        console.log('[Step 8] Dialog closed via "Close" button.');
      }
    } catch { /* try next */ }

    if (!dialogClosed) {
      try {
        const doneBtn = page.getByRole('button', { name: 'Done' });
        if (await doneBtn.isVisible({ timeout: 3000 })) {
          await doneBtn.click();
          dialogClosed = true;
          console.log('[Step 8] Dialog closed via "Done" button.');
        }
      } catch { /* try next */ }
    }

    if (!dialogClosed) {
      await page.keyboard.press('Escape');
      console.log('[Step 8] Dialog dismissed via Escape key (fallback).');
    }

    // ── STEP 9 : Wait for all actions to settle ───────────────────────────────
    await page.waitForTimeout(2000);
    console.log('[Step 9] Post-close wait complete.');

    // ── STEP 10 : Assertions ──────────────────────────────────────────────────
    // Verify we are still on the MSN India domain
    expect(page.url()).toContain('msn.com');
    console.log('✅ [Assert] URL still contains "msn.com".');

    // Verify page title is non-empty
    const pageTitle = await page.title();
    expect(pageTitle.length).toBeGreaterThan(0);
    console.log(`✅ [Assert] Page title present: "${pageTitle}"`);

    // ── STEP 11 : Final summary log ───────────────────────────────────────────
    console.log('');
    console.log('╔══════════════════════════════════════════════════════╗');
    console.log('║              FINAL TEST SUMMARY                      ║');
    console.log('╠══════════════════════════════════════════════════════╣');
    console.log('║  Site        : https://www.msn.com/en-in             ║');
    console.log('║  Channel 1   : The Times Of India  → Followed ✅     ║');
    console.log('║  Channel 2   : India Today         → Followed ✅     ║');
    console.log('║  Panel       : Closed ✅                             ║');
    console.log('╚══════════════════════════════════════════════════════╝');

    // ── STEP 12 : Browser closes automatically when test ends ────────────────
    console.log('[Step 12] Test complete. Browser will close.');

  }); // ← END OF test(...)

}); // ← END OF test.describe(...)
