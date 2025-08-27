import { test } from '@playwright/test';
test('Debug with console logs', async ({ page }) => {
  // Capture console logs from browser
  page.on('console', msg => {
    console.log(`📢 [BROWSER LOG]: ${msg.type()} - ${msg.text()}`);
  });
 
  await page.goto('https://example.com');
  await page.evaluate(() => {
    console.log("This is from inside the page!");
    console.error("Something went wrong here!");
  });
});
 