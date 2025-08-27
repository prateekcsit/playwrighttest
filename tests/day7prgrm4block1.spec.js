import { test, expect } from '@playwright/test';
 
test('Block images on example.com', async ({ page }) => {
  await page.route('**/*', (route) => {
    if (route.request().resourceType() === 'image') {
      console.log('🚫 Blocking image:', route.request().url());
      return route.abort();
    }
    return route.continue();
  });
 
  await page.goto('https://www.wikipedia.org/');
  await expect(page.locator('input[name="search"]')).toBeVisible();
  await page.pause()
});