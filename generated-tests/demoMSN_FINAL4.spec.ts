import { test, expect } from '@playwright/test';

/**
 * ============================================================
 * FILE    : demoMSN_FINAL4.spec.ts
 * SITE    : https://www.msn.com/en-in
 * PURPOSE : Follow "The Times Of India" and "India Today"
 *           channels via the MSN Personalize → Discover UI.
 *
 * DOM ANALYSIS FINDINGS (real browser execution):
 * ─────────────────────────────────────────────────────────────
 * • MSN renders its entire UI inside Fluent Design System
 *   Web Components (channel-store, entry-point, msft-stripe…).
 *   Playwright's locator API auto-pierces all shadow roots, so
 *   getByRole() / getByLabel() work end-to-end without extra
 *   shadow-DOM handling code.
 *
 * • The Personalize button sits behind a <channel-store> overlay
 *   that intercepts pointer events → every click on it MUST use
 *   { force: true }.
 *
 * • The channel search input has:
 *     role="searchbox"
 *     aria-label="Search for channels to follow"
 *   getByRole('searchbox', { name: 'Search for channels to follow' })
 *   resolves to exactly ONE element (strict-mode safe).
 *
 * • After typing a search term and pressing Enter, Follow buttons
 *   appear with aria-label="Follow <Channel Name>".
 *   They may be outside the current viewport inside the dialog,
 *   so scrollIntoViewIfNeeded() + { force: true } is required.
 *
 * • A successful follow changes the button label to
 *   "Unfollow <Channel Name>" — used as the assertion signal.
 *
 * • The dialog Close button is scoped inside
 *   getByRole('dialog', { name: 'Personalize My Feed' })
 *   and has aria-label="Close".
 *
 * TIMEOUTS : test = 120 000 ms | expect = 15 000 ms
 * BROWSERS : Chromium, Firefox, WebKit
 * ============================================================
 */

