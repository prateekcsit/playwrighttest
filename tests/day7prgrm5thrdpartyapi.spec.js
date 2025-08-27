import { test, expect } from '@playwright/test';
 
test('Block Google Analytics on a live site', async ({ page }) => {
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.includes('google-analytics.com') || url.includes('googletagmanager.com')) {
      console.log('🚫 Blocking third-party analytics:', url);
      return route.abort();
    }
    return route.continue();
  });
 
  await page.goto('https://www.google.co.in/');
  await expect(page).toHaveTitle(/Google/);
});
