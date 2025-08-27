
import { test, expect } from '@playwright/test';
 
test('[@smoketest]has  title', async ({ page }) => {
  await page.goto('https://google.co.in/');
  //test.info().config.retries = 3;
 
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});