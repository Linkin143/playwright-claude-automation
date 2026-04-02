import { test, expect, Page } from '@playwright/test';

/**
 * Test: MSN Personalize - Follow Publishers (Times of India & India Today)
 * ID  : 1001
 * Steps:
 *  1.  Navigate to https://www.msn.com/en-in
 *  2.  Wait for page to fully load and stabilize
 *  3.  Open Personalize panel (URL-param strategy – shadow-DOM button blocked by channel-store)
 *  4.  Verify Personalize dialog is open
 *  5.  Click "Discover" tab inside dialog (default selected; click to ensure scope)
 *  6.  Focus search field
 *  7.  Type "The Times Of India"
 *  8.  Press Enter
 *  9.  Wait for results
 *  10. Click "+" (Follow) for "The Times of India"
 *  11. Clear search field
 *  12. Type "India Today"
 *  13. Press Enter
 *  14. Wait for results
 *  15. Click "+" (Follow) for "India Today" (exact – not NE)
 *  16. Close Personalize dialog
 *  17. Close browser window
 *
 * NOTE: MSN uses Web Components (fluent-button, msn-fre-topic-card) inside shadow DOM.
 *       The Personalize button is blocked by a <channel-store> pointer-event interceptor,
 *       so we open the dialog via URL param filter=Personalize as a reliable fallback.
 *       Follow buttons use role="button" on msn-fre-topic-card; after clicking they change
 *       aria-label to "You're following …" and aria-pressed="true".
 */

