import { test, expect } from '@playwright/test';

test.describe('Flipkart Washing Machine Add to Cart', () => {
  test('should search washing machine, capture details and add to cart', async ({ page }) => {
    // Configure longer timeout for this test due to Flipkart's load times
    test.setTimeout(120000);

    // Navigate to Flipkart
    await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });
    console.log('✓ Navigated to Flipkart');

    // Handle login popup if it appears
    try {
      // Multiple selectors to handle different popup variations
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
    
    // Wait for product listings to appear
    await page.waitForSelector('div[data-id], a[href*="/p/"], div._1AtVbE, div._75nlfW', { timeout: 15000 });
    console.log('✓ Search results loaded');

    // Select the first product from the results
    const firstProduct = page.locator('div[data-id], a[href*="/p/"], div._1AtVbE a, div._75nlfW a').first();
    await firstProduct.waitFor({ state: 'visible', timeout: 10000 });
    
    // Get the product URL before clicking (in case of new tab)
    const productUrl = await firstProduct.getAttribute('href');
    console.log('Selected product URL:', productUrl);
    
    // Click on first product
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
    
    // Wait for product details page to load
    await productPage.waitForLoadState('domcontentloaded');
    await productPage.waitForTimeout(3000);

    // Extract and log product details (name, price, rating, availability)
    
    // Extract Product Name
    let productName = '';
    try {
      const nameElement = productPage.locator('span.VU-ZEz, h1.yhB1nd, span._35KyD6, h1._6EBuvT').first();
      await nameElement.waitFor({ timeout: 5000 });
      productName = (await nameElement.textContent())?.trim() || '';
    } catch (error) {
      console.log('Warning: Product name not found with primary selectors');
      productName = 'Name not available';
    }

    // Extract Product Price
    let productPrice = '';
    try {
      const priceElement = productPage.locator('div._30jeq3._16Jk6d, div._16Jk6d, div._30jeq3').first();
      await priceElement.waitFor({ timeout: 5000 });
      productPrice = (await priceElement.textContent())?.trim() || '';
    } catch (error) {
      console.log('Warning: Product price not found with primary selectors');
      productPrice = 'Price not available';
    }

    // Extract Product Rating
    let productRating = 'N/A';
    try {
      const ratingElement = productPage.locator('div._3LWZlK, span._1lRcqv, div.XQDdHH, div._3LWZlK._1rdVr6').first();
      await ratingElement.waitFor({ timeout: 3000 });
      productRating = (await ratingElement.textContent())?.trim() || 'N/A';
    } catch (error) {
      console.log('Note: Rating not found');
    }

    // Extract Product Availability
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
    
    // Check if we're on cart page or if overlay appeared
    const currentUrl = productPage.url();
    const isCartPage = currentUrl.includes('/cart') || currentUrl.includes('/viewcart');
    console.log(isCartPage ? '✓ Navigated to cart page' : '✓ Cart overlay appeared');

    // Verify that the selected product is present in the cart
    // Extract cart product name
    const cartProductName = await productPage.locator(
      'a._2Kn22P, ' +
      'div._2Kn22P, ' +
      'a.URV5kb, ' +
      'div._3LWZlK a, ' +
      'a._2VT87k'
    ).first().textContent();
    
    // Extract cart product price
    const cartProductPrice = await productPage.locator(
      'span._30jeq3, ' +
      'div._30jeq3, ' +
      'span._2-ut7c, ' +
      'div._3I9_wc._2p6lqe'
    ).first().textContent();

    console.log('\n========== Cart Verification ==========');
    console.log('Cart Product Name:', cartProductName?.trim());
    console.log('Cart Product Price:', cartProductPrice?.trim());
    console.log('======================================\n');

    // Verify product name and price in cart match the selected product
    
    // Verify product name contains "washing" keyword
    const cartNameLower = cartProductName?.trim().toLowerCase() || '';
    expect(cartNameLower).toContain('washing');
    console.log('✓ Product name verified: Contains "washing"');

    // Verify price matches (clean up price strings for comparison)
    const cleanOriginalPrice = capturedProductPrice.replace(/[^\d]/g, '');
    const cleanCartPrice = cartProductPrice?.trim().replace(/[^\d]/g, '') || '';
    
    expect(cleanCartPrice).toBe(cleanOriginalPrice);
    console.log('✓ Product price verified: Matches original price');

    // Verify product is present in cart
    expect(cartProductName).toBeTruthy();
    expect(cartProductPrice).toBeTruthy();
    console.log('✓ Product is present in cart');

    // Final verification summary
    console.log('\n========== Test Summary ==========');
    console.log('Original Product Name:', capturedProductName);
    console.log('Original Product Price:', capturedProductPrice);
    console.log('Cart Product Name:', cartProductName?.trim());
    console.log('Cart Product Price:', cartProductPrice?.trim());
    console.log('Price Match:', cleanCartPrice === cleanOriginalPrice ? 'YES ✓' : 'NO ✗');
    console.log('Name Contains "washing":', cartNameLower.includes('washing') ? 'YES ✓' : 'NO ✗');
    console.log('Test Status: PASSED ✓');
    console.log('=================================\n');
  });
});
