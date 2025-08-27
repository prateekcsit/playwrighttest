import { test, expect } from '@playwright/test';
 
test('wait for Flipkart search', async ({ page }) => {

  await page.goto('https://www.flipkart.com/');
 
  // Wait for search input to be visible

  const searchBox = page.locator('input[name="q"]');

  await expect(searchBox).toBeVisible();
 
  // Fill search text

  await searchBox.fill('laptop');
  await page.pause()

});

 