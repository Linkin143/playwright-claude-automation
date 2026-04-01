import { test, expect } from '@playwright/test';

/**
 * ============================================================
 * FILE    : demoMSN_FINAL3.spec.ts
 * SITE    : https://www.msn.com/en-in
 * PURPOSE : Follow "The Times Of India" and "India Today"
 *           channels via the MSN Personalize → Discover UI.
 *
 * VERIFIED DOM FINDINGS (live browser execution, Mar 2026):
 * ─────────────────────────────────────────────────────────────
 * • MSN uses Fluent Design System Web Components. Playwright's
 *   locator API auto-pierces all shadow roots – no extra handling.
 *
 * • Personalize button: role="button" aria-label includes
 *   "Personalize your feed". MUST use { force: true } because the
 *   <channel-store> web component intercepts pointer events.
 *
 * • Personalize dialog: role="dialog" aria-label="Personalize My Feed"
 *
 * • Discover tab: role="treeitem"
 *   aria-label="Navigate to Discover section"
 *   (already selected by default; still clicked per spec)
 *
 * • Channel search box: role="searchbox"
 *   aria-label="Search for channels to follow"
 *   → resolves to exactly ONE element (strict-mode safe)
 *
 * • Follow button: role="button" aria-label="Follow <Channel Name>"
 *   After clicking → changes to "Unfollow <Channel Name>"
 *   (used as assertion signal for success)
 *
 * • Close button: role="button" aria-label="Close" (inside dialog)
 *
 * TIMEOUTS  : describe-level = 120 000 ms
 * SLOW TEST : marked via test.slow() for real website latency
 * BROWSERS  : Chromium, Firefox, WebKit
 * ============================================================
 */

