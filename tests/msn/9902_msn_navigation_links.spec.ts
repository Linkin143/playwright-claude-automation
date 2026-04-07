import { test, expect } from '@playwright/test';

/**
 * ID   : 9902
 * Name : msn_navigation_links
 * File : 9902_msn_navigation_links.spec.ts
 * Site : https://www.msn.com/en-in
 *
 * Live DOM findings (Apr 2026):
 *  - Navigation landmark: role=navigation — always 1, always visible
 *  - All 7 nav links scoped inside navigation landmark
 *  - Each link resolves to exactly count=1 (strict-mode safe)
 *  - All 7 confirmed visible in live DOM run: News, Sports, Play,
 *    Money, Weather, Watch, Shopping
 *  - Links are hardcoded in MSN shell — never content-driven
 */

test.describe('MSN – Navigation Bar Has All Fixed Links', () => {
  test.describe.configure({ timeout: 120_000 });

  test('Verify all 7 navigation links are visible', async ({ page }) => {
    test.slow();

    // ── 1-2 : Navigate and stabilize ──────────────────────────────
    await page.goto('https://www.msn.com/en-in', {
      waitUntil: 'domcontentloaded',
      timeout: 30_000,
    });
    await page.waitForTimeout(5000);
    console.log('[1-2] MSN loaded and stabilised');

    // ── Scope all checks inside navigation landmark ────────────────
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible({ timeout: 10_000 });
    console.log('[DOM] Navigation landmark confirmed visible');

    // ── 3 : Verify "News" link ────────────────────────────────────
    await expect(nav.getByRole('link', { name: 'News' })).toBeVisible({ timeout: 10_000 });
    console.log('[3] "News" link visible ✅');

    // ── 4 : Verify "Sports" link ──────────────────────────────────
    await expect(nav.getByRole('link', { name: 'Sports' })).toBeVisible({ timeout: 10_000 });
    console.log('[4] "Sports" link visible ✅');

    // ── 5 : Verify "Play" link ────────────────────────────────────
    await expect(nav.getByRole('link', { name: 'Play' })).toBeVisible({ timeout: 10_000 });
    console.log('[5] "Play" link visible ✅');

    // ── 6 : Verify "Money" link ───────────────────────────────────
    await expect(nav.getByRole('link', { name: 'Money' })).toBeVisible({ timeout: 10_000 });
    console.log('[6] "Money" link visible ✅');

    // ── 7 : Verify "Weather" link ─────────────────────────────────
    await expect(nav.getByRole('link', { name: 'Weather' })).toBeVisible({ timeout: 10_000 });
    console.log('[7] "Weather" link visible ✅');

    // ── 8 : Verify "Watch" link ───────────────────────────────────
    await expect(nav.getByRole('link', { name: 'Watch' })).toBeVisible({ timeout: 10_000 });
    console.log('[8] "Watch" link visible ✅');

    // ── 9 : Verify "Shopping" link ────────────────────────────────
    await expect(nav.getByRole('link', { name: 'Shopping' })).toBeVisible({ timeout: 10_000 });
    console.log('[9] "Shopping" link visible ✅');

    console.log('\n✅ ALL 7 NAVIGATION LINK ASSERTIONS PASSED');

  }); // end test
}); // end describe
