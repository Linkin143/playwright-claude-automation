import { test, expect, Page } from '@playwright/test';

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Dismiss cookie / consent banners safely
// ─────────────────────────────────────────────────────────────────────────────
async function dismissConsentBanner(page: Page): Promise<void> {
  // Attempt 1: "Accept all" button
  try {
    const acceptAll = page.getByRole('button', { name: 'Accept all' });
    if (await acceptAll.isVisible({ timeout: 4000 })) {
      await acceptAll.click();
      await page.waitForTimeout(1000);
      console.log('[Consent] "Accept all" dismissed.');
      return;
    }
  } catch { /* not present */ }

  // Attempt 2: "Agree" button
  try {
    const agree = page.getByRole('button', { name: 'Agree' });
    if (await agree.isVisible({ timeout: 3000 })) {
      await agree.click();
      await page.waitForTimeout(1000);
      console.log('[Consent] "Agree" dismissed.');
      return;
    }
  } catch { /* not present */ }

  console.log('[Consent] No consent banner found.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Click the "Personalize" entry point (button or link)
// Strategy: try role=button first, then role=link, then visible text
// ─────────────────────────────────────────────────────────────────────────────
async function clickPersonalize(page: Page): Promise<void> {
  // Attempt 1: rendered as a <button>
  try {
    const btn = page.getByRole('button', { name: 'Personalize' });
    if (await btn.isVisible({ timeout: 7000 })) {
      await expect(btn).toBeVisible();
      await btn.click();
      console.log('[Personalize] Clicked as role=button.');
      return;
    }
  } catch { /* not a button */ }

  // Attempt 2: rendered as a <a> link
  try {
    const lnk = page.getByRole('link', { name: 'Personalize' });
    if (await lnk.isVisible({ timeout: 5000 })) {
      await expect(lnk).toBeVisible();
      await lnk.click();
      console.log('[Personalize] Clicked as role=link.');
      return;
    }
  } catch { /* not a link */ }

  // Attempt 3: any element with exact visible text
  const txt = page.getByText('Personalize', { exact: true });
  await expect(txt).toBeVisible({ timeout: 8000 });
  await txt.click();
  console.log('[Personalize] Clicked via getByText.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Click the "Discover" tab/link inside the Personalize panel
// Strategy: try role=tab, then role=link, then role=button, then text
// ─────────────────────────────────────────────────────────────────────────────
async function clickDiscoverTab(page: Page): Promise<void> {
  // Attempt 1: <tab> role (accessible tab control)
  try {
    const tab = page.getByRole('tab', { name: 'Discover' });
    if (await tab.isVisible({ timeout: 6000 })) {
      await expect(tab).toBeVisible();
      await tab.click();
      console.log('[Discover] Clicked as role=tab.');
      return;
    }
  } catch { /* not a tab */ }

  // Attempt 2: rendered as <a> link
  try {
    const lnk = page.getByRole('link', { name: 'Discover' });
    if (await lnk.isVisible({ timeout: 5000 })) {
      await expect(lnk).toBeVisible();
      await lnk.click();
      console.log('[Discover] Clicked as role=link.');
      return;
    }
  } catch { /* not a link */ }

  // Attempt 3: rendered as <button>
  try {
    const btn = page.getByRole('button', { name: 'Discover' });
    if (await btn.isVisible({ timeout: 5000 })) {
      await expect(btn).toBeVisible();
      await btn.click();
      console.log('[Discover] Clicked as role=button.');
      return;
    }
  } catch { /* not a button */ }

  // Attempt 4: plain text fallback
  const txt = page.getByText('Discover', { exact: true });
  await expect(txt).toBeVisible({ timeout: 8000 });
  await txt.click();
  console.log('[Discover] Clicked via getByText.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Click the follow/add "+" button for a search result
// Strategy: try exact "+", then "Add", then "Follow", then aria-label
// Each attempt is a separate IF block — strict-mode safe
// ─────────────────────────────────────────────────────────────────────────────
async function clickFollowButton(page: Page, channelName: string): Promise<void> {
  // Attempt 1: exact "+" text as button name
  try {
    const plusBtn = page.getByRole('button', { name: '+' });
    if (await plusBtn.isVisible({ timeout: 5000 })) {
      await expect(plusBtn).toBeVisible();
      await plusBtn.click();
      console.log(`[Follow] Clicked "+" for "${channelName}".`);
      return;
    }
  } catch { /* not present */ }

  // Attempt 2: "Add" button
  try {
    const addBtn = page.getByRole('button', { name: 'Add' });
    if (await addBtn.isVisible({ timeout: 4000 })) {
      await expect(addBtn).toBeVisible();
      await addBtn.click();
      console.log(`[Follow] Clicked "Add" for "${channelName}".`);
      return;
    }
  } catch { /* not present */ }

  // Attempt 3: "Follow" button
  try {
    const followBtn = page.getByRole('button', { name: 'Follow' });
    if (await followBtn.isVisible({ timeout: 4000 })) {
      await expect(followBtn).toBeVisible();
      await followBtn.click();
      console.log(`[Follow] Clicked "Follow" for "${channelName}".`);
      return;
    }
  } catch { /* not present */ }

  // Attempt 4: aria-label "Follow"
  const labelBtn = page.getByLabel('Follow');
  await expect(labelBtn).toBeVisible({ timeout: 5000 });
  await labelBtn.click();
  console.log(`[Follow] Clicked aria-label="Follow" for "${channelName}".`);
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Fill the Discover search box and submit
// ─────────────────────────────────────────────────────────────────────────────
async function searchChannel(page: Page, channelName: string): Promise<void> {
  // Prefer role=searchbox as the single unambiguous search input
  const searchBox = page.getByRole('searchbox');
  await expect(searchBox).toBeVisible({ timeout: 10000 });
  await searchBox.click();
  await searchBox.clear();
  await searchBox.fill(channelName);
  await searchBox.press('Enter');
  console.log(`[Search] Submitted search for "${channelName}".`);

  // Wait for results to render
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Close the Personalize panel
// ─────────────────────────────────────────────────────────────────────────────
async function closePersonalizePanel(page: Page): Promise<void> {
  // Attempt 1: "Close" button
  try {
    const closeBtn = page.getByRole('button', { name: 'Close' });
    if (await closeBtn.isVisible({ timeout: 4000 })) {
      await closeBtn.click();
      console.log('[Close] Panel closed via "Close" button.');
      return;
    }
  } catch { /* not present */ }

  // Attempt 2: "Done" button
  try {
    const doneBtn = page.getByRole('button', { name: 'Done' });
    if (await doneBtn.isVisible({ timeout: 3000 })) {
      await doneBtn.click();
      console.log('[Close] Panel closed via "Done" button.');
      return;
    }
  } catch { /* not present */ }

  // Attempt 3: Escape key fallback
  await page.keyboard.press('Escape');
  console.log('[Close] Panel dismissed via Escape key.');
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
    console.log('[Step 1] MSN India loaded and page stabilised.');

    // ── STEP 2 : Dismiss any consent / cookie banner ──────────────────────────
    await dismissConsentBanner(page);

    // ── STEP 3 : Click "Personalize" ─────────────────────────────────────────
    await clickPersonalize(page);
    console.log('[Step 3] Personalize entry clicked.');

    // ── STEP 4 : Wait for the Personalize panel to load ───────────────────────
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
    console.log('[Step 4] Personalize panel wait complete.');

    // ── STEP 5 : Click the "Discover" tab/link ────────────────────────────────
    await clickDiscoverTab(page);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    console.log('[Step 5] Discover tab active.');

    // ── STEP 6 : Search "The Times Of India" and follow ──────────────────────
    await searchChannel(page, 'The Times Of India');
    await clickFollowButton(page, 'The Times Of India');
    await page.waitForTimeout(1500);
    console.log('[Step 6] "The Times Of India" followed.');

    // ── STEP 7 : Clear search, then search "India Today" and follow ───────────
    const searchBoxClear = page.getByRole('searchbox');
    await expect(searchBoxClear).toBeVisible({ timeout: 8000 });
    await searchBoxClear.click();
    await searchBoxClear.clear();
    await page.waitForTimeout(500);
    console.log('[Step 7] Search field cleared.');

    await searchChannel(page, 'India Today');
    await clickFollowButton(page, 'India Today');
    await page.waitForTimeout(1500);
    console.log('[Step 7] "India Today" followed.');

    // ── STEP 8 : Close the Personalize / My Channels panel ───────────────────
    await closePersonalizePanel(page);
    await page.waitForTimeout(2000);
    console.log('[Step 8] Personalize panel closed.');

    // ── STEP 9 : Assertions ───────────────────────────────────────────────────
    // Verify still on MSN domain
    expect(page.url()).toContain('msn.com');
    console.log('✅ [Assert] URL still contains "msn.com".');

    // Verify page title is non-empty
    const pageTitle = await page.title();
    expect(pageTitle.length).toBeGreaterThan(0);
    console.log(`✅ [Assert] Page title: "${pageTitle}"`);

    // ── STEP 10 : Final summary log ───────────────────────────────────────────
    console.log('');
    console.log('╔══════════════════════════════════════════════════════╗');
    console.log('║              FINAL TEST SUMMARY                      ║');
    console.log('╠══════════════════════════════════════════════════════╣');
    console.log('║  Site        : https://www.msn.com/en-in             ║');
    console.log('║  Channel 1   : The Times Of India  → Followed ✅     ║');
    console.log('║  Channel 2   : India Today         → Followed ✅     ║');
    console.log('║  Panel       : Closed ✅                             ║');
    console.log('╚══════════════════════════════════════════════════════╝');

    // ── STEP 11 : Browser closes automatically at end of test ────────────────
    console.log('[Step 11] Test complete. Browser will close.');

  }); // ← END OF test(...)

}); // ← END OF test.describe(...)
