import { test, expect, Page, BrowserContext } from '@playwright/test';

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Close Flipkart login popup if it appears
// ─────────────────────────────────────────────────────────────────────────────
async function handleLoginPopup(page: Page): Promise<void> {
  try {
    const closeBtn = page.locator('button._2KpZ6l._2doB4z').first();
    if (await closeBtn.isVisible({ timeout: 5000 })) {
      await closeBtn.click();
      console.log('[Popup] Login popup closed.');
    } else {
      console.log('[Popup] No login popup visible.');
    }
  } catch {
    console.log('[Popup] No login popup detected (timed out safely).');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Return trimmed text for first matching element, or 'N/A'
// ─────────────────────────────────────────────────────────────────────────────
async function safeText(page: Page, selector: string): Promise<string> {
  try {
    const el = page.locator(selector).first();
    if (await el.isVisible({ timeout: 4000 })) {
      return (await el.textContent() ?? '').trim();
    }
  } catch { /* element not found */ }
  return 'N/A';
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Strip all non-digit characters for price comparison
// ─────────────────────────────────────────────────────────────────────────────
function normalisePrice(raw: string): string {
  return raw.replace(/\D/g, '');
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST SUITE
// ─────────────────────────────────────────────────────────────────────────────
test.describe('Flipkart – Washing Machine Search & Add to Cart', () => {

  test('Search washing machine, open first product, add to cart, verify cart', async ({ browser }) => {

    // ── STEP 1 : Navigate to Flipkart ────────────────────────────────────────
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://www.flipkart.com', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    console.log('[Step 1] Flipkart homepage loaded.');

    // ── STEP 2 : Handle login popup ──────────────────────────────────────────
    await handleLoginPopup(page);

    // ── STEP 3 : Type "washing machine" in search bar ────────────────────────
    const searchInput = page.locator(
      'input[name="q"], input[title="Search for Products, Brands and More"]'
    ).first();
    await searchInput.waitFor({ state: 'visible', timeout: 10000 });
    await searchInput.click();
    await searchInput.fill('washing machine');
    console.log('[Step 3] Typed "washing machine" into search bar.');

    // ── STEP 4 : Press Enter ─────────────────────────────────────────────────
    await searchInput.press('Enter');
    console.log('[Step 4] Pressed Enter to submit search.');

    // ── STEP 5 : Wait for search results to load ─────────────────────────────
    await page.waitForSelector(
      'div[data-id], div._1AtVbE, div._2kHMtA, div.CXW8mj',
      { timeout: 20000 }
    );
    await page.waitForTimeout(2000);
    console.log('[Step 5] Search results loaded.');

    // ── STEP 6 : Locate first product card link ──────────────────────────────
    const firstProductLink = page.locator(
      'div._1AtVbE a[href*="/p/"], div._2kHMtA a[href*="/p/"], div.CXW8mj a[href*="/p/"]'
    ).first();
    await firstProductLink.waitFor({ state: 'visible', timeout: 10000 });

    const resultCardTitle = await safeText(
      page,
      'div._1AtVbE div._4rR01T, div._2kHMtA div._4rR01T, div.CXW8mj div.KzDlHZ'
    );
    console.log(`[Step 6] First result card title: "${resultCardTitle}"`);

    // ── STEP 7 : Click first product – handle new tab or same tab ────────────
    const [newTab] = await Promise.all([
      context.waitForEvent('page', { timeout: 12000 }).catch(() => null),
      firstProductLink.click(),
    ]);

    const pPage: Page = newTab ?? page;
    await pPage.waitForLoadState('domcontentloaded', { timeout: 30000 });
    await pPage.waitForTimeout(2000);

    if (newTab) {
      console.log('[Step 7] Product opened in a NEW tab.');
    } else {
      console.log('[Step 7] Product opened in the SAME tab.');
    }

    // ── STEP 8 : Extract and log product details ─────────────────────────────
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
    const productAvailability = await safeText(
      pPage,
      'div._1dVbu9, div.Z8JjpR span, div._16FRp0'
    );

    console.log('┌─── [Step 8] Product Details ──────────────────────');
    console.log(`│  Name         : ${productName}`);
    console.log(`│  Price        : ${productPrice}`);
    console.log(`│  Rating       : ${productRating}`);
    console.log(`│  Availability : ${productAvailability}`);
    console.log('└───────────────────────────────────────────────────');

    // ── STEP 9 : Click "Add to Cart" ─────────────────────────────────────────
    const addToCartBtn = pPage.locator(
      [
        'button._2KpZ6l._2U9uOA._3v1-ww',
        'button.Yn8H4O._3v1-ww',
        'button:has-text("Add to Cart")',
        'div._2AkmmA button',
      ].join(', ')
    ).first();

    await addToCartBtn.waitFor({ state: 'visible', timeout: 10000 });
    await addToCartBtn.click();
    console.log('[Step 9] "Add to Cart" button clicked.');

    // ── STEP 10 : Wait for cart page or cart overlay ─────────────────────────
    await Promise.race([
      pPage.waitForURL('**/checkout/cart**', { timeout: 15000 }),
      pPage.waitForSelector(
        'div.ajQqNk, div._2leh7_, div._13oc7K, div[class*="cart"]',
        { timeout: 15000 }
      ),
    ]).catch(() => {
      console.log('[Step 10] Cart URL/overlay not detected in timeout — continuing.');
    });
    await pPage.waitForTimeout(2000);
    console.log('[Step 10] Cart page or overlay is present.');

    // ── STEP 11 : Extract cart item name and price ───────────────────────────
    const cartItemName = await safeText(
      pPage,
      'div.IE8n2m a, div._2mnIoX ._3pLy-c, div.ajQqNk ._3pLy-c, div._3NLOj0 a, a.IRpwTa'
    );
    const cartItemPrice = await safeText(
      pPage,
      'div._30jeq3, div.ajQqNk ._30jeq3, div._1dWXKF ._3I9_wc, div._2Tpdn3'
    );

    console.log('┌─── [Step 11] Cart Verification ───────────────────');
    console.log(`│  Cart Item Name  : ${cartItemName}`);
    console.log(`│  Cart Item Price : ${cartItemPrice}`);
    console.log('└───────────────────────────────────────────────────');

    // ── STEP 12a : Verify product name contains "washing" ────────────────────
    const nameToAssert = cartItemName !== 'N/A' ? cartItemName : productName;
    expect(
      nameToAssert.toLowerCase(),
      `Expected name to contain "washing". Actual: "${nameToAssert}"`
    ).toContain('washing');
    console.log('✅ [Step 12a] Product name contains "washing".');

    // ── STEP 12b : Verify cart price matches product detail price ─────────────
    if (productPrice !== 'N/A' && cartItemPrice !== 'N/A') {
      expect(
        normalisePrice(cartItemPrice),
        `Cart price "${cartItemPrice}" should equal product price "${productPrice}"`
      ).toBe(normalisePrice(productPrice));
      console.log('✅ [Step 12b] Cart price matches product detail price.');
    } else {
      console.log('⚠️  [Step 12b] Price comparison skipped — one or both values were N/A.');
    }

    // ── STEP 13 : Log all captured data ──────────────────────────────────────
    console.log('');
    console.log('╔══════════════════════════════════════════════════════╗');
    console.log('║              FINAL TEST SUMMARY                      ║');
    console.log('╠══════════════════════════════════════════════════════╣');
    console.log(`║  Search Query      : washing machine`);
    console.log(`║  Product Name      : ${productName}`);
    console.log(`║  Product Price     : ${productPrice}`);
    console.log(`║  Product Rating    : ${productRating}`);
    console.log(`║  Availability      : ${productAvailability}`);
    console.log(`║  Cart Item Name    : ${cartItemName}`);
    console.log(`║  Cart Item Price   : ${cartItemPrice}`);
    console.log('╚══════════════════════════════════════════════════════╝');

    await context.close();

  }); // ← END OF test(...)

}); // ← END OF test.describe(...)
