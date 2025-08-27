// tests/keyboard.spec.js
import { test, expect } from '@playwright/test';
 
test('login using only keyboard actions', async ({ page }) => {
  // Open website
  await page.goto('https://bing.com');
 
   // Type query
await page.keyboard.type('Playwright automation');
 
// Press Enter to search
await page.keyboard.press('Enter');
 
// After results, select all text in address bar (Ctrl+L)
await page.keyboard.press('Control+L');
 
await page.pause()
})