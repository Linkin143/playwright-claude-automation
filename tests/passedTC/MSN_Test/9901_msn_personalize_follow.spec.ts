import { test, expect } from '@playwright/test';

/**
 * ID   : 9901
 * Name : msn_personalize_follow
 * File : 9901_msn_personalize_follow.spec.ts
 * Site : https://www.msn.com/en-in
 *
 * Live DOM findings (Apr 2026):
 *  - Edge banner (DismissBanner) blocks Personalize — must dismiss first
 *  - Personalize button : role=button aria-label~"Personalize your feed" force:true
 *  - Dialog opens via Fluent WC — use polling loop not fixed waitForTimeout
 *  - Dialog             : role=dialog aria-label="Personalize My Feed"
 *  - Discover tab       : role=treeitem aria-label~"Navigate to Discover section"
 *  - Channel searchbox  : role=searchbox name="Search for channels to follow" (1 of 2)
 *  - Enter does NOT close dialog (verified in all live runs)
 *  - Follow TOI         : role=button name="Follow The Times of India"
 *  - Follow IT          : role=button name="Follow India Today"
 *  - Assertion signal   : Unfollow button appears after Follow click
 *  - Self-heal          : already followed → Unfollow exists → assertion passes
 *  - Clear              : fill('') most reliable cross-browser
 *  - Close button       : dialog.getByRole('button', /^Close$/i)
 */

