import { test, expect } from '@playwright/test';
 
test('Amazon search example - handling dynamic locators', async ({ page }) => {

  // Go to Amazon India

  await page.goto('https://www.amazon.in/');
  await page.pause()
 
  // Fill the search box with a product name

  await page.getByPlaceholder('Search Amazon.in').fill('laptop');
  await page.pause()
 
  // ✅ Instead of getByRole('button', { name: 'Go' }) which matches multiple,

  // use the unique ID of the search button

  await page.locator('#nav-search-submit-button').click();
  await page.pause()
 
  // ✅ Wait for search results

  await page.waitForSelector('.s-main-slot');
 
  // Check that results contain the word "laptop"

  const results = await page.locator('.s-main-slot').innerText();

  expect(results.toLowerCase()).toContain('laptop');
 
  // Take screenshot for proof

  await page.screenshot({ path: 'amazon_search.png' });
  await page.pause()

});
 