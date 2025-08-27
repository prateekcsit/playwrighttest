import { test, expect } from '@playwright/test';
 
test('Abort images and ads', async ({ page }) => {
  await page.route('**/*.{png,jpg,jpeg,gif}', route => route.abort()); // block images
  await page.route('**/ads/**', route => route.abort()); // block ads
 
  await page.goto('https://demoqa.com/elements');
  await page.pause()
  console.log("🚫 Images and ads blocked");
});
 