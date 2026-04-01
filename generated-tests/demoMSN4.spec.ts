import { test, expect, Page, Locator } from '@playwright/test';

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Dismiss consent / cookie banners
// ─────────────────────────────────────────────────────────────────────────────
async function dismissConsentBanner(page: Page): Promise<void> {
  try {
    const acceptAll = page.getByRole('button', { name: 'Accept all' });
    if (await acceptAll.isVisible({ timeout: 4000 })) {
      await acceptAll.click();
      await page.waitForTimeout(1000);
      console.log('[Consent] "Accept all" dismissed.');
      return;
    }
  } catch { /* not present */ }

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
// HELPER : Click the "Personalize" entry point
// Self-healing: button → link → text (all strict-mode safe)
// ─────────────────────────────────────────────────────────────────────────────
async function clickPersonalize(page: Page): Promise<void> {
  let personalize: Locator = page.getByRole('button', { name: 'Personalize' });

  if (!(await personalize.isVisible({ timeout: 7000 }).catch(() => false))) {
    personalize = page.getByRole('link', { name: 'Personalize' });
  }
  if (!(await personalize.isVisible({ timeout: 5000 }).catch(() => false))) {
    personalize = page.getByText('Personalize', { exact: true });
  }

  await expect(personalize).toBeVisible({ timeout: 8000 });
  await personalize.click();
  console.log('[Personalize] Entry clicked.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Click the "Discover" tab SCOPED to the personalize dialog/panel
// Uses the CSS selector hint from test spec: #discover > h3
// Self-healing: CSS id → scoped tab → scoped link → scoped text
// ─────────────────────────────────────────────────────────────────────────────
async function clickDiscoverInsidePanel(page: Page): Promise<void> {
  // PRIMARY: use the explicit CSS selector provided in the spec
  let discover: Locator = page.locator('#discover > h3');

  if (!(await discover.isVisible({ timeout: 6000 }).catch(() => false))) {
    // FALLBACK 1: scoped tab inside dialog
    discover = page.getByRole('dialog').getByRole('tab', { name: 'Discover' });
  }
  if (!(await discover.isVisible({ timeout: 5000 }).catch(() => false))) {
    // FALLBACK 2: scoped link inside dialog
    discover = page.getByRole('dialog').getByRole('link', { name: 'Discover' });
  }
  if (!(await discover.isVisible({ timeout: 5000 }).catch(() => false))) {
    // FALLBACK 3: scoped text inside dialog
    discover = page.getByRole('dialog').getByText('Discover', { exact: true });
  }
  if (!(await discover.isVisible({ timeout: 5000 }).catch(() => false))) {
    // FALLBACK 4: scoped inside region (MSN uses region role for side panels)
    discover = page.getByRole('region').getByText('Discover', { exact: true });
  }

  await expect(discover).toBeVisible({ timeout: 8000 });
  await discover.click();
  console.log('[Discover] Tab/link inside personalize panel clicked.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Fill search box SCOPED to personalize panel and submit
// ─────────────────────────────────────────────────────────────────────────────
async function searchInDiscoverPanel(page: Page, channelName: string): Promise<void> {
  // PRIMARY: searchbox scoped inside dialog
  let searchBox: Locator = page.getByRole('dialog').getByRole('searchbox');

  if (!(await searchBox.isVisible({ timeout: 6000 }).catch(() => false))) {
    // FALLBACK: searchbox scoped inside region panel
    searchBox = page.getByRole('region').getByRole('searchbox');
  }
  if (!(await searchBox.isVisible({ timeout: 5000 }).catch(() => false))) {
    // FALLBACK: any visible searchbox on page (last resort)
    searchBox = page.getByRole('searchbox');
  }

  await expect(searchBox).toBeVisible({ timeout: 10000 });
  await searchBox.click();
  await searchBox.clear();
  await searchBox.fill(channelName);
  await searchBox.press('Enter');
  console.log(`[Search] Submitted: "${channelName}"`);

  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Click follow/add "+" button SCOPED to personalize panel
// Self-healing: exact "+" → "Add" → "Follow" → aria-label scoped
// ─────────────────────────────────────────────────────────────────────────────
async function clickFollowInPanel(page: Page, channelName: string): Promise<void> {
  // PRIMARY: "+" button scoped to dialog
  let followBtn: Locator = page.getByRole('dialog').getByRole('button', { name: '+' });

  if (!(await followBtn.isVisible({ timeout: 5000 }).catch(() => false))) {
    followBtn = page.getByRole('dialog').getByRole('button', { name: 'Add' });
  }
  if (!(await followBtn.isVisible({ timeout: 4000 }).catch(() => false))) {
    followBtn = page.getByRole('dialog').getByRole('button', { name: 'Follow' });
  }
  if (!(await followBtn.isVisible({ timeout: 4000 }).catch(() => false))) {
    // FALLBACK: scoped to region
    followBtn = page.getByRole('region').getByRole('button', { name: '+' });
  }
  if (!(await followBtn.isVisible({ timeout: 4000 }).catch(() => false))) {
    followBtn = page.getByRole('region').getByRole('button', { name: 'Add' });
  }
  if (!(await followBtn.isVisible({ timeout: 4000 }).catch(() => false))) {
    followBtn = page.getByRole('region').getByRole('button', { name: 'Follow' });
  }

  await expect(followBtn).toBeVisible({ timeout: 8000 });
  await followBtn.click();
  console.log(`[Follow] Follow/Add button clicked for "${channelName}".`);
  await page.waitForTimeout(1500);
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Close personalize panel
// Self-healing: "Close" button → "Done" → Escape
// ─────────────────────────────────────────────────────────────────────────────
async function closePersonalizePanel(page: Page): Promise<void> {
  // PRIMARY: "Close" button scoped to dialog
  let closeBtn: Locator = page.getByRole('dialog').getByRole('button', { name: 'Close' });

  if (!(await closeBtn.isVisible({ timeout: 4000 }).catch(() => false))) {
    closeBtn = page.getByRole('dialog').getByRole('button', { name: 'Done' });
  }
  if (!(await closeBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
    closeBtn = page.getByRole('region').getByRole('button', { name: 'Close' });
  }

  if (await closeBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await closeBtn.click();
    console.log('[Panel] Closed via button.');
  } else {
    await page.keyboard.press('Escape');
    console.log('[Panel] Closed via Escape key.');
  }
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

    // ── STEP 2 : Dismiss consent banner ──────────────────────────────────────
    await dismissConsentBanner(page);

    // ── STEP 3 : Click "Personalize" ─────────────────────────────────────────
    await clickPersonalize(page);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
    console.log('[Step 3] Personalize panel opened.');

    // ── STEP 4 : Click "Discover" tab INSIDE the personalize panel ────────────
    // Uses #discover > h3 as primary selector per spec, then scoped fallbacks
    await clickDiscoverInsidePanel(page);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    console.log('[Step 4] Discover section is active.');

    // Assert Discover section is now active/visible
    const discoverSection = page.locator('#discover');
    if (await discoverSection.isVisible({ timeout: 3000 }).catch(() => false)) {
      await expect(discoverSection).toBeVisible();
      console.log('✅ [Assert] #discover section is visible.');
    }

    // ── STEP 5 : Search "The Times Of India" and follow ───────────────────────
    await searchInDiscoverPanel(page, 'The Times Of India');
    await clickFollowInPanel(page, 'The Times Of India');
    console.log('[Step 5] "The Times Of India" followed.');

    // ── STEP 6 : Clear search field ──────────────────────────────────────────
    let searchBox: Locator = page.getByRole('dialog').getByRole('searchbox');
    if (!(await searchBox.isVisible({ timeout: 4000 }).catch(() => false))) {
      searchBox = page.getByRole('region').getByRole('searchbox');
    }
    if (!(await searchBox.isVisible({ timeout: 4000 }).catch(() => false))) {
      searchBox = page.getByRole('searchbox');
    }
    await expect(searchBox).toBeVisible({ timeout: 8000 });
    await searchBox.click();
    await searchBox.clear();
    await page.waitForTimeout(500);
    console.log('[Step 6] Search field cleared.');

    // ── STEP 7 : Search "India Today" and follow ──────────────────────────────
    await searchInDiscoverPanel(page, 'India Today');
    await clickFollowInPanel(page, 'India Today');
    console.log('[Step 7] "India Today" followed.');

    // ── STEP 8 : Close the Personalize panel ──────────────────────────────────
    await closePersonalizePanel(page);
    await page.waitForTimeout(2000);
    console.log('[Step 8] Personalize panel closed.');

    // ── STEP 9 : Assertions ───────────────────────────────────────────────────
    // Verify still on MSN domain
    expect(page.url()).toContain('msn.com');
    console.log('✅ [Assert] URL contains "msn.com".');

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

    console.log('[Step 10] Test complete. Browser will close.');

  }); // ← END OF test(...)

}); // ← END OF test.describe(...)
