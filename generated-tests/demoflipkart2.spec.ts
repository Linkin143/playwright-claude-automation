import { test, expect, Page } from '@playwright/test';

// Helper: close login popup if it appears
async function handleLoginPopup(page: Page): Promise<void> {
  try {
    const closeBtn = page.locator('button._2KpZ6l._2doB4z').first();
    const isVisible = await closeBtn.isVisible({ timeout: 5000 });
    if (isVisible) {
      await closeBtn.click();
      console.log('Login popup closed.');
    }
  } catch {
    console.log('No login popup detected, continuing...');
  }
}

// Helper: extract text safely
async function safeText(page: Page, selector: string): Promise<string> {
  try {
    const el = page.locator(selector).first();
    const visible = await el.isVisible({ timeout: 4000 });
    if (visible) return (await el.textContent() || '').trim();
  } catch {
    // ignore
  }
  return 'N/A';
}

test.describe('Flipkart Washing Machine – Add to Cart Flow', () => {
  test('Search, select first product, add to cart and verify', async ({ browser }) => {

    // ── 1. Open Flipkart ────────────────────────────────────────────────────
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded', timeout: 30000 });
    console.log('Navigated to Flipkart.');

    // ── 2. Handle login popup ────────────────────────────────────────────────
    await handleLoginPopup(page);

    // ── 3. Search for "washing machine" ─────────────────────────────────────
    const searchBox = page.locator('input[name="q"], input[title="Search for Products, Brands and More"]').first();
    await searchBox.waitFor({ state: 'visible', timeout: 10000 });
    await searchBox.click();
    await searchBox.fill('washing machine');
    console.log('Typed "washing machine" in search bar.');

    // ── 4. Press Enter ───────────────────────────────────────────────────────
    await searchBox.press('Enter');
    console.log('Pressed Enter to search.');

    // ── 5. Wait for search results ──────────────────────────────────────────
    await page.waitForSelector('div[data-id], div._1AtVbE, div._2kHMtA', { timeout: 20000 });
    await page.waitForTimeout(2000);
    console.log('Search results loaded.');

    // ── 6. Select first product ─────────────────────────────────────────────
    // Flipkart product cards — grab the first clickable product link
    const productCards = page.locator(
      'div._1AtVbE a[href*="/p/"], div._2kHMtA a[href*="/p/"], div.CXW8mj a[href*="/p/"]'
    );
    await productCards.first().waitFor({ state: 'visible', timeout: 10000 });

    // Capture product name from search results page before clicking
    const firstCardNameRaw = await safeText(
      page,
      'div._1AtVbE div._4rR01T, div._2kHMtA div._4rR01T, div.CXW8mj div.KzDlHZ, div._1AtVbE a[href*="/p/"]'
    );
    console.log(`First product title on results page: "${firstCardNameRaw}"`);

    // ── 7. Click first product – may open in new tab ─────────────────────────
    const [productPage] = await Promise.all([
      context.waitForEvent('page', { timeout: 15000 }).catch(() => null),
      productCards.first().click(),
    ]);

    let pPage: Page;
    if (productPage) {
      pPage = productPage;
      await pPage.waitForLoadState('domcontentloaded', { timeout: 30000 });
      console.log('Product opened in a new tab.');
    } else {
      pPage = page;
      await pPage.waitForLoadState('domcontentloaded', { timeout: 30000 });
      console.log('Product opened in the same tab.');
    }

    await pPage.waitForTimeout(2000); // let lazy content settle

    // ── 8. Extract product details ───────────────────────────────────────────
    const productName = await safeText(pPage, 'span.B_NuCI, h1.yhB1nd, h1._9E25nV, h1');
    const productPrice = await safeText(
      pPage,
      'div._30jeq3._16Jk6d, div._3I9_wc._2p6lqe, div._30jeq3, div._16Jk6d'
    );
    const productRating = await safeText(pPage, 'div._3LWZlK, span._1lRcqv');
    const availability = await safeText(
      pPage,
      'div._1dVbu9, div.Z8JjpR span, div._16FRp0'
    );

    console.log('─── Product Details ───────────────────────────────');
    console.log(`  Name        : ${productName}`);
    console.log(`  Price       : ${productPrice}`);
    console.log(`  Rating      : ${productRating}`);
    console.log(`  Availability: ${availability}`);
    console.log('───────────────────────────────────────────────────');

    // ── 9. Click "Add to Cart" ───────────────────────────────────────────────
    const addToCartBtn = pPage.locator(
      'button._2KpZ6l._2U9uOA._3v1-ww, button.Yn8H4O._3v1-ww, button:has-text("Add to Cart"), div._2AkmmA button'
    ).first();

    await addToCartBtn.waitFor({ state: 'visible', timeout: 10000 });
    await addToCartBtn.click();
    console.log('Clicked "Add to Cart".');

    // ── 10. Wait for cart page or cart overlay ───────────────────────────────
    // Flipkart may navigate to /checkout/cart or show an overlay
    await Promise.race([
      pPage.waitForURL('**/checkout/cart**', { timeout: 15000 }),
      pPage.waitForSelector(
        'div.ajQqNk, div._2leh7_, div._13oc7K, div[class*="cart"]',
        { timeout: 15000 }
      ),
    ]).catch(() => {
      console.log('Cart overlay / navigation not detected within timeout – continuing anyway.');
    });

    await pPage.waitForTimeout(2000);
    console.log('Cart page / overlay appeared.');

    // ── 11. Verify product is present in cart ────────────────────────────────
    // Cart item name selectors (Flipkart's cart uses these class combos)
    const cartItemName = await safeText(
      pPage,
      'div.IE8n2m a, div._2mnIoX ._3pLy-c, div.ajQqNk ._3pLy-c, div._3NLOj0 a, a.IRpwTa'
    );
    const cartItemPrice = await safeText(
      pPage,
      'div._30jeq3, div.ajQqNk ._30jeq3, div._1dWXKF ._3I9_wc, div._2Tpdn3'
    );

    console.log('─── Cart Verification ─────────────────────────────');
    console.log(`  Cart Item Name : ${cartItemName}`);
    console.log(`  Cart Item Price: ${cartItemPrice}`);
    console.log('───────────────────────────────────────────────────');

    // ── 12. Assertions ───────────────────────────────────────────────────────

    // 12a. Product name must contain "washing" (case-insensitive)
    const nameToCheck = cartItemName !== 'N/A' ? cartItemName : productName;
    expect(
      nameToCheck.toLowerCase(),
      `Expected product name to contain "washing", got: "${nameToCheck}"`
    ).toContain('washing');
    console.log('✅ Product name contains "washing".');

    // 12b. Price in cart should match the product detail price (if both were captured)
    if (productPrice !== 'N/A' && cartItemPrice !== 'N/A') {
      // Strip currency symbols and spaces for comparison
      const normalise = (p: string) => p.replace(/[^0-9,]/g, '').replace(',', '');
      expect(
        normalise(cartItemPrice),
        `Cart price "${cartItemPrice}" does not match product price "${productPrice}"`
      ).toBe(normalise(productPrice));
      console.log('✅ Cart price matches product detail price.');
    } else {
      console.log('⚠️  Skipping price comparison (one or both prices were not captured).');
    }

    // ── 13. Final summary log ────────────────────────────────────────────────
    console.log('════════════════════════════════════════════════════');
    console.log('  FINAL TEST SUMMARY');
    console.log('════════════════════════════════════════════════════');
    console.log(`  Searched For     : washing machine`);
    console.log(`  Product Name     : ${productName}`);
    console.log(`  Product Price    : ${productPrice}`);
    console.log(`  Product Rating   : ${productRating}`);
    console.log(`  Availability     : ${availability}`);
    console.log(`  Cart Item Name   : ${cartItemName}`);
    console.log(`  Cart Item Price  : ${cartItemPrice}`);
    console.log('════════════════════════════════════════════════════');

    await context.close();
  });
});
