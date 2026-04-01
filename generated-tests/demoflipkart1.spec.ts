import { test, expect } from '@playwright/test';

test.describe('Flipkart Washing Machine Add to Cart', () => {
  test('should search washing machine, extract details and verify cart', async ({ page }) => {
    // Configure longer timeout for this test
    test.setTimeout(120000);

    // Navigate to Flipkart
    await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });
    console.log('✓ Navigated to Flipkart');

    // Handle login popup if it appears
    try {
      const loginPopupClose = page.locator('button._2KpZ6l._2doB4z, button._2KpZ6l, span._30XB9F, button[class*="close"]').first();
      await loginPopupClose.waitFor({ timeout: 5000, state: 'visible' });
      await loginPopupClose.click();
      await page.waitForTimeout(1000);
      console.log('✓ Login popup closed');
    } catch (error) {
      console.log('✓ No login popup appeared or already closed');
    }

    // Search for "washing machine" in the search bar
    const searchBox = page.locator('input[name="q"], input[type="text"][title="Search for Products, Brands and More"], input[placeholder*="Search"]').first();
    await searchBox.waitFor({ state: 'visible', timeout: 10000 });
    await searchBox.click();
    await searchBox.fill('washing machine');
    console.log('✓ Entered "washing machine" in search bar');

    // Press Enter to perform search
    await searchBox.press('Enter');
    console.log('✓ Search submitted');

    // Wait for search results to load
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);
    await page.waitForSelector('div[data-id], a[href*="/p/"], div._1AtVbE, div._75nlfW', { timeout: 15000 });
    console.log('✓ Search results loaded');

    // Select the first product from the results
    const firstProduct = page.locator('div[data-id], a[href*="/p/"], div._1AtVbE a, div._75nlfW a').first();
    await firstProduct.waitFor({ state: 'visible', timeout: 10000 });
    
    const productUrl = await firstProduct.getAttribute('href');
    console.log('Selected product URL:', productUrl);
    
    await firstProduct.click();
    console.log('✓ Clicked on first product');

    // Switch to the new tab if product opens in a new tab
    await page.waitForTimeout(2000);
    const pages = page.context().pages();
    const productPage = pages.length > 1 ? pages[pages.length - 1] : page;
    
    if (pages.length > 1) {
      console.log('✓ Switched to new tab');
      await productPage.bringToFront();
    } else {
      console.log('✓ Product opened in same tab');
    }
    
    await productPage.waitForLoadState('domcontentloaded');
    await productPage.waitForTimeout(3000);

    // Extract and log product details (name, price, rating, availability)
    let productName = '';
    try {
      const nameElement = productPage.locator('span.VU-ZEz, h1.yhB1nd, span._35KyD6, h1._6EBuvT').first();
      await nameElement.waitFor({ timeout: 5000 });
      productName = (await nameElement.textContent())?.trim() || '';
    } catch (error) {
      console.log('Warning: Product name not found');
      productName = 'Name not available';
    }

    let productPrice = '';
    try {
      const priceElement = productPage.locator('div._30jeq3._16Jk6d, div._16Jk6d, div._30jeq3').first();
      await priceElement.waitFor({ timeout: 5000 });
      productPrice = (await priceElement.textContent())?.trim() || '';
    } catch (error) {
      console.log('Warning: Product price not found');
      productPrice = 'Price not available';
    }

    let productRating = 'N/A';
    try {
      const ratingElement = productPage.locator('div._3LWZlK, span._1lRcqv, div.XQDdHH, div._3LWZlK._1rdVr6').first();
      await ratingElement.waitFor({ timeout: 3000 });
      productRating = (await ratingElement.textContent())?.trim() || 'N/A';
    } catch (error) {
      console.log('Note: Rating not found');
    }

    let productAvailability = 'Available';
    try {
      const outOfStockCheck = await productPage.locator('text=Out of Stock, text=Currently Unavailable, text=Sold Out').first().isVisible({ timeout: 2000 });
      if (outOfStockCheck) {
        productAvailability = 'Out of Stock';
      }
    } catch (error) {
      productAvailability = 'Available';
    }

    // Log all product details
    console.log('\n========== Product Details ==========');
    console.log('Name:', productName);
    console.log('Price:', productPrice);
    console.log('Rating:', productRating);
    console.log('Availability:', productAvailability);
    console.log('====================================\n');

    // Store captured data for verification
    const capturedProductName = productName;
    const capturedProductPrice = productPrice;

    // Click "Add to Cart" button
    const addToCartButton = productPage.locator(
      'button._2KpZ6l._2U9uOA._3v1-ww, ' +
      'li._2KpZ6l button, ' +
      'button:has-text("ADD TO CART"), ' +
      'button:has-text("Add to Cart"), ' +
      'button._2KpZ6l._2U9uOA'
    ).first();
    
    await addToCartButton.waitFor({ state: 'visible', timeout: 10000 });
    await addToCartButton.click();
    console.log('✓ Clicked "Add to Cart" button');

    // Wait for cart page or cart overlay to appear
    await productPage.waitForLoadState('domcontentloaded');
    await productPage.waitForTimeout(3000);
    
    const currentUrl = productPage.url();
    const isCartPage = currentUrl.includes('/cart') || currentUrl.includes('/viewcart');
    console.log(isCartPage ? '✓ Navigated to cart page' : '✓ Cart overlay appeared');

    // Verify that the selected product is present in the cart
    const cartProductName = await productPage.locator(
      'a._2Kn22P, ' +
      'div._2Kn22P, ' +
      'a.URV5kb, ' +
      'div._3LWZlK a, ' +
      'a._2VT87k'
    ).first().textContent();
    
    const cartProductPrice = await productPage.locator(
      'span._30jeq3, ' +
      'div._30jeq3, ' +
      'span._2-ut7c, ' +
      'div._3I9_wc._2p6lqe'
    ).first().textContent();

    // Verify product name contains "washing" keyword
    const cartNameLower = cartProductName?.trim().toLowerCase() || '';