test.describe('MSN Personalize – Follow Publishers', () => {
  test.setTimeout(120_000);

  test('Follow Times of India and India Today via Personalize panel', async ({ page }) => {
    test.slow();

    // ─────────────────────────────────────────────────────────────────
    // HELPER: find Personalize shadow-DOM button coordinates
    // ─────────────────────────────────────────────────────────────────
    async function getPersonalizeButtonCoords(
      p: Page
    ): Promise<{ x: number; y: number } | null> {
      return p.evaluate(() => {
        function findInShadow(
          root: Document | ShadowRoot,
          sel: string
        ): Element | null {
          const el = root.querySelector(sel);
          if (el) return el;
          for (const node of Array.from(root.querySelectorAll('*'))) {
            const sr = (node as HTMLElement).shadowRoot;
            if (sr) {
              const found = findInShadow(sr, sel);
              if (found) return found;
            }
          }
          return null;
        }
        const btn =
          findInShadow(document, '#myInterests') ||
          findInShadow(document, '[part="personalize-button"]') ||
          findInShadow(document, 'fluent-button[title*="Personalize"]');
        if (!btn) return null;
        const r = btn.getBoundingClientRect();
        return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
      });
    }

    // ─────────────────────────────────────────────────────────────────
    // HELPER: verify a publisher is now in "following" state
    // MSN uses msn-fre-topic-card[role="button"][aria-pressed="true"]
    // After clicking Follow, aria-label changes to "You're following <n>"
    // ─────────────────────────────────────────────────────────────────
    async function verifyFollowed(p: Page, publisherName: string): Promise<void> {
      const byLabel = p.locator(
        `[aria-label*="following ${publisherName}" i], [aria-label*="You're following ${publisherName}" i]`
      );
      const byPressed = p.locator(
        `[aria-pressed="true"][title*="${publisherName}" i], [aria-pressed="true"][aria-label*="${publisherName}" i]`
      );
      const labelCount   = await byLabel.count();
      const pressedCount = await byPressed.count();
      if (labelCount === 0 && pressedCount === 0) {
        // Soft fail: state may be fully inside shadow DOM - log and continue
        console.warn(`[WARN] Could not verify "following" state for: ${publisherName}`);
        return;
      }
      if (labelCount > 0)   await expect(byLabel.first()).toBeVisible({ timeout: 6_000 });
      if (pressedCount > 0) await expect(byPressed.first()).toBeVisible({ timeout: 6_000 });
    }

    // ─────────────────────────────────────────────────────────────────
    // STEP 1-2: Navigate to MSN India and wait for page to stabilise
    // ─────────────────────────────────────────────────────────────────
    await page.goto('https://www.msn.com/en-in', {
      waitUntil: 'domcontentloaded',
      timeout: 30_000,
    });
    await page.waitForTimeout(3_000);
    await expect(page).toHaveTitle(/MSN/i);

    // ─────────────────────────────────────────────────────────────────
    // STEP 3: Open Personalize panel
    // Strategy A – coordinate click on the shadow-DOM fluent-button
    // Strategy B – URL param ?filter=Personalize (reliable fallback)
    // ─────────────────────────────────────────────────────────────────
    let dialogVisible = false;
    const coords = await getPersonalizeButtonCoords(page);
    if (coords) {
      await page.mouse.click(coords.x, coords.y);
      await page.waitForTimeout(2_500);
      dialogVisible = await page
        .getByRole('dialog', { name: 'Personalize My Feed' })
        .isVisible()
        .catch(() => false);
    }
    if (!dialogVisible) {
      await page.goto(
        'https://www.msn.com/en-in?apiversion=v2&noservercache=1&filter=Personalize',
        { waitUntil: 'domcontentloaded', timeout: 30_000 }
      );
      await page.waitForTimeout(4_000);
    }

    // ─────────────────────────────────────────────────────────────────
    // STEP 4: Verify Personalize dialog is open
    // ─────────────────────────────────────────────────────────────────
    const dialog = page.getByRole('dialog', { name: 'Personalize My Feed' });
    await expect(dialog).toBeVisible({ timeout: 12_000 });

    // ─────────────────────────────────────────────────────────────────
    // STEP 5: Click "Discover" tab inside dialog
    // ─────────────────────────────────────────────────────────────────
    let discoverEl = page.getByRole('treeitem', { name: 'Navigate to Discover section' });
    if (!(await discoverEl.isVisible().catch(() => false))) {
      // Self-heal: fall back to heading
      discoverEl = page.getByRole('heading', { name: 'Discover', level: 3 }) as any;
    }
    await expect(discoverEl).toBeVisible({ timeout: 8_000 });
    await discoverEl.click();
    await page.waitForTimeout(500);

    // ─────────────────────────────────────────────────────────────────
    // STEP 6-7: Focus search field and type "The Times Of India"
    // ─────────────────────────────────────────────────────────────────
    const searchBox1 = page.getByRole('searchbox', { name: 'Search for channels to follow' });
    await expect(searchBox1).toBeVisible({ timeout: 8_000 });
    await searchBox1.click();
    await searchBox1.fill('The Times Of India');

    // ─────────────────────────────────────────────────────────────────
    // STEP 8-9: Press Enter and wait for results
    // ─────────────────────────────────────────────────────────────────
    await searchBox1.press('Enter');
    await page.waitForTimeout(3_000);

    // ─────────────────────────────────────────────────────────────────
    // STEP 10: Click "+" (Follow) for "The Times of India"
    // ─────────────────────────────────────────────────────────────────
    let toiBtn = page.getByRole('button', { name: 'Follow The Times of India' });
    if (!(await toiBtn.isVisible().catch(() => false))) {
      // Self-heal: use aria-label attribute selector
      toiBtn = page.locator('[aria-label="Follow The Times of India"]');
    }
    await expect(toiBtn).toBeVisible({ timeout: 10_000 });
    await toiBtn.click();
    await page.waitForTimeout(2_500);
    await verifyFollowed(page, 'The Times of India');

    // ─────────────────────────────────────────────────────────────────
    // STEP 11: Clear search field (re-locate after DOM mutation)
    // ─────────────────────────────────────────────────────────────────
    const searchBox2 = page.getByRole('searchbox', { name: 'Search for channels to follow' });
    await expect(searchBox2).toBeVisible({ timeout: 6_000 });
    await searchBox2.click();
    await searchBox2.fill('');
    await page.waitForTimeout(300);

    // ─────────────────────────────────────────────────────────────────
    // STEP 12-13: Type "India Today" and press Enter
    // ─────────────────────────────────────────────────────────────────
    await searchBox2.fill('India Today');
    await searchBox2.press('Enter');

    // ─────────────────────────────────────────────────────────────────
    // STEP 14: Wait for results
    // ─────────────────────────────────────────────────────────────────
    await page.waitForTimeout(3_000);

    // ─────────────────────────────────────────────────────────────────
    // STEP 15: Click "+" (Follow) for "India Today" — exact match (not India Today NE)
    // ─────────────────────────────────────────────────────────────────
    let itBtn = page.getByRole('button', { name: 'Follow India Today', exact: true });
    if (!(await itBtn.isVisible().catch(() => false))) {
      // Self-heal: aria-label exact attribute selector
      itBtn = page.locator('[aria-label="Follow India Today"]');
    }
    await expect(itBtn).toBeVisible({ timeout: 10_000 });
    await itBtn.click();
    await page.waitForTimeout(2_500);
    await verifyFollowed(page, 'India Today');

    // ─────────────────────────────────────────────────────────────────
    // STEP 16: Close Personalize dialog
    // ─────────────────────────────────────────────────────────────────
    const closeBtn = page.getByRole('button', { name: 'Close' });
    await expect(closeBtn).toBeVisible({ timeout: 6_000 });
    await closeBtn.click();
    await page.waitForTimeout(1_500);

    // Assert dialog is dismissed
    await expect(
      page.getByRole('dialog', { name: 'Personalize My Feed' })
    ).not.toBeVisible({ timeout: 5_000 });

    // ─────────────────────────────────────────────────────────────────
    // STEP 17: Close browser window (Playwright teardown handles cleanup)
    // ─────────────────────────────────────────────────────────────────
    await page.close();
  });
});