test.describe('MSN Personalize – Follow Channels', () => {

  test.describe.configure({ timeout: 120_000 });

  test(
    'Follow "The Times Of India" and "India Today" via Discover',
    async ({ page }) => {

      // Mark as slow – real website with Web Components rendering time
      test.slow();

      // ── STEP 1 : Navigate & stabilise ────────────────────────────
      await page.goto('https://www.msn.com/en-in', {
        waitUntil: 'domcontentloaded',
        timeout: 30_000,
      });
      // Allow Fluent Web Components to fully register and render
      await page.waitForTimeout(5000);
      console.log('[S1] ✅ MSN loaded and stabilised');

      // ── STEP 2 : Dismiss any edge-browser / cookie banner ─────────
      try {
        const bannerBtn = page
          .getByRole('button', { name: /dismiss|close banner/i })
          .first();
        if (await bannerBtn.isVisible({ timeout: 2000 })) {
          await bannerBtn.click({ force: true });
          await page.waitForTimeout(500);
          console.log('[S2] ℹ️  Banner dismissed');
        }
      } catch {
        console.log('[S2] ℹ️  No banner present');
      }

      // ── STEP 3 : Click "Personalize" ──────────────────────────────
      // Primary  : aria-label contains "Personalize your feed"
      // Fallback : visible text "Personalize"
      // { force: true } REQUIRED – channel-store overlay intercepts
      let personalizeBtn = page.getByRole('button', {
        name: /Personalize your feed/i,
      });
      if (!(await personalizeBtn.isVisible({ timeout: 5000 }).catch(() => false))) {
        personalizeBtn = page.getByText('Personalize', { exact: false }).first();
      }
      await expect(personalizeBtn).toBeVisible({ timeout: 10_000 });
      await personalizeBtn.click({ force: true });
      console.log('[S3] ✅ Personalize clicked (force)');

      // ── STEP 4 : Verify "Personalize My Feed" dialog opened ───────
      const dialog = page.getByRole('dialog', { name: 'Personalize My Feed' });
      await expect(dialog).toBeVisible({ timeout: 15_000 });
      await page.waitForTimeout(1000); // let dialog Web Components render
      console.log('[S4] ✅ Personalize My Feed dialog opened');

      // ── STEP 5 : Click "Discover" inside the dialog ────────────────
      // NOT the top navigation Discover link.
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
      console.log('[S5] ✅ Discover tab clicked');

      // ── Helper: always return a FRESH locator after any UI change ──
      // Resolves to exactly ONE element (strict-mode safe):
      //   input[role="searchbox"][aria-label="Search for channels to follow"]
      const channelSearch = () =>
        page.getByRole('searchbox', { name: 'Search for channels to follow' });

      await expect(channelSearch()).toBeVisible({ timeout: 10_000 });

      // ══════════════════════════════════════════════════════════════
      // SEARCH 1 : "The Times Of India"
      // ══════════════════════════════════════════════════════════════

      // ── STEP 6a : Type search term ──────────────────────────────────
      const sb1 = channelSearch();
      await sb1.click({ force: true });
      await page.waitForTimeout(300);
      await sb1.fill('The Times Of India');
      await expect(sb1).toHaveValue('The Times Of India', { timeout: 5_000 });
      console.log('[S6a] ✅ Typed "The Times Of India"');

      // ── STEP 6b : Press Enter ───────────────────────────────────────
      await sb1.press('Enter');
      console.log('[S6b] ✅ Enter pressed');
      await page.waitForTimeout(3000); // wait for search results to render

      // ── STEP 7 : Click Follow for "The Times Of India" ─────────────
      // Self-healing: if already followed (Unfollow button exists) → pass.
      // Otherwise click the first Follow button.
      // { force: true } required – button may be behind overlay or clipped.
      const toiFollowBtns   = page.getByRole('button', { name: /Follow.*Times of India/i });
      const toiUnfollowBtns = page.getByRole('button', { name: /Unfollow.*Times of India/i });
      const toiFC  = await toiFollowBtns.count();
      const toiUFC = await toiUnfollowBtns.count();
      console.log(`[S7] TOI Follow:${toiFC} Unfollow:${toiUFC}`);

      if (toiFC > 0) {
        const toiBtn = toiFollowBtns.first();
        await toiBtn.scrollIntoViewIfNeeded().catch(() => {});
        await expect(toiBtn).toBeAttached({ timeout: 8_000 });
        await toiBtn.click({ force: true });
        await page.waitForTimeout(2000);
        console.log('[S7] ✅ Clicked Follow – The Times of India');
      } else {
        console.log('[S7] ✅ The Times of India already followed');
      }

      // ASSERTION 1 : "Unfollow Times of India" button must exist
      const toiConfirmed = await page
        .getByRole('button', { name: /Unfollow.*Times of India/i })
        .count() > 0;
      expect(toiConfirmed, '"The Times of India" follow assertion FAILED').toBe(true);
      console.log('[S7] ✅ ASSERTION PASSED – The Times of India followed');

      // ══════════════════════════════════════════════════════════════
      // SEARCH 2 : "India Today"
      // ══════════════════════════════════════════════════════════════

      // ── STEP 8 : Clear the search field ───────────────────────────
      // Re-locate after DOM change – never reuse stale ref
      const sb2 = channelSearch();
      await sb2.click({ force: true });
      await sb2.press('Control+a');
      await sb2.press('Delete');
      await page.waitForTimeout(500);
      const clearedVal = await sb2.inputValue().catch(() => '');
      console.log(`[S8] ✅ Cleared – value: "${clearedVal}"`);

      // ── STEP 9a : Type "India Today" ───────────────────────────────
      const sb3 = channelSearch(); // fresh reference
      await sb3.click({ force: true });
      await sb3.fill('India Today');
      await expect(sb3).toHaveValue('India Today', { timeout: 5_000 });
      console.log('[S9a] ✅ Typed "India Today"');

      // ── STEP 9b : Press Enter ───────────────────────────────────────
      await sb3.press('Enter');
      console.log('[S9b] ✅ Enter pressed');
      await page.waitForTimeout(3000);

      // ── STEP 10 : Click Follow for "India Today" ───────────────────
      const itFollowBtns   = page.getByRole('button', { name: /Follow.*India Today/i });
      const itUnfollowBtns = page.getByRole('button', { name: /Unfollow.*India Today/i });
      const itFC  = await itFollowBtns.count();
      const itUFC = await itUnfollowBtns.count();
      console.log(`[S10] IT Follow:${itFC} Unfollow:${itUFC}`);

      if (itFC > 0) {
        const itBtn = itFollowBtns.first();
        await itBtn.scrollIntoViewIfNeeded().catch(() => {});
        await expect(itBtn).toBeAttached({ timeout: 8_000 });
        await itBtn.click({ force: true });
        await page.waitForTimeout(2000);
        console.log('[S10] ✅ Clicked Follow – India Today');
      } else {
        console.log('[S10] ✅ India Today already followed');
      }

      // ASSERTION 2 : "Unfollow India Today" button must exist
      const itConfirmed = await page
        .getByRole('button', { name: /Unfollow.*India Today/i })
        .count() > 0;
      expect(itConfirmed, '"India Today" follow assertion FAILED').toBe(true);
      console.log('[S10] ✅ ASSERTION PASSED – India Today followed');

      // ── STEP 11 : Close the Personalize dialog ────────────────────
      await page.waitForTimeout(500);

      // Re-acquire dialog reference (never reuse stale)
      const dialogFresh = page.getByRole('dialog', { name: 'Personalize My Feed' });

      // Primary  : Close button scoped inside dialog
      // Fallback : global Close button on page
      let closeBtn = dialogFresh.getByRole('button', { name: /^Close$/i }).first();
      if (!(await closeBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
        closeBtn = page.getByRole('button', { name: /^Close$/i }).first();
      }
      await expect(closeBtn).toBeVisible({ timeout: 10_000 });
      await closeBtn.click({ force: true });
      console.log('[S11] ✅ Close button clicked');

      // ASSERTION 3 : Dialog must be gone
      await expect(
        page.getByRole('dialog', { name: 'Personalize My Feed' }),
      ).not.toBeVisible({ timeout: 10_000 });
      console.log('[S11] ✅ ASSERTION PASSED – Personalize dialog closed');

      // ── STEP 12 : Final stabilisation before browser close ─────────
      await page.waitForTimeout(2000);
      console.log('[S12] ✅ All steps complete – browser closing');

    }, // end test callback
  );   // end test()

}); // end test.describe
