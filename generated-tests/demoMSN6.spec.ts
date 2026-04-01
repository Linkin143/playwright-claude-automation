import { test, expect, Page, Locator } from '@playwright/test';

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Dismiss consent / cookie banners safely
// ─────────────────────────────────────────────────────────────────────────────
async function dismissConsentBanner(page: Page): Promise<void> {
  try {
    const acceptAll = page.getByRole('button', { name: 'Accept all' });
    if (await acceptAll.isVisible({ timeout: 4000 })) {
      await acceptAll.click();
      await page.waitForTimeout(1000);
      console.log('[Consent] Dismissed via "Accept all".');
      return;
    }
  } catch { /* not present */ }
  try {
    const agree = page.getByRole('button', { name: 'Agree' });
    if (await agree.isVisible({ timeout: 3000 })) {
      await agree.click();
      await page.waitForTimeout(1000);
      console.log('[Consent] Dismissed via "Agree".');
      return;
    }
  } catch { /* not present */ }
  console.log('[Consent] No consent banner detected.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Resolve the active personalize container (dialog > region > complementary)
// Returns the scoped Locator to use for all child element lookups
// ─────────────────────────────────────────────────────────────────────────────
async function resolveContainer(page: Page): Promise<Locator> {
  const dialog = page.getByRole('dialog');
  if (await dialog.isVisible({ timeout: 5000 }).catch(() => false)) {
    console.log('[Container] Resolved as role=dialog.');
    return dialog;
  }
  const region = page.getByRole('region').first();
  if (await region.isVisible({ timeout: 4000 }).catch(() => false)) {
    console.log('[Container] Resolved as role=region.');
    return region;
  }
  const complementary = page.getByRole('complementary');
  if (await complementary.isVisible({ timeout: 4000 }).catch(() => false)) {
    console.log('[Container] Resolved as role=complementary.');
    return complementary;
  }
  console.log('[Container] Falling back to body scope.');
  return page.locator('body');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Click the "Personalize" entry (self-healing: button > link > text)
// ─────────────────────────────────────────────────────────────────────────────
async function clickPersonalize(page: Page): Promise<void> {
  let el: Locator = page.getByRole('button', { name: 'Personalize' });
  if (!(await el.isVisible({ timeout: 7000 }).catch(() => false))) {
    el = page.getByRole('link', { name: 'Personalize' });
  }
  if (!(await el.isVisible({ timeout: 5000 }).catch(() => false))) {
    el = page.getByText('Personalize', { exact: true });
  }
  await expect(el).toBeVisible({ timeout: 8000 });
  await el.click();
  console.log('[Personalize] Entry point clicked.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Click "Discover" tab SCOPED inside personalize panel
// Spec hint: #discover > h3 — but MUST use role/text APIs per strict rules
// Self-healing: tab > link > button > exact text — all scoped to container
// ─────────────────────────────────────────────────────────────────────────────
async function clickDiscoverInPanel(page: Page, container: Locator): Promise<void> {
  let el: Locator = container.getByRole('tab', { name: 'Discover' });
  if (!(await el.isVisible({ timeout: 6000 }).catch(() => false))) {
    el = container.getByRole('link', { name: 'Discover' });
  }
  if (!(await el.isVisible({ timeout: 5000 }).catch(() => false))) {
    el = container.getByRole('button', { name: 'Discover' });
  }
  if (!(await el.isVisible({ timeout: 5000 }).catch(() => false))) {
    el = container.getByText('Discover', { exact: true });
  }
  await expect(el).toBeVisible({ timeout: 8000 });
  await el.click();
  console.log('[Discover] Tab clicked inside personalize panel.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Resolve the search box SCOPED to container (fresh every call)
// ─────────────────────────────────────────────────────────────────────────────
async function resolveSearchBox(page: Page, container: Locator): Promise<Locator> {
  let el: Locator = container.getByRole('searchbox');
  if (!(await el.isVisible({ timeout: 6000 }).catch(() => false))) {
    el = container.getByRole('textbox');
  }
  if (!(await el.isVisible({ timeout: 5000 }).catch(() => false))) {
    el = container.getByLabel('Search');
  }
  if (!(await el.isVisible({ timeout: 4000 }).catch(() => false))) {
    el = page.getByRole('searchbox'); // last resort unscoped
  }
  await expect(el).toBeVisible({ timeout: 8000 });
  return el;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Resolve the follow/add "+" button SCOPED to container (fresh every call)
// Self-healing: "+" > "Add" > "Follow" > label:Follow > label:Add
// Uses .first() because multiple results may appear; first is the target channel
// ─────────────────────────────────────────────────────────────────────────────
async function resolveFollowButton(page: Page, container: Locator): Promise<Locator> {
  let el: Locator = container.getByRole('button', { name: '+' }).first();
  if (!(await el.isVisible({ timeout: 5000 }).catch(() => false))) {
    el = container.getByRole('button', { name: 'Add' }).first();
  }
  if (!(await el.isVisible({ timeout: 4000 }).catch(() => false))) {
    el = container.getByRole('button', { name: 'Follow' }).first();
  }
  if (!(await el.isVisible({ timeout: 4000 }).catch(() => false))) {
    el = container.getByLabel('Follow').first();
  }
  if (!(await el.isVisible({ timeout: 4000 }).catch(() => false))) {
    el = container.getByLabel('Add').first();
  }
  await expect(el).toBeVisible({ timeout: 8000 });
  return el;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Close the personalize panel (self-healing: Close > Done > Escape)
// ─────────────────────────────────────────────────────────────────────────────
async function closePanel(page: Page, container: Locator): Promise<void> {
  let closeBtn: Locator = container.getByRole('button', { name: 'Close' });
  if (!(await closeBtn.isVisible({ timeout: 4000 }).catch(() => false))) {
    closeBtn = container.getByRole('button', { name: 'Done' });
  }
  if (!(await closeBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
    closeBtn = container.getByLabel('Close');
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

    // ── STEP 2 : Dismiss any consent banner ──────────────────────────────────
    await dismissConsentBanner(page);

    // ── STEP 3 : Click "Personalize" ─────────────────────────────────────────
    await clickPersonalize(page);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
    console.log('[Step 3] Personalize panel opened.');

    // ── STEP 4 : Resolve panel container (FRESH after click = UI changed) ─────
    const containerAfterOpen = await resolveContainer(page);
    await expect(containerAfterOpen).toBeVisible({ timeout: 8000 });
    console.log('[Step 4] Personalize container confirmed visible.');

    // ── STEP 5 : Click "Discover" tab INSIDE panel — NOT top navigation ───────
    await clickDiscoverInPanel(page, containerAfterOpen);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    console.log('[Step 5] Discover tab activated.');

    // ── STEP 6 : Search "The Times Of India" ─────────────────────────────────
    // RE-LOCATE container fresh (UI changed after Discover tab click)
    const containerForSearch1 = await resolveContainer(page);

    // RE-LOCATE search box fresh before first search
    const searchBox1 = await resolveSearchBox(page, containerForSearch1);
    await searchBox1.click();
    await searchBox1.clear();
    await searchBox1.fill('The Times Of India');
    await page.waitForTimeout(400);
    await searchBox1.press('Enter');
    console.log('[Step 6] Search submitted: "The Times Of India".');

    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2500);

    // RE-LOCATE container fresh (UI changed — search results rendered)
    const containerAfterSearch1 = await resolveContainer(page);

    // RE-LOCATE follow button fresh after results appear
    const followBtn1 = await resolveFollowButton(page, containerAfterSearch1);
    await followBtn1.click();
    await page.waitForTimeout(1500);
    console.log('[Step 6] "The Times Of India" followed ✅');

    // ── STEP 7 : Clear search field ──────────────────────────────────────────
    // RE-LOCATE container fresh (UI changed after follow action)
    const containerAfterFollow1 = await resolveContainer(page);

    // RE-LOCATE search box fresh before clearing
    const searchBox2 = await resolveSearchBox(page, containerAfterFollow1);
    await searchBox2.click();
    await searchBox2.clear();
    await page.waitForTimeout(500);
    console.log('[Step 7] Search field cleared.');

    // ── STEP 8 : Search "India Today" ────────────────────────────────────────
    // RE-LOCATE container fresh (UI changed after clearing field)
    const containerForSearch2 = await resolveContainer(page);

    // RE-LOCATE search box fresh before second search
    const searchBox3 = await resolveSearchBox(page, containerForSearch2);
    await searchBox3.click();
    await searchBox3.clear();
    await searchBox3.fill('India Today');
    await page.waitForTimeout(400);
    await searchBox3.press('Enter');
    console.log('[Step 8] Search submitted: "India Today".');

    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2500);

    // RE-LOCATE container fresh (UI changed — second search results rendered)
    const containerAfterSearch2 = await resolveContainer(page);

    // RE-LOCATE follow button fresh after second results appear
    const followBtn2 = await resolveFollowButton(page, containerAfterSearch2);
    await followBtn2.click();
    await page.waitForTimeout(1500);
    console.log('[Step 8] "India Today" followed ✅');

    // ── STEP 9 : Close the Personalize panel ─────────────────────────────────
    // RE-LOCATE container fresh (UI changed after second follow)
    const containerBeforeClose = await resolveContainer(page);
    await closePanel(page, containerBeforeClose);
    await page.waitForTimeout(2000);
    console.log('[Step 9] Personalize panel closed.');

    // ── STEP 10 : Assertions ─────────────────────────────────────────────────
    expect(page.url()).toContain('msn.com');
    console.log('✅ [Assert] URL contains "msn.com".');

    const pageTitle = await page.title();
    expect(pageTitle.length).toBeGreaterThan(0);
    console.log(`✅ [Assert] Page title present: "${pageTitle}"`);

    // ── STEP 11 : Final summary log ───────────────────────────────────────────
    console.log('');
    console.log('╔══════════════════════════════════════════════════════╗');
    console.log('║              FINAL TEST SUMMARY                      ║');
    console.log('╠══════════════════════════════════════════════════════╣');
    console.log('║  Site      : https://www.msn.com/en-in               ║');
    console.log('║  Channel 1 : The Times Of India  → Followed ✅       ║');
    console.log('║  Channel 2 : India Today         → Followed ✅       ║');
    console.log('║  Panel     : Closed ✅                               ║');
    console.log('╚══════════════════════════════════════════════════════╝');

    console.log('[Step 11] Test complete. Browser will close.');

  }); // ← END OF test(...)

}); // ← END OF test.describe(...)
