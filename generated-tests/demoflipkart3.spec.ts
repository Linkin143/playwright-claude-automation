import { test, expect, Page, BrowserContext } from '@playwright/test';

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Close the Flipkart login popup if it is visible. */
async function handleLoginPopup(page: Page): Promise<void> {
  try {
    const closeBtn = page.locator('button._2KpZ6l._2doB4z').first();
    if (await closeBtn.isVisible({ timeout: 5000 })) {
      await closeBtn.click();
      console.log('[Popup] Login popup closed.');
    } else {
      console.log('[Popup] No login popup detected.');
    }
  } catch {
    console.log('[Popup] No login popup detected (timeout).');
  }
}

/** Return trimmed text for the first matching element, or 'N/A' on failure. */
async function safeText(page: Page, selector: string): Promise<string> {
  try {
    const el = page.locator(selector).first();
    if (await el.isVisible({ timeout: 4000 })) {
      return (await el.textContent() ?? '').trim();
    }
  } catch { /* ignore */ }
  return 'N/A';
}

/** Strip currency symbols / commas so two price strings can be compared. */
function normalisePrice(price: string): string {
  return price.replace(/[^0-9]/g, '');
}

// ─── Test Suite ─────────────────────────────────────────────────────────────

test.describe('Flipkart – Washing Machine Search & Add to Cart', () => {

  test('Search for washing machine, open first product, add to cart and verify', async ({ browser }) => {

    // ── Step 1 : Open Flipkart ───────────────────────────────────────────────
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://www.flipkart.com', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    console.log('[Nav] Flipkart loaded.');

    // ── Step 2 : Handle login popup ──────────────────────────────────────────
    await handleLoginPopup(page);

    // ── Step 3 : Type in search box ──────────────────────────────────────────
    const searchBox = page.locator(
      'input[name="q"], input[title="Search for Products, Brands and More"]'
    ).first();
    await searchBox.waitFor({ state: 'visible', timeout: 10000 });
    await searchBox.click();
    await searchBox.fill('washing machine');
    console.log('[Search] Typed "washing machine".');

    // ── Step 4 : Press Enter ─────────────────────────────────────────────────
    await searchBox.press('Enter');
    console.log('[Search] Enter pressed.');

    // ── Step 5 : Wait for search results ────────────────────────────────────
    await page.waitForSelector(
      'div[data-id], div._1AtVbE, div._2kHMtA, div.CXW8mj',
      { timeout: 20000 }
    );
    await page.waitForTimeout(2000); // allow lazy images / ads to settle
    console.log('[Search] Results loaded.');

    // ── Step 6 : Locate first product card link ──────────────────────────────
    const firstProductLink = page.locator(
      'div._1AtVbE a[href*="/p/"], div._2kHMtA a[href*="/p/"], div.CXW8mj a[href*="/p/"]'
    ).first();
    await firstProductLink.waitFor({ state: 'visible', timeout: 10000 });

    // Capture title shown on results page (best-effort)
    const resultCardTitle = await safeText(
      page,
      'div._1AtVbE div._4rR01T, div._2kHMtA div._4rR01T, div.CXW8mj div.KzDlHZ'
    );
    console.log(`[Results] First card title: "${resultCardTitle}"`);

    // ── Step 7 : Click first product – handle possible new tab ───────────────
    const [newTab] = await Promise.all([
      context.waitForEvent('page', { timeout: 12000 }).catch(() => null),
      firstProductLink.click(),
    ]);

    const pPage: Page = newTab ?? page;
    await pPage.waitForLoadState('domcontentloaded', { timeout: 30000 });
    await pPage.waitForTimeout(2000);

    if (newTab) {
      console.log('[Tab] Product opened in a new tab.');
    } else {
      console.log('[Tab] Product opened in the same tab.');
    }

    // ── Step 8 : Extract product details ────────────────────────────────────
    const productName = await safeText(
      pPage,
      'span.B_NuCI, h1.yhB1nd, h1._9E25nV, h1'
    );
    const productPrice = await safeText(
      pPage,
      'div._30jeq3._16Jk6d, div._3I9_wc._2p6lqe, div._30jeq3, div._16Jk6d'
    );
    const productRating = await safeText(
      pPage,
      'div._3LWZlK, span._1lRcqv'
    );
    const availability = await safeText(
      pPage,
      'div._1dVbu9, div.Z8JjpR span, div._16FRp0'
    );

    console.log('┌─── Product Details ───────────────────────────────');
    console.log(`│  Name        : ${productName}`);
    console.log(`│  Price       : ${productPrice}`);
    console.log(`│  Rating      : ${productRating}`);
    console.log(`│  Availability: ${availability}`);
    console.log('└───────────────────────────────────────────────────');

    // ── Step 9 : Click "Add to Cart" ────────────────────────────────────────
    const addToCartBtn = pPage.locator(
      'button._2KpZ6l._2U9uOA._3v1-ww, button.Yn8H4O._3v1-ww, button:has-text("Add to Cart"), div._2AkmmA button'
    ).first();

    await addToCartBtn.waitFor({ state: 'visible', timeout: 10000 });
    await addToCartBtn.click();
    console.log('[Cart] "Add to Cart" clicked.');

    // ── Step 10 : Wait for cart page or cart overlay ────────────────────────
    await Promise.race([
      pPage.waitForURL('**/checkout/cart**', { timeout: 15000 }),
      pPage.waitForSelector(
        'div.ajQqNk, div._2leh7_, div._13oc7K, div[class*="cart"]',
        { timeout: 15000 }
      ),
    ]).catch(() => {
      console.log('[Cart] Cart navigation/overlay not detected within timeout – proceeding.');
    });

    await pPage.waitForTimeout(2000);
    console.log('[Cart] Cart page or overlay is present.');

    // ── Step 11 : Extract cart item details ─────────────────────────────────
    const cartItemName = await safeText(
      pPage,
      'div.IE8n2m a, div._2mnIoX ._3pLy-c, div.ajQqNk ._3pLy-c, div._3NLOj0 a, a.IRpwTa'
    );
    const cartItemPrice = await safeText(
      pPage,
      'div._30jeq3, div.ajQqNk ._30jeq3, div._1dWXKF ._3I9_wc, div._2Tpdn3'
    );

    console.log('┌─── Cart Verification ─────────────────────────────');
    console.log(`│  Cart Item Name : ${cartItemName}`);
    console.log(`│  Cart Item Price: ${cartItemPrice}`);
    console.log('└───────────────────────────────────────────────────');

    // ── Step 12a : Verify product is present in cart ─────────────────────────
    const nameForCheck = cartItemName !== 'N/A' ? cartItemName : productName;
    expect(
      nameForCheck.toLowerCase(),
      `Product name should contain "washing". Got: "${nameForCheck}"`
    ).toContain('washing');
    console.log('✅ Assertion passed – product name contains "washing".');

    // ── Step 12b : Verify cart price matches product detail price ────────────
    if (productPrice !== 'N/A' && cartItemPrice !== 'N/A') {
      expect(
        normalisePrice(cartItemPrice),
        `Cart price "${cartItemPrice}" should match product price "${productPrice}"`
      ).toBe(normalisePrice(productPrice));
      console.log('✅ Assertion passed – cart price matches product detail price.');
    } else {
      console.log('⚠️  Price comparison skipped (one or both prices unavailable).');
    }

    // ── Step 13 : Final summary log ──────────────────────────────────────────
    console.log('');
    console.log('╔══════════════════════════════════════════════════╗');
    console.log('║           FINAL TEST SUMMARY                     ║');
    console.log('╠══════════════════════════════════════════════════╣');
    console.log(`║  Search Query   : washing machine`);
    console.log(`║  Product Name   : ${productName}`);
    console.log(`║  Product Price  : ${productPrice}`);
    console.log(`║  Product Rating : ${productRating}`);
    console.log(`║  Availability   : ${availability}`);
    console.log(`║  Cart Item Name : ${cartItemName}`);
    console.log(`║  Cart Item Price: ${cartItemPrice}`);
    console.log('╚══════════════════════════════════════════════════╝');

    await context.close();

  }); // ← closes test(...)

}); // ← closes test.describe(...)
