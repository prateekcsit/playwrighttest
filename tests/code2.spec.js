const { test, expect } = require('@playwright/test');
 
test('locate elements by text on Wikipedia', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
 
  // Click English link
  await page.getByRole('link', { name: 'English' }).click();
 
  // Assert you are on English Wikipedia
  await expect(page).toHaveURL(/en\.wikipedia\.org/);
 
  // Fill the main search box (force first match)
  await page.getByPlaceholder('Search Wikipedia').first().fill('Playwright');
 
  // Click search
  await page.getByRole('button', { name: 'Search' }).click();
 
  // Verify result
  await expect(page.getByRole('Heading', { name: /Playwright/ })).toBeVisible();
});