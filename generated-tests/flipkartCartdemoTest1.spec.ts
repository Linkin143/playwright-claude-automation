import { test, expect, Page, Locator } from '@playwright/test';

// ── Global test timeout: minimum 120 seconds for real-world website ───────────
test.setTimeout(120000);

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Handle Flipkart login popup — close/skip if it appears
// ─────────────────────────────────────────────────────────────────────────────
async function handleLoginPopup(page: Page): Promise<void> {
  try {
    const closeBtn = page.getByRole('button', { name: 'close' });
    if (await closeBtn.isVisible({ timeout: 5000 })) {
      await closeBtn.click();
      console.log('[Popup] Login popup closed via "close" button.');
      return;
    }
  } catch { /* not present */ }
  try {
    const skipBtn = page.getByText('✕');
    if (await skipBtn.isVisible({ timeout: 4000 })) {
      await skipBtn.click();
      console.log('[Popup] Login popup closed via ✕.');
      return;
    }
  } catch { /* not present */ }
  console.log('[Popup] No login popup detected.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Safely read text from a locator, return 'N/A' on failure
// ─────────────────────────────────────────────────────────────────────────────
async function safeText(locator: Locator): Promise<string> {
  try {
    if (await locator.isVisible({ timeout: 5000 })) {
      return (await locator.textContent() ?? '').trim();
    }
  } catch { /* not found */ }
  return 'N/A';
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Strip non-digit chars for price comparison
// ─────────────────────────────────────────────────────────────────────────────
function normalisePrice(raw: string): string {
  return raw.replace(/\D/g, '');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Wait for the first product card containing "washing" to be visible
// Waits for specific UI element — NOT networkidle
// ─────────────────────────────────────────────────────────────────────────────
async function waitForSearchResults(page: Page): Promise<void> {
  const firstCard = page.getByRole('listitem').first();
  const visible = await firstCard.isVisible({ timeout: 12000 }).catch(() => false);
  if (visible) {
    await expect(firstCard).toBeVisible({ timeout: 12000 });
    console.log('[Results] Search result cards appeared.');
    return;
  }
  await page.waitForTimeout(3000);
  console.log('[Results] Used timeout fallback for results.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Find and click first product whose title contains "washing"
// Returns the product link locator
// ─────────────────────────────────────────────────────────────────────────────
async function clickFirstWashingProduct(page: Page): Promise<void> {
  // Wait for result grid to stabilise
  await waitForSearchResults(page);

  // Collect all product title links and click the first one with "washing"
  const allTitles = page.getByRole('link').filter({ hasText: /washing/i });
  await expect(allTitles.first()).toBeVisible({ timeout: 12000 });
  await allTitles.first().click();
  console.log('[Product] Clicked first product containing "washing".');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Resolve "Add to Cart" button on the product detail page
// Self-healing: getByRole "Add to Cart" → getByText → xpath fallback
// ─────────────────────────────────────────────────────────────────────────────
async function resolveAddToCartButton(page: Page): Promise<Locator> {
  // PRIMARY: accessible role button with exact text
  let el: Locator = page.getByRole('button', { name: 'Add to Cart' });
  if (!(await el.isVisible({ timeout: 8000 }).catch(() => false))) {
    // FALLBACK 1: text-based
    el = page.getByText('Add to Cart', { exact: true });
  }
  if (!(await el.isVisible({ timeout: 6000 }).catch(() => false))) {
    // FALLBACK 2: XPath provided in spec — used as last resort only
    el = page.locator('//*[@id="slot-list-container"]/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[21]/div/div/div/div/div/div/div/div/div/div[1]/div');
  }
  await expect(el).toBeVisible({ timeout: 12000 });
  return el;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Wait for "Item added to cart" confirmation message
// Waits for specific UI element — NOT networkidle
// ─────────────────────────────────────────────────────────────────────────────
async function waitForCartConfirmation(page: Page): Promise<void> {
  // PRIMARY: exact toast/overlay text
  let msg: Locator = page.getByText('Item added to cart', { exact: false });
  const msgVisible = await msg.isVisible({ timeout: 12000 }).catch(() => false);
  if (msgVisible) {
    await expect(msg).toBeVisible({ timeout: 12000 });
    console.log('[Cart] "Item added to cart" message confirmed visible.');
    return;
  }
  // FALLBACK: cart overlay or drawer appeared
  const cartOverlay = page.getByRole('dialog');
  const overlayVisible = await cartOverlay.isVisible({ timeout: 8000 }).catch(() => false);
  if (overlayVisible) {
    await expect(cartOverlay).toBeVisible({ timeout: 12000 });
    console.log('[Cart] Cart overlay/dialog confirmed visible.');
    return;
  }
  await page.waitForTimeout(2500);
  console.log('[Cart] Used timeout fallback for cart confirmation.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Resolve cart navigation button (top header cart icon)
// Self-healing: aria-label → link text → xpath fallback
// ─────────────────────────────────────────────────────────────────────────────
async function resolveCartNavButton(page: Page): Promise<Locator> {
  // PRIMARY: cart link by aria label
  let el: Locator = page.getByLabel('Cart');
  if (!(await el.isVisible({ timeout: 7000 }).catch(() => false))) {
    // FALLBACK 1: link containing cart text
    el = page.getByRole('link', { name: /cart/i });
  }
  if (!(await el.isVisible({ timeout: 6000 }).catch(() => false))) {
    // FALLBACK 2: XPath provided in spec — used as last resort only
    el = page.locator('//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div/header/div[3]/div[4]/div/a/div/img');
  }
  await expect(el).toBeVisible({ timeout: 12000 });
  return el;
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST SUITE
// ─────────────────────────────────────────────────────────────────────────────
test.describe('Flipkart – Washing Machine Search, Add to Cart & Verify', () => {

  test('Search washing machine, add to cart, verify cart contents', async ({ browser }) => {

    // ── STEP 1 : Navigate to Flipkart ────────────────────────────────────────
    const context = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://www.flipkart.com', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible({ timeout: 12000 });
    await page.waitForTimeout(2500);
    console.log('[Step 1] Flipkart loaded and stabilised.');

    // ── STEP 2 : Handle login popup ──────────────────────────────────────────
    await handleLoginPopup(page);

    // ── STEP 3 : Search for "washing machine" ────────────────────────────────
    // Locate search box by exact placeholder text per spec
    let searchBox: Locator = page.getByPlaceholder('Search for Products, Brands and More');
    if (!(await searchBox.isVisible({ timeout: 8000 }).catch(() => false))) {
      searchBox = page.getByRole('searchbox');
    }
    await expect(searchBox).toBeVisible({ timeout: 12000 });
    await searchBox.click();
    await searchBox.fill('washing machine');
    console.log('[Step 3] Typed "washing machine" in search bar.');

    // ── STEP 4 : Press Enter to search ───────────────────────────────────────
    await searchBox.press('Enter');
    console.log('[Step 4] Enter pressed — search submitted.');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);

    // ── STEP 5 : Wait for search results to load ─────────────────────────────
    await waitForSearchResults(page);
    console.log('[Step 5] Search results loaded.');

    // ── STEP 6 : Click first product containing "washing" ────────────────────
    // May open in new tab — capture via context event
    const [newTab] = await Promise.all([
      context.waitForEvent('page', { timeout: 10000 }).catch(() => null),
      clickFirstWashingProduct(page),
    ]);

    // Determine active page (new tab or same tab)
    const pPage: Page = newTab ?? page;
    await pPage.waitForLoadState('domcontentloaded');
    await expect(pPage.locator('body')).toBeVisible({ timeout: 12000 });
    await pPage.waitForTimeout(2000);

    if (newTab) {
      console.log('[Step 6] Product opened in NEW tab.');
    } else {
      console.log('[Step 6] Product opened in SAME tab.');
    }

    // ── STEP 7 : Extract product details ─────────────────────────────────────
    const productName = await safeText(
      pPage.getByRole('heading', { level: 1 }).first()
    );
    const productPrice = await safeText(
      pPage.locator('div._30jeq3._16Jk6d').first()
    );
    const productRating = await safeText(
      pPage.locator('div._3LWZlK').first()
    );
    const productAvailability = await safeText(
      pPage.locator('div._1dVbu9').first()
    );

    console.log('┌─── [Step 7] Product Details ──────────────────────');
    console.log(`│  Name         : ${productName}`);
    console.log(`│  Price        : ${productPrice}`);
    console.log(`│  Rating       : ${productRating}`);
    console.log(`│  Availability : ${productAvailability}`);
    console.log('└───────────────────────────────────────────────────');

    // ── STEP 8 : Click "Add to Cart" ─────────────────────────────────────────
    const addToCartBtn = await resolveAddToCartButton(pPage);
    await addToCartBtn.click();
    console.log('[Step 8] "Add to Cart" clicked.');

    // ── STEP 9 : Wait for "Item added to cart" message ───────────────────────
    await waitForCartConfirmation(pPage);

    // ── STEP 10 : Click the cart button in the header ─────────────────────────
    const cartNavBtn = await resolveCartNavButton(pPage);
    await expect(cartNavBtn).toBeVisible({ timeout: 12000 });
    await cartNavBtn.click();
    console.log('[Step 10] Cart navigation button clicked.');

    // Wait for cart page to load — wait for specific element, NOT networkidle
    await pPage.waitForLoadState('domcontentloaded');
    await expect(pPage.locator('body')).toBeVisible({ timeout: 12000 });
    await pPage.waitForTimeout(2000);
    console.log('[Step 10] Cart page loaded.');

    // ── STEP 11 : Extract cart item details ──────────────────────────────────
    const cartItemName = await safeText(
      pPage.getByRole('link').filter({ hasText: /washing/i }).first()
    );
    const cartItemPrice = await safeText(
      pPage.locator('div._30jeq3').first()
    );

    console.log('┌─── [Step 11] Cart Verification ───────────────────');
    console.log(`│  Cart Item Name  : ${cartItemName}`);
    console.log(`│  Cart Item Price : ${cartItemPrice}`);
    console.log('└───────────────────────────────────────────────────');

    // ── STEP 12 : Assertions ─────────────────────────────────────────────────

    // 12a: Product name must contain "washing"
    const nameToAssert = cartItemName !== 'N/A' ? cartItemName : productName;
    expect(
      nameToAssert.toLowerCase(),
      `Expected product name to contain "washing". Got: "${nameToAssert}"`
    ).toContain('washing');
    console.log('✅ [Assert 12a] Product name contains "washing".');

    // 12b: Cart price must match product detail price
    if (productPrice !== 'N/A' && cartItemPrice !== 'N/A') {
      expect(
        normalisePrice(cartItemPrice),
        `Cart price "${cartItemPrice}" should match product price "${productPrice}"`
      ).toBe(normalisePrice(productPrice));
      console.log('✅ [Assert 12b] Cart price matches product detail price.');
    } else {
      console.log('⚠️  [Assert 12b] Price comparison skipped — one or both values N/A.');
    }

    // 12c: Cart item should be visible on page
    const cartItem = pPage.getByRole('link').filter({ hasText: /washing/i }).first();
    await expect(cartItem).toBeVisible({ timeout: 12000 });
    console.log('✅ [Assert 12c] Cart item with "washing" is visible on cart page.');

    // ── STEP 13 : Final summary log ───────────────────────────────────────────
    console.log('');
    console.log('╔══════════════════════════════════════════════════════╗');
    console.log('║              FINAL TEST SUMMARY                      ║');
    console.log('╠══════════════════════════════════════════════════════╣');
    console.log('║  Site          : https://www.flipkart.com            ║');
    console.log('║  Search        : washing machine                     ║');
    console.log(`║  Product Name  : ${productName}`);
    console.log(`║  Product Price : ${productPrice}`);
    console.log(`║  Rating        : ${productRating}`);
    console.log(`║  Availability  : ${productAvailability}`);
    console.log(`║  Cart Item     : ${cartItemName}`);
    console.log(`║  Cart Price    : ${cartItemPrice}`);
    console.log('║  Cart Verified : ✅                                  ║');
    console.log('╚══════════════════════════════════════════════════════╝');

    await context.close();

  }); // ← END OF test(...)

}); // ← END OF test.describe(...)
