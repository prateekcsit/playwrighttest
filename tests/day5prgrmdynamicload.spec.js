import { test, expect } from '@playwright/test';
 
test('dynamic loading example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
 
  // Click start
  await page.click('button');
 
  // Element appears only after AJAX load
  await expect(page.locator('#finish h4')).toHaveText('Hello World!');
  await page.pause()
});