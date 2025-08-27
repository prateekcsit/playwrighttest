import { test } from '@playwright/test';
 
test('full page screenshot', async ({ page }) => {
  await page.goto('https://playwright1.dev/');
  await page.screenshot({ path: 'fullpage.png', fullPage: true });
});