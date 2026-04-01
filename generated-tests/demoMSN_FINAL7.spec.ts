import { test, expect } from '@playwright/test';

/**
 * ============================================================
 * FILE    : demoMSN_FINAL7.spec.ts
 * SITE    : https://www.msn.com/en-in
 * PURPOSE : Follow "The Times Of India" and "India Today"
 *           via MSN Personalize → Discover search UI.
 *
 * VERIFIED DOM FINDINGS (live browser, Mar 2026):
 * ─────────────────────────────────────────────────────────────
 * • MSN renders inside Fluent Design System Web Components.
 *   Playwright's locator API auto-pierces all shadow roots —
 *   regular querySelectorAll() misses shadow-DOM elements.
 *
 * • Personalize button:
 *     role="button", aria-label ~"Personalize your feed"
 *     MUST use { force: true } — channel-store overlay intercepts.
 *
 * • Dialog: role="dialog", aria-label="Personalize My Feed"
 *
 * • Discover tab: role="treeitem"
 *     aria-label="Navigate to Discover section"  (already selected
 *     by default; still clicked per spec)
 *
 * • Channel search box: role="searchbox"
 *     name="Search for channels to follow"
 *     → resolves to exactly 1 element (strict-mode safe).
 *     Page has 2 searchboxes total, this name is unique.
 *
 * • Follow buttons: role="button"
 *     aria-label="Follow <Channel>" (multiple may exist — use .first())
 *     After click → "Unfollow <Channel>" button appears = assertion.
 *     scrollIntoViewIfNeeded() + { force: true } required.
 *
 * • Enter key does NOT close dialog (confirmed in live run).
 *   Use page.keyboard.press('Enter') safely.
 *
 * • Close button: role="button" name="Close" scoped inside dialog.
 *
 * TIMEOUTS : describe = 120 000 ms | test.slow() triples limits
 * BROWSERS : Chromium · Firefox · WebKit
 * ============================================================
 */

test.describe('MSN Personalize – Follow Channels via Discover', () => {

  test.describe.configure({ timeout: 120_000 });

  test('Follow "The Times Of India" and "India Today"', async ({ page }) => {

    test.slow(); // real website — extra tolerance for network latency

    // ── STEP 1 : Navigate and wait for full stabilisation ─────────
    await page.goto('https://www.msn.com/en-in', {
      waitUntil: 'domcontentloaded',
      timeout: 30_000,
    });
    // Fluent Web Components need time to register and render
    await page.waitForTimeout(5000);
    console.log('[S1] MSN loaded and stabilised');

    // ── STEP 2 : Dismiss any banner (edge-browser / cookie) ──────
    try {
      const bannerBtn = page
        .getByRole('button', { name: /dismiss|close banner/i })
        .first();
      if (await bannerBtn.isVisible({ timeout: 2000 })) {
        await bannerBtn.click({ force: true });
        await page.waitForTimeout(500);
        console.log('[S2] Banner dismissed');
      }
    } catch {
      console.log('[S2] No banner present');
    }

    // ── STEP 3 : Click "Personalize" ─────────────────────────────
    // Primary  : role="button" aria-label contains "Personalize your feed"
    // Fallback : visible text "Personalize"
    // { force: true } REQUIRED — channel-store overlay intercepts
    let personalizeBtn = page.getByRole('button', {
      name: /Personalize your feed/i,
    });
    if (!(await personalizeBtn.isVisible({ timeout: 5000 }).catch(() => false))) {
      personalizeBtn = page.getByText('Personalize', { exact: false }).first();
    }
    await expect(personalizeBtn).toBeVisible({ timeout: 10_000 });
    await personalizeBtn.click({ force: true });
    console.log('[S3] Personalize clicked');

    // ── STEP 4 : Verify dialog opened ────────────────────────────
    const dialog = page.getByRole('dialog', { name: 'Personalize My Feed' });
    await expect(dialog).toBeVisible({ timeout: 15_000 });
    await page.waitForTimeout(500);
    console.log('[S4] Dialog "Personalize My Feed" opened');

    // ── STEP 5 : Click "Discover" inside dialog (NOT top nav) ────
    // Primary  : treeitem aria-label="Navigate to Discover section"
    // Fallback : treeitem with text "Discover"
    let discoverItem = page.getByRole('treeitem', {
      name: /Navigate to Discover/i,
    });
    if (!(await discoverItem.isVisible({ timeout: 3000 }).catch(() => false))) {
      discoverItem = page.getByRole('treeitem', { name: /Discover/i });
    }
    await expect(discoverItem).toBeVisible({ timeout: 10_000 });
    await discoverItem.click({ force: true });
    await page.waitForTimeout(800);
    console.log('[S5] Discover tab clicked');

    // Helper: always returns a FRESH locator (never reuse stale refs).
    // Resolves to exactly ONE element — strict-mode safe.
    const getSearchBox = () =>
      page.getByRole('searchbox', { name: 'Search for channels to follow' });

    await expect(getSearchBox()).toBeVisible({ timeout: 10_000 });

    // ══════════════════════════════════════════════════════════════
    // SEARCH 1 : "The Times Of India"
    // ══════════════════════════════════════════════════════════════

    // ── STEP 6a : Type search term ─────────────────────────────────
    const sb1 = getSearchBox();
    await sb1.click({ force: true });
    await page.waitForTimeout(300);
    await sb1.fill('The Times Of India');
    await expect(sb1).toHaveValue('The Times Of India', { timeout: 5_000 });
    console.log('[S6a] Typed "The Times Of India"');

    // ── STEP 6b : Press Enter (verified: does NOT close dialog) ────
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    console.log('[S6b] Enter pressed – waiting for results');

    // ── STEP 7 : Click Follow for "The Times Of India" ─────────────
    // Self-healing: if already followed → Unfollow button exists → pass.
    // Multiple Follow buttons may exist (recommended + results) — .first().
    const toiFollowBtns   = page.getByRole('button', { name: /Follow.*Times of India/i });
    const toiUnfollowBtns = page.getByRole('button', { name: /Unfollow.*Times of India/i });
    const toiFC  = await toiFollowBtns.count();
    const toiUFC = await toiUnfollowBtns.count();
    console.log(`[S7] TOI Follow:${toiFC} Unfollow:${toiUFC}`);

    if (toiFC > 0) {
      await toiFollowBtns.first().scrollIntoViewIfNeeded().catch(() => {});
      await expect(toiFollowBtns.first()).toBeAttached({ timeout: 8_000 });
      await toiFollowBtns.first().click({ force: true });
      await page.waitForTimeout(2000);
      console.log('[S7] Clicked Follow TOI');
    } else {
      console.log('[S7] TOI already followed');
    }

    // ASSERTION 1 : Unfollow button present → channel is followed
    const toiUFAfter = await page
      .getByRole('button', { name: /Unfollow.*Times of India/i })
      .count();
    expect(toiUFAfter, 'FAIL: TOI Unfollow button not found').toBeGreaterThan(0);
    console.log('[S7] ✅ PASS – The Times of India followed');

    // ══════════════════════════════════════════════════════════════
    // SEARCH 2 : "India Today"
    // ══════════════════════════════════════════════════════════════

    // ── STEP 8 : Clear search field ────────────────────────────────
    // Re-locate after DOM change — never reuse stale references
    const sb2 = getSearchBox();
    await sb2.click({ force: true });
    await sb2.press('Control+a');
    await sb2.press('Delete');
    await page.waitForTimeout(400);
    const clearedVal = await sb2.inputValue().catch(() => '');
    console.log(`[S8] Search cleared. Value: "${clearedVal}"`);

    // ── STEP 9a : Type "India Today" ───────────────────────────────
    const sb3 = getSearchBox(); // fresh reference after DOM update
    await sb3.fill('India Today');
    await expect(sb3).toHaveValue('India Today', { timeout: 5_000 });
    console.log('[S9a] Typed "India Today"');

    // ── STEP 9b : Press Enter ───────────────────────────────────────
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    console.log('[S9b] Enter pressed – waiting for results');

    // ── STEP 10 : Click Follow for "India Today" ────────────────────
    const itFollowBtns   = page.getByRole('button', { name: /Follow.*India Today/i });
    const itUnfollowBtns = page.getByRole('button', { name: /Unfollow.*India Today/i });
    const itFC  = await itFollowBtns.count();
    const itUFC = await itUnfollowBtns.count();
    console.log(`[S10] IT Follow:${itFC} Unfollow:${itUFC}`);

    if (itFC > 0) {
      await itFollowBtns.first().scrollIntoViewIfNeeded().catch(() => {});
      await expect(itFollowBtns.first()).toBeAttached({ timeout: 8_000 });
      await itFollowBtns.first().click({ force: true });
      await page.waitForTimeout(2000);
      console.log('[S10] Clicked Follow India Today');
    } else {
      console.log('[S10] India Today already followed');
    }

    // ASSERTION 2 : Unfollow button present → channel is followed
    const itUFAfter = await page
      .getByRole('button', { name: /Unfollow.*India Today/i })
      .count();
    expect(itUFAfter, 'FAIL: India Today Unfollow button not found').toBeGreaterThan(0);
    console.log('[S10] ✅ PASS – India Today followed');

    // ── STEP 11 : Close the Personalize dialog ─────────────────────
    await page.waitForTimeout(500);

    // Re-acquire dialog reference (never reuse stale)
    const dialogFresh = page.getByRole('dialog', { name: 'Personalize My Feed' });

    // Primary  : Close button scoped inside dialog
    // Fallback : first Close button on the page
    let closeBtn = dialogFresh.getByRole('button', { name: /^Close$/i }).first();
    if (!(await closeBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
      closeBtn = page.getByRole('button', { name: /^Close$/i }).first();
    }
    await expect(closeBtn).toBeVisible({ timeout: 10_000 });
    await closeBtn.click({ force: true });
    console.log('[S11] Close button clicked');

    // ASSERTION 3 : Dialog must be gone
    await expect(
      page.getByRole('dialog', { name: 'Personalize My Feed' }),
    ).not.toBeVisible({ timeout: 10_000 });
    console.log('[S11] ✅ PASS – Dialog closed');

    // ── STEP 12 : Final stabilisation before browser closes ────────
    await page.waitForTimeout(2000);
    console.log('[S12] All steps complete – browser closing');

  }); // end test

}); // end describe