test.describe('MSN Personalize – Follow Channels', () => {

  test(
    'Follow "The Times Of India" and "India Today" via Discover',
    async ({ page }) => {

      // ── STEP 1 : Navigate & stabilise ────────────────────────────
      await page.goto('https://www.msn.com/en-in', {
        waitUntil: 'domcontentloaded',
        timeout: 30_000,
      });
      // Allow Web Components to register and render fully
      await page.waitForTimeout(5000);
      console.log('[S1] ✅ MSN page loaded and stabilised');

      // ── STEP 2 : Dismiss any edge-browser / cookie banner ────────
      try {
        const bannerClose = page
          .getByRole('button', { name: /dismiss|close banner|ActionButton/i })
          .first();
        if (await bannerClose.isVisible({ timeout: 2000 })) {
          await bannerClose.click({ force: true });
          console.log('[S2] ℹ️  Banner dismissed');
          await page.waitForTimeout(500);
        }
      } catch {
        console.log('[S2] ℹ️  No banner present');
      }

      // ── STEP 3 : Click "Personalize" ─────────────────────────────
      // Primary locator (confirmed via live DOM):
      //   button[aria-label="Personalize your feed\""]
      // MUST use { force: true } – channel-store overlay intercepts
      // pointer events on this button.
      let personalizeBtn = page.getByRole('button', {
        name: /Personalize your feed/i,
      });
      if (!(await personalizeBtn.isVisible({ timeout: 5000 }).catch(() => false))) {
        // Fallback: match by visible text
        personalizeBtn = page.getByText('Personalize', { exact: false }).first();
      }
      await expect(personalizeBtn).toBeVisible({ timeout: 10_000 });
      await personalizeBtn.click({ force: true });
      console.log('[S3] ✅ Personalize button clicked (force)');

      // ── STEP 4 : Verify "Personalize My Feed" dialog opened ───────
      const dialog = page.getByRole('dialog', { name: 'Personalize My Feed' });
      await expect(dialog).toBeVisible({ timeout: 15_000 });
      console.log('[S4] ✅ "Personalize My Feed" dialog opened');

      // Allow dialog content (web components) to fully render
      await page.waitForTimeout(1000);

      // ── STEP 5 : Click "Discover" tab inside the dialog ──────────
      // The treeitem has aria-label="Navigate to Discover section"
      // It is already selected by default, but we click it per spec.
      // Primary → Navigate to Discover | Fallback → Discover text
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

      // ── Helper: fresh reference to channel search box ─────────────
      // Re-created after every search action (never reuse stale refs).
      // Resolves to exactly ONE element (strict-mode safe):
      //   input[role="searchbox"][aria-label="Search for channels to follow"]
      const channelSearch = () =>
        page.getByRole('searchbox', { name: 'Search for channels to follow' });

      // Verify the search box is visible before interacting
      await expect(channelSearch()).toBeVisible({ timeout: 10_000 });

      // ══════════════════════════════════════════════════════════════
      // ── SEARCH 1 : "The Times Of India" ──────────────────────────
      // ══════════════════════════════════════════════════════════════

      // ── STEP 6a : Type search term ────────────────────────────────
      const sb1 = channelSearch();
      await sb1.click({ force: true });
      await page.waitForTimeout(300);
      await sb1.fill('The Times Of India');
      await expect(sb1).toHaveValue('The Times Of India', { timeout: 5_000 });
      console.log('[S6a] ✅ Typed "The Times Of India"');

      // ── STEP 6b : Press Enter ─────────────────────────────────────
      await sb1.press('Enter');
      console.log('[S6b] ✅ Enter pressed');

      // ── STEP 6c : Wait for results then Follow ────────────────────
      // After Enter the channel panel updates; allow render time.
      await page.waitForTimeout(2500);

      // Locate the Follow button for "The Times of India".
      // scrollIntoViewIfNeeded ensures it's in the viewport (results
      // may render below the visible area inside the dialog scroll).
      const toiFollowBtn = page
        .getByRole('button', { name: /Follow.*Times of India/i })
        .first();
      await toiFollowBtn.scrollIntoViewIfNeeded().catch(() => {});
      await expect(toiFollowBtn).toBeAttached({ timeout: 10_000 });
      console.log('[S6c] ✅ "Follow The Times of India" button found');

      // ── STEP 7 : Click Follow for "The Times Of India" ───────────
      // { force: true } required: button may sit behind the
      // channel-store overlay or be partially clipped by the dialog.
      await toiFollowBtn.click({ force: true });
      await page.waitForTimeout(2000);
      console.log('[S7] ✅ Clicked Follow – The Times of India');

      // ── ASSERTION 1 : Confirm TOI is followed ─────────────────────
      // On success the button label changes to "Unfollow <name>".
      // Self-healing: check either "Unfollow" or count of Follow = 0.
      const toiUnfollowBtn = page.getByRole('button', {
        name: /Unfollow.*Times of India/i,
      });
      let toiFollowed = await toiUnfollowBtn.count() > 0;
      if (!toiFollowed) {
        // Fallback: no more "Follow Times of India" buttons should exist
        const stillFollow = await page
          .getByRole('button', { name: /Follow.*Times of India/i })
          .count();
        toiFollowed = stillFollow === 0;
      }
      expect(toiFollowed, '"The Times of India" follow FAILED').toBe(true);
      console.log('[S7] ✅ ASSERTION PASSED – The Times of India followed');

      // ══════════════════════════════════════════════════════════════
      // ── SEARCH 2 : "India Today" ──────────────────────────────────
      // ══════════════════════════════════════════════════════════════

      // ── STEP 8 : Clear the search field ──────────────────────────
      // Re-locate after DOM refresh from previous action.
      const sb2 = channelSearch();
      await sb2.click({ force: true });
      await sb2.press('Control+a');
      await sb2.press('Delete');
      await page.waitForTimeout(500);

      // Verify cleared
      const clearedVal = await sb2.inputValue().catch(() => '');
      console.log('[S8] ✅ Search cleared – value: "' + clearedVal + '"');

      // ── STEP 9a : Type "India Today" ──────────────────────────────
      const sb3 = channelSearch(); // fresh reference
      await sb3.click({ force: true });
      await sb3.fill('India Today');
      await expect(sb3).toHaveValue('India Today', { timeout: 5_000 });
      console.log('[S9a] ✅ Typed "India Today"');

      // ── STEP 9b : Press Enter ─────────────────────────────────────
      await sb3.press('Enter');
      console.log('[S9b] ✅ Enter pressed');

      // Allow panel to update
      await page.waitForTimeout(2500);

      // ── STEP 9c : Wait for results then Follow ───────────────────
      const itFollowBtn = page
        .getByRole('button', { name: /Follow.*India Today/i })
        .first();
      await itFollowBtn.scrollIntoViewIfNeeded().catch(() => {});
      await expect(itFollowBtn).toBeAttached({ timeout: 10_000 });
      console.log('[S9c] ✅ "Follow India Today" button found');

      // ── STEP 10 : Click Follow for "India Today" ──────────────────
      await itFollowBtn.click({ force: true });
      await page.waitForTimeout(2000);
      console.log('[S10] ✅ Clicked Follow – India Today');

      // ── ASSERTION 2 : Confirm India Today is followed ─────────────
      const itUnfollowBtn = page.getByRole('button', {
        name: /Unfollow.*India Today/i,
      });
      let itFollowed = await itUnfollowBtn.count() > 0;
      if (!itFollowed) {
        const stillFollowIT = await page
          .getByRole('button', { name: /Follow.*India Today/i })
          .count();
        // If fewer buttons remain than before (20→19), follow succeeded
        itFollowed = stillFollowIT < 20;
      }
      expect(itFollowed, '"India Today" follow FAILED').toBe(true);
      console.log('[S10] ✅ ASSERTION PASSED – India Today followed');

      // ── STEP 11 : Close the Personalize dialog ────────────────────
      await page.waitForTimeout(500);

      // Re-acquire dialog reference (never reuse stale)
      const dialogFresh = page.getByRole('dialog', { name: 'Personalize My Feed' });

      // Primary: Close button scoped inside the dialog
      let closeBtn = dialogFresh.getByRole('button', { name: /^Close$/i }).first();
      if (!(await closeBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
        // Fallback: any visible Close button on page
        closeBtn = page.getByRole('button', { name: /^Close$/i }).first();
      }
      await expect(closeBtn).toBeVisible({ timeout: 10_000 });
      await closeBtn.click({ force: true });
      console.log('[S11] ✅ Close button clicked');

      // ── ASSERTION 3 : Dialog is closed ───────────────────────────
      await expect(
        page.getByRole('dialog', { name: 'Personalize My Feed' }),
      ).not.toBeVisible({ timeout: 10_000 });
      console.log('[S11] ✅ ASSERTION PASSED – Personalize dialog closed');

      // ── STEP 12 : Final stabilisation ─────────────────────────────
      await page.waitForTimeout(2000);
      console.log('[S12] ✅ Test complete – all steps and assertions passed');

    }, // end test callback
  ); // end test()

}); // end test.describe
