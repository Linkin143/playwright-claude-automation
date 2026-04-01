import { expect, test } from '@playwright/test';

/**
 * Test  : 9901_msn_personalize_follow
 * Site  : https://www.msn.com/en-in
 * Steps : Open MSN → Personalize → Discover → Follow TOI & India Today → Close
 *
 * Live DOM findings (Mar 2026):
 *  - MSN uses Fluent Design System Web Components; Playwright auto-pierces shadow DOM.
 *  - Personalize button: role=button, aria-label~"Personalize your feed"
 *    MUST force:true – <channel-store> overlay intercepts pointer events.
 *  - Dialog: role=dialog, aria-label="Personalize My Feed"
 *  - Discover tab: role=treeitem, aria-label~"Navigate to Discover"
 *  - Channel searchbox: role=searchbox, name="Search for channels to follow"
 *    → resolves to exactly 1 element (strict-mode safe; 2 total on page).
 *  - Enter does NOT close the dialog (verified live).
 *  - Follow buttons: role=button, aria-label~"Follow <Channel>"
 *    After click → "Unfollow <Channel>" appears (assertion signal).
 *    scrollIntoViewIfNeeded + force:true required.
 *  - Close button: role=button, name="Close" scoped inside dialog.
 */

test.describe('MSN – Personalize: Follow TOI and India Today', () => {
  test.describe.configure({ timeout: 120_000 });

  test('Follow "The Times Of India" and "India Today" via Discover search', async ({ page }) => {
    test.slow();

    // ── 1-2: Navigate and stabilize ──────────────────────────────────
    await page.goto('https://www.msn.com/en-in', {
      waitUntil: 'domcontentloaded',
      timeout: 30_000,
    });
    await page.waitForTimeout(5000); // Fluent Web Components render time
    console.log('[1] MSN loaded');

    // ── 2: Dismiss any browser banner ────────────────────────────────
    try {
      const banner = page.getByRole('button', { name: /dismiss|close banner/i }).first();
      if (await banner.isVisible({ timeout: 2000 })) {
        await banner.click({ force: true });
        await page.waitForTimeout(500);
      }
    } catch { /* no banner */ }

    // ── 3: Click Personalize ──────────────────────────────────────────
    // Primary: aria-label "Personalize your feed" | Fallback: text "Personalize"
    let pBtn = page.getByRole('button', { name: /Personalize your feed/i });
    if (!(await pBtn.isVisible({ timeout: 5000 }).catch(() => false))) {
      pBtn = page.getByText('Personalize', { exact: false }).first();
    }
    await expect(pBtn).toBeVisible({ timeout: 10_000 });
    await pBtn.click({ force: true });
    console.log('[3] Personalize clicked');

    // ── 4: Verify dialog opened ───────────────────────────────────────
    const dialog = page.getByRole('dialog', { name: 'Personalize My Feed' });
    await expect(dialog).toBeVisible({ timeout: 15_000 });
    await page.waitForTimeout(500);
    console.log('[4] Dialog opened');

    // ── 5: Click Discover inside dialog (NOT top-nav) ─────────────────
    // Primary: treeitem "Navigate to Discover section" | Fallback: "Discover"
    let discoverItem = page.getByRole('treeitem', { name: /Navigate to Discover/i });
    if (!(await discoverItem.isVisible({ timeout: 3000 }).catch(() => false))) {
      discoverItem = page.getByRole('treeitem', { name: /Discover/i });
    }
    await expect(discoverItem).toBeVisible({ timeout: 10_000 });
    await discoverItem.click({ force: true });
    await page.waitForTimeout(800);
    console.log('[5] Discover clicked');

    // Helper: always fresh locator (never reuse stale refs)
    // Resolves to exactly ONE element – strict-mode safe
    const getSb = () =>
      page.getByRole('searchbox', { name: 'Search for channels to follow' });

    await expect(getSb()).toBeVisible({ timeout: 10_000 });

    // ── 6-8: Focus search, type "The Times Of India", Enter ──────────
    const sb1 = getSb();
    await sb1.click({ force: true });
    await page.waitForTimeout(300);
    await sb1.fill('The Times Of India');
    await expect(sb1).toHaveValue('The Times Of India', { timeout: 5_000 });
    console.log('[7] Typed "The Times Of India"');

    await page.keyboard.press('Enter'); // verified: does NOT close dialog
    await page.waitForTimeout(3000);
    console.log('[8] Enter pressed');

    // ── 9-10: Wait for results, click Follow TOI ──────────────────────
    // Self-heal: if already followed (Unfollow exists) → assertion passes
    const toiF  = page.getByRole('button', { name: /Follow.*Times of India/i });
    const toiUF = page.getByRole('button', { name: /Unfollow.*Times of India/i });
    const toiFC  = await toiF.count();
    const toiUFC = await toiUF.count();
    console.log(`[9] TOI Follow=${toiFC} Unfollow=${toiUFC}`);

    if (toiFC > 0) {
      await toiF.first().scrollIntoViewIfNeeded().catch(() => {});
      await expect(toiF.first()).toBeAttached({ timeout: 8_000 });
      await toiF.first().click({ force: true });
      await page.waitForTimeout(2000);
      console.log('[10] Clicked Follow TOI');
    } else {
      console.log('[10] TOI already followed');
    }

    // Assertion 1: Unfollow button present = TOI is followed
    const toiUFAfter = await page
      .getByRole('button', { name: /Unfollow.*Times of India/i }).count();
    expect(toiUFAfter, 'FAIL: TOI not followed').toBeGreaterThan(0);
    console.log('[10] ✅ TOI followed');

    // ── 11: Clear search field ────────────────────────────────────────
    const sb2 = getSb(); // fresh ref after DOM update
    await sb2.click({ force: true });
    await sb2.press('Control+a');
    await sb2.press('Delete');
    await page.waitForTimeout(400);
    console.log('[11] Search cleared');

    // ── 12-13: Type "India Today", Enter ─────────────────────────────
    const sb3 = getSb();
    await sb3.fill('India Today');
    await expect(sb3).toHaveValue('India Today', { timeout: 5_000 });
    console.log('[12] Typed "India Today"');

    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    console.log('[13] Enter pressed');

    // ── 14-15: Wait for results, click Follow India Today ─────────────
    const itF  = page.getByRole('button', { name: /Follow.*India Today/i });
    const itUF = page.getByRole('button', { name: /Unfollow.*India Today/i });
    const itFC  = await itF.count();
    const itUFC = await itUF.count();
    console.log(`[14] IT Follow=${itFC} Unfollow=${itUFC}`);

    if (itFC > 0) {
      await itF.first().scrollIntoViewIfNeeded().catch(() => {});
      await expect(itF.first()).toBeAttached({ timeout: 8_000 });
      await itF.first().click({ force: true });
      await page.waitForTimeout(2000);
      console.log('[15] Clicked Follow India Today');
    } else {
      console.log('[15] India Today already followed');
    }

    // Assertion 2: Unfollow button present = India Today is followed
    const itUFAfter = await page
      .getByRole('button', { name: /Unfollow.*India Today/i }).count();
    expect(itUFAfter, 'FAIL: India Today not followed').toBeGreaterThan(0);
    console.log('[15] ✅ India Today followed');

    // ── 16: Close personalize dialog ──────────────────────────────────
    await page.waitForTimeout(500);
    const dlgFresh = page.getByRole('dialog', { name: 'Personalize My Feed' });
    let closeBtn = dlgFresh.getByRole('button', { name: /^Close$/i }).first();
    if (!(await closeBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
      closeBtn = page.getByRole('button', { name: /^Close$/i }).first();
    }
    await expect(closeBtn).toBeVisible({ timeout: 10_000 });
    await closeBtn.click({ force: true });
    console.log('[16] Close clicked');

    // Assertion 3: dialog must be gone
    await expect(
      page.getByRole('dialog', { name: 'Personalize My Feed' }),
    ).not.toBeVisible({ timeout: 10_000 });
    console.log('[16] ✅ Dialog closed');

    // ── 17: Browser window closed by Playwright after test ────────────
    await page.waitForTimeout(2000);
    console.log('[17] Done – browser closes after test');

  }); // end testcccc
}); // end describddscdscsdcsc   
