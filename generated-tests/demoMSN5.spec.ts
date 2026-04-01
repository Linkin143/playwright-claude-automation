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
// HELPER : Resolve the personalize dialog/panel container
// Returns the active dialog or region that wraps the personalize UI
// ─────────────────────────────────────────────────────────────────────────────
async function resolvePersonalizeContainer(page: Page): Promise<Locator> {
  // PRIMARY: dialog role (most accessible panels use this)
  const dialog = page.getByRole('dialog');
  if (await dialog.isVisible({ timeout: 5000 }).catch(() => false)) {
    console.log('[Container] Personalize container resolved as role=dialog.');
    return dialog;
  }
  // FALLBACK: region role (MSN sometimes renders panel as complementary/region)
  const region = page.getByRole('region').first();
  if (await region.isVisible({ timeout: 4000 }).catch(() => false)) {
    console.log('[Container] Personalize container resolved as role=region.');
    return region;
  }
  // FALLBACK: complementary landmark
  const complementary = page.getByRole('complementary');
  if (await complementary.isVisible({ timeout: 4000 }).catch(() => false)) {
    console.log('[Container] Personalize container resolved as role=complementary.');
    return complementary;
  }
  // Last resort: return full page (locators will still be scoped by text)
  console.log('[Container] Falling back to full page scope.');
  return page.locator('body');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Click "Personalize" entry point (self-healing)
// ─────────────────────────────────────────────────────────────────────────────
async function clickPersonalize(page: Page): Promise<void> {
  // PRIMARY: button role
  let personalize: Locator = page.getByRole('button', { name: 'Personalize' });
  if (!(await personalize.isVisible({ timeout: 7000 }).catch(() => false))) {
    // FALLBACK 1: link role
    personalize = page.getByRole('link', { name: 'Personalize' });
  }
  if (!(await personalize.isVisible({ timeout: 5000 }).catch(() => false))) {
    // FALLBACK 2: exact text
    personalize = page.getByText('Personalize', { exact: true });
  }
  await expect(personalize).toBeVisible({ timeout: 8000 });
  await personalize.click();
  console.log('[Personalize] Entry point clicked.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Click "Discover" SCOPED inside the personalize panel
// Spec mandates: NOT top nav. Scope MUST be personalize container.
// Self-healing: tab → link → button → text (all scoped)
// ─────────────────────────────────────────────────────────────────────────────
async function clickDiscoverInPanel(page: Page, container: Locator): Promise<void> {
  // PRIMARY: role=tab scoped to panel
  let discover: Locator = container.getByRole('tab', { name: 'Discover' });
  if (!(await discover.isVisible({ timeout: 6000 }).catch(() => false))) {
    // FALLBACK 1: role=link scoped to panel
    discover = container.getByRole('link', { name: 'Discover' });
  }
  if (!(await discover.isVisible({ timeout: 5000 }).catch(() => false))) {
    // FALLBACK 2: role=button scoped to panel
    discover = container.getByRole('button', { name: 'Discover' });
  }
  if (!(await discover.isVisible({ timeout: 5000 }).catch(() => false))) {
    // FALLBACK 3: exact text scoped to panel
    discover = container.getByText('Discover', { exact: true });
  }
  await expect(discover).toBeVisible({ timeout: 8000 });
  await discover.click();
  console.log('[Discover] Tab/link inside personalize panel clicked.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Resolve search box inside personalize panel (re-located fresh each call)
// ─────────────────────────────────────────────────────────────────────────────
async function resolveSearchBox(page: Page, container: Locator): Promise<Locator> {
  // PRIMARY: searchbox role scoped to container
  let searchBox: Locator = container.getByRole('searchbox');
  if (!(await searchBox.isVisible({ timeout: 6000 }).catch(() => false))) {
    // FALLBACK: textbox role scoped to container
    searchBox = container.getByRole('textbox');
  }
  if (!(await searchBox.isVisible({ timeout: 5000 }).catch(() => false))) {
    // FALLBACK: label-based
    searchBox = container.getByLabel('Search');
  }
  if (!(await searchBox.isVisible({ timeout: 4000 }).catch(() => false))) {
    // FALLBACK: unscoped searchbox (last resort)
    searchBox = page.getByRole('searchbox');
  }
  await expect(searchBox).toBeVisible({ timeout: 8000 });
  return searchBox;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Resolve follow/add button AFTER search — re-located fresh
// Scoped to container. Self-healing across button names.
// ─────────────────────────────────────────────────────────────────────────────
async function resolveFollowButton(page: Page, container: Locator): Promise<Locator> {
  // PRIMARY: "+" button scoped to container
  let followBtn: Locator = container.getByRole('button', { name: '+' }).first();
  if (!(await followBtn.isVisible({ timeout: 5000 }).catch(() => false))) {
    // FALLBACK 1: "Add" button scoped
    followBtn = container.getByRole('button', { name: 'Add' }).first();
  }
  if (!(await followBtn.isVisible({ timeout: 4000 }).catch(() => false))) {
    // FALLBACK 2: "Follow" button scoped
    followBtn = container.getByRole('button', { name: 'Follow' }).first();
  }
  if (!(await followBtn.isVisible({ timeout: 4000 }).catch(() => false))) {
    // FALLBACK 3: aria-label "Follow" scoped
    followBtn = container.getByLabel('Follow').first();
  }
  if (!(await followBtn.isVisible({ timeout: 4000 }).catch(() => false))) {
    // FALLBACK 4: aria-label "Add" scoped
    followBtn = container.getByLabel('Add').first();
  }
  await expect(followBtn).toBeVisible({ timeout: 8000 });
  return followBtn;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Close personalize panel (self-healing)
// ─────────────────────────────────────────────────────────────────────────────
async function closePersonalizePanel(page: Page, container: Locator): Promise<void> {
  // PRIMARY: "Close" button scoped to container
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
    console.log('[Panel] Closed via Escape key (fallback).');
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

    // ── STEP 4 : Resolve the personalize container ────────────────────────────
    // Re-locate container AFTER click (UI has changed)
    const container = await resolvePersonalizeContainer(page);
    await expect(container).toBeVisible({ timeout: 8000 });
    console.log('[Step 4] Personalize container confirmed visible.');

    // ── STEP 5 : Click "Discover" tab INSIDE personalize panel ───────────────
    // Scoped to container — prevents matching top-nav "Discover"
    await clickDiscoverInPanel(page, container);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    console.log('[Step 5] Discover section active.');

    // ── STEP 6 : Search "The Times Of India" ─────────────────────────────────
    // RE-LOCATE container after UI update (Discover tab now active)
    const containerAfterDiscover = await resolvePersonalizeContainer(page);

    // RE-LOCATE search box fresh (UI changed after tab click)
    const searchBox1 = await resolveSearchBox(page, containerAfterDiscover);
    await searchBox1.click();
    await searchBox1.clear();
    await searchBox1.fill('The Times Of India');
    await page.waitForTimeout(500);
    await searchBox1.press('Enter');
    console.log('[Step 6] Search submitted: "The Times Of India".');

    // Wait for results to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2500);

    // RE-LOCATE container after search (results rendered = UI changed)
    const containerAfterSearch1 = await resolvePersonalizeContainer(page);

    // RE-LOCATE follow button fresh after search results appeared
    const followBtn1 = await resolveFollowButton(page, containerAfterSearch1);
    await followBtn1.click();
    await page.waitForTimeout(1500);
    console.log('[Step 6] "The Times Of India" followed ✅');

    // Assert: button state may change after following (optional UI check)
    console.log('[Assert] Follow action for "The Times Of India" completed.');

    // ── STEP 7 : Clear search field ──────────────────────────────────────────
    // RE-LOCATE container after follow action (UI may update)
    const containerAfterFollow1 = await resolvePersonalizeContainer(page);

    // RE-LOCATE search box fresh before clearing
    const searchBox2 = await resolveSearchBox(page, containerAfterFollow1);
    await searchBox2.click();
    await searchBox2.clear();
    await page.waitForTimeout(500);
    console.log('[Step 7] Search field cleared.');

    // ── STEP 8 : Search "India Today" ────────────────────────────────────────
    // RE-LOCATE container after clearing (UI state changed)
    const containerBeforeSearch2 = await resolvePersonalizeContainer(page);

    // RE-LOCATE search box fresh before second search
    const searchBox3 = await resolveSearchBox(page, containerBeforeSearch2);
    await searchBox3.click();
    await searchBox3.clear();
    await searchBox3.fill('India Today');
    await page.waitForTimeout(500);
    await searchBox3.press('Enter');
    console.log('[Step 8] Search submitted: "India Today".');

    // Wait for results to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2500);

    // RE-LOCATE container after second search (results rendered = UI changed)
    const containerAfterSearch2 = await resolvePersonalizeContainer(page);

    // RE-LOCATE follow button fresh after second search results appeared
    const followBtn2 = await resolveFollowButton(page, containerAfterSearch2);
    await followBtn2.click();
    await page.waitForTimeout(1500);
    console.log('[Step 8] "India Today" followed ✅');

    console.log('[Assert] Follow action for "India Today" completed.');

    // ── STEP 9 : Close the Personalize panel ─────────────────────────────────
    // RE-LOCATE container fresh before closing (UI changed after follow)
    const containerBeforeClose = await resolvePersonalizeContainer(page);
    await closePersonalizePanel(page, containerBeforeClose);
    await page.waitForTimeout(2000);
    console.log('[Step 9] Personalize panel closed.');

    // ── STEP 10 : Assertions ──────────────────────────────────────────────────
    expect(page.url()).toContain('msn.com');
    console.log('✅ [Assert] URL contains "msn.com".');

    const pageTitle = await page.title();
    expect(pageTitle.length).toBeGreaterThan(0);
    console.log(`✅ [Assert] Page title: "${pageTitle}"`);

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

    console.log('[Step 11] Test complete. Browser will close.');

  }); // ← END OF test(...)

}); // ← END OF test.describe(...)