test.describe('MSN – Personalize: Follow TOI and India Today', () => {
  test.describe.configure({ timeout: 120_000 });

  test('Follow "The Times Of India" and "India Today" via Discover search', async ({ page }) => {
    test.slow();

    // ── 1-2: Navigate and stabilize ───────────────────────────────
    await page.goto('https://www.msn.com/en-in', {
      waitUntil: 'domcontentloaded',
      timeout: 30_000,
    });
    await page.waitForTimeout(5000);
    console.log('[1-2] MSN loaded');

    // ── Dismiss Edge banner if present (blocks Personalize) ────────
    try {
      const banner = page.getByRole('button', { name: 'DismissBanner' });
      if (await banner.isVisible({ timeout: 2000 })) {
        await banner.click();
        await page.waitForTimeout(800);
        console.log('[BANNER] Dismissed');
      }
    } catch { /* no banner */ }

    // ── 3: Click Personalize ───────────────────────────────────────
    let pBtn = page.getByRole('button', { name: /Personalize your feed/i });
    if (!(await pBtn.isVisible({ timeout: 5000 }).catch(() => false)))
      pBtn = page.getByText('Personalize', { exact: false }).first();
    await expect(pBtn).toBeVisible({ timeout: 10_000 });
    await pBtn.click({ force: true });
    console.log('[3] Personalize clicked');

    // ── 4: Poll for dialog (Fluent WC can take >3s to render) ──────
    const dialog = page.getByRole('dialog', { name: 'Personalize My Feed' });
    let dlgVis = false;
    for (let i = 0; i < 8; i++) {
      await page.waitForTimeout(1500);
      dlgVis = await dialog.isVisible({ timeout: 500 }).catch(() => false);
      if (dlgVis) break;
    }
    expect(dlgVis, '[S4] FAIL: Dialog did not open').toBe(true);
    console.log('[4] Dialog opened ✅');

    // ── 5: Click Discover inside dialog ───────────────────────────
    let discItem = page.getByRole('treeitem', { name: /Navigate to Discover/i });
    if (!(await discItem.isVisible({ timeout: 3000 }).catch(() => false)))
      discItem = page.getByRole('treeitem', { name: /Discover/i });
    await expect(discItem).toBeVisible({ timeout: 10_000 });
    await discItem.click({ force: true });
    await page.waitForTimeout(800);
    console.log('[5] Discover clicked ✅');

    const getSb = () =>
      page.getByRole('searchbox', { name: 'Search for channels to follow' });
    await expect(getSb()).toBeVisible({ timeout: 10_000 });

    // ── 6-8: Type "The Times Of India" + Enter ─────────────────────
    await getSb().click({ force: true });
    await page.waitForTimeout(300);
    await getSb().fill('The Times Of India');
    await expect(getSb()).toHaveValue('The Times Of India', { timeout: 5_000 });
    console.log('[7] Typed "The Times Of India"');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3500);
    console.log('[8] Enter pressed');

    // ── 9-10: Follow TOI ───────────────────────────────────────────
    const toiF  = page.getByRole('button', { name: /Follow The Times of India/i });
    const toiUF = page.getByRole('button', { name: /Unfollow The Times of India/i });
    const toiFC  = await toiF.count();
    const toiUFC = await toiUF.count();
    console.log(`[9] TOI Follow=${toiFC} Unfollow=${toiUFC}`);
    if (toiFC > 0) {
      await toiF.first().scrollIntoViewIfNeeded().catch(() => {});
      await expect(toiF.first()).toBeAttached({ timeout: 8_000 });
      await toiF.first().click({ force: true });
      await page.waitForTimeout(2500);
      console.log('[10] Clicked Follow TOI');
    } else { console.log('[10] TOI already followed'); }
    const toiUFAfter = await page.getByRole('button', { name: /Unfollow The Times of India/i }).count();
    expect(toiUFAfter, 'FAIL: TOI not followed').toBeGreaterThan(0);
    console.log('[10] ✅ TOI followed');

    // ── 11: Clear search ───────────────────────────────────────────
    await getSb().click({ force: true, clickCount: 3 });
    await getSb().press('Delete');
    await getSb().fill('');
    await page.waitForTimeout(500);
    console.log('[11] Search cleared');

    // ── 12-13: Type "India Today" + Enter ──────────────────────────
    await getSb().fill('India Today');
    await expect(getSb()).toHaveValue('India Today', { timeout: 5_000 });
    console.log('[12] Typed "India Today"');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3500);
    console.log('[13] Enter pressed');

    // ── 14-15: Follow India Today ──────────────────────────────────
    const itF  = page.getByRole('button', { name: /Follow India Today/i });
    const itUF = page.getByRole('button', { name: /Unfollow India Today/i });
    const itFC  = await itF.count();
    const itUFC = await itUF.count();
    console.log(`[14] IT Follow=${itFC} Unfollow=${itUFC}`);
    if (itFC > 0) {
      await itF.first().scrollIntoViewIfNeeded().catch(() => {});
      await expect(itF.first()).toBeAttached({ timeout: 8_000 });
      await itF.first().click({ force: true });
      await page.waitForTimeout(2500);
      console.log('[15] Clicked Follow India Today');
    } else { console.log('[15] India Today already followed'); }
    const itUFAfter = await page.getByRole('button', { name: /Unfollow India Today/i }).count();
    expect(itUFAfter, 'FAIL: India Today not followed').toBeGreaterThan(0);
    console.log('[15] ✅ India Today followed');

    // ── 16: Close dialog ───────────────────────────────────────────
    await page.waitForTimeout(500);
    const dlgFresh = page.getByRole('dialog', { name: 'Personalize My Feed' });
    let closeBtn = dlgFresh.getByRole('button', { name: /^Close$/i }).first();
    if (!(await closeBtn.isVisible({ timeout: 3000 }).catch(() => false)))
      closeBtn = page.getByRole('button', { name: /^Close$/i }).first();
    await expect(closeBtn).toBeVisible({ timeout: 10_000 });
    await closeBtn.click({ force: true });
    await expect(
      page.getByRole('dialog', { name: 'Personalize My Feed' }),
    ).not.toBeVisible({ timeout: 10_000 });
    console.log('[16] ✅ Dialog closed');

    console.log('\n✅ ALL ASSERTIONS PASSED');
  });
});
