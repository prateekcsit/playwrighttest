const { test, expect } = require('@playwright/test');
 
test('locate by text on Flipkart', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
 
   
  // Search for iPhone 14
  await page.getByPlaceholder('Search for products, brands and more').fill('iPhone 14');
  await page.getByRole('button', { name: 'Search' }).click();
 
  
});
 