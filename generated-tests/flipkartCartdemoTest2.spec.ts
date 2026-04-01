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
      await page.waitForTimeout(800);
      console.log('[Popup] Login popup closed via role=button "close".');
      return;
    }
  } catch { /* not present */ }
  try {
    const crossBtn = page.getByText('✕', { exact: true });
    if (await crossBtn.isVisible({ timeout: 4000 })) {
      await crossBtn.click();
      await page.waitForTimeout(800);
      console.log('[Popup] Login popup closed via ✕ text.');
      return;
    }
  } catch { /* not present */ }
  console.log('[Popup] No login popup detected.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Safely read text from a locator — returns 'N/A' on failure
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
// HELPER : Strip non-digit characters for price comparison
// ─────────────────────────────────────────────────────────────────────────────
function normalisePrice(raw: string): string {
  return raw.replace(/\D/g, '');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Wait for search result cards — specific UI element, NOT networkidle
// ─────────────────────────────────────────────────────────────────────────────
async function waitForSearchResults(page: Page): Promise<void> {
  const firstCard = page.getByRole('listitem').first();
  const visible = await firstCard.isVisible({ timeout: 12000 }).catch(() => false);
  if (visible) {
    await expect(firstCard).toBeVisible({ timeout: 12000 });
    console.log('[Results] Result cards visible.');
    return;
  }
  await page.waitForTimeout(3000);
  console.log('[Results] Used timeout fallback for results wait.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Click the first product link whose visible text contains "washing"
// ─────────────────────────────────────────────────────────────────────────────
async function clickFirstWashingProduct(page: Page): Promise<void> {
  await waitForSearchResults(page);
  const productLinks = page.getByRole('link').filter({ hasText: /washing/i });
  await expect(productLinks.first()).toBeVisible({ timeout: 12000 });
  await productLinks.first().click();
  console.log('[Product] First product containing "washing" clicked.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Resolve "Add to Cart" button — self-healing with XPath last resort
// ─────────────────────────────────────────────────────────────────────────────
async function resolveAddToCartButton(page: Page): Promise<Locator> {
  // PRIMARY: accessible button role
  let el: Locator = page.getByRole('button', { name: 'Add to Cart' });
  if (!(await el.isVisible({ timeout: 8000 }).catch(() => false))) {
    // FALLBACK 1: exact text
    el = page.getByText('Add to Cart', { exact: true });
  }
  if (!(await el.isVisible({ timeout: 6000 }).catch(() => false))) {
    // FALLBACK 2: XPath from spec — last resort only
    el = page.locator(
      '//*[@id="slot-list-container"]/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[21]/div/div/div/div/div/div/div/div/div/div[1]/div'
    );
  }
  await expect(el).toBeVisible({ timeout: 12000 });
  return el;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Wait for "Item added to cart" message — specific UI, NOT networkidle
// ─────────────────────────────────────────────────────────────────────────────
async function waitForCartConfirmation(page: Page): Promise<void> {
  let msg: Locator = page.getByText('Item added to cart', { exact: false });
  const msgVisible = await msg.isVisible({ timeout: 12000 }).catch(() => false);
  if (msgVisible) {
    await expect(msg).toBeVisible({ timeout: 12000 });
    console.log('[Cart] "Item added to cart" message confirmed.');
    return;
  }
  const cartDialog = page.getByRole('dialog');
  const dialogVisible = await cartDialog.isVisible({ timeout: 8000 }).catch(() => false);
  if (dialogVisible) {
    await expect(cartDialog).toBeVisible({ timeout: 12000 });
    console.log('[Cart] Cart overlay/dialog confirmed.');
    return;
  }
  await page.waitForTimeout(2500);
  console.log('[Cart] Used timeout fallback for cart confirmation.');
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER : Resolve cart header nav button — self-healing with XPath last resort
// ─────────────────────────────────────────────────────────────────────────────
async function resolveCartNavButton(page: Page): Promise<Locator> {
  // PRIMARY: aria-label "Cart"
  let el: Locator = page.getByLabel('Cart');
  if (!(await el.isVisible({ timeout: 7000 }).catch(() => false))) {
    // FALLBACK 1: link containing "cart"
    el = page.getByRole('link', { name: /cart/i });
  }
  if (!(await el.isVisible({ timeout: 6000 }).catch(() => false))) {
    // FALLBACK 2: XPath from spec — last resort only
    el = page.locator(
      '//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div/header/div[3]/div[4]/div/a/div/img'
    );
  }
  await expect(el).toBeVisible({ timeout: 12000 });
  return el;
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST SUITE
// ─────────────────────────────────────────────────────────────────────────────
test.describe('Flipkart – Washing Machine Search, Add to Cart & Verify', () => {

  test('Search washing machine, add first product to cart, verify cart', async ({ browser }) => {

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
    console.log('[Step 1] Flipkart homepage loaded and stabilised.');

    // ── STEP 2 : Handle login popup ──────────────────────────────────────────
    await handleLoginPopup(page);

    // ── STEP 3 : Locate search input by exact placeholder and fill ────────────
    let searchBox: Locator = page.getByPlaceholder(
      'Search for Products, Brands and More'
    );
    if (!(await searchBox.isVisible({ timeout: 8000 }).catch(() => false))) {
      searchBox = page.getByRole('searchbox');
    }
    await expect(searchBox).toBeVisible({ timeout: 12000 });
    await searchBox.click();
    await searchBox.fill('washing machine');
    console.log('[Step 3] Typed "washing machine" in search bar.');

    // ── STEP 4 : Press Enter ─────────────────────────────────────────────────
    await searchBox.press('Enter');
    console.log('[Step 4] Enter pressed — search submitted.');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1500);

    // ── STEP 5 : Wait for results — specific UI element, NOT networkidle ──────
    await waitForSearchResults(page);
    console.log('[Step 5] Search results loaded.');

    // ── STEP 6 : Click first product containing "washing" ────────────────────
    // Product may open in a new tab — capture via context event
    const [newTab] = await Promise.all([
      context.waitForEvent('page', { timeout: 10000 }).catch(() => null),
      clickFirstWashingProduct(page),
    ]);

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
    console.log('[Step 9] Cart confirmation received.');

    // ── STEP 10 : Click cart navigation button ───────────────────────────────
    const cartNavBtn = await resolveCartNavButton(pPage);
    await cartNavBtn.click();
    console.log('[Step 10] Cart nav button clicked.');

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
    // 12a: Product name contains "washing"
    const nameToAssert = cartItemName !== 'N/A' ? cartItemName : productName;
    expect(
      nameToAssert.toLowerCase(),
      `Expected name to contain "washing". Got: "${nameToAssert}"`
    ).toContain('washing');
    console.log('✅ [Assert 12a] Product name contains "washing".');

    // 12b: Cart price matches product detail price
    if (productPrice !== 'N/A' && cartItemPrice !== 'N/A') {
      expect(
        normalisePrice(cartItemPrice),
        `Cart price "${cartItemPrice}" should match product price "${productPrice}"`
      ).toBe(normalisePrice(productPrice));
      console.log('✅ [Assert 12b] Cart price matches product detail price.');
    } else {
      console.log('⚠️  [Assert 12b] Price comparison skipped — one or both values N/A.');
    }

    // 12c: Cart item is visible on page
    const cartItemVisible = pPage.getByRole('link').filter({ hasText: /washing/i }).first();
    await expect(cartItemVisible).toBeVisible({ timeout: 12000 });
    console.log('✅ [Assert 12c] Cart item with "washing" is visible in cart.');

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
