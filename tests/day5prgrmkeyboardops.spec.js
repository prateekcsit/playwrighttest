// tests/keyboard.spec.js
import { test, expect } from '@playwright/test';
 
test('login using only keyboard actions', async ({ page }) => {
  // Open website
  await page.goto('https://www.saucedemo.com/');
 
  // Focus on username field
  await page.click('#user-name');
 
  // Type username
  await page.keyboard.type('standard_user');
 
  // Press TAB to move to password field
  await page.keyboard.press('Tab');
 
  // Type password
  await page.keyboard.type('secret_sauce');
  await page.pause()
  // Press ENTER to submit login form
  await page.keyboard.press('Enter');

  //Verify we are logged in by checking inventory page
  await expect(page.locator('.title')).toHaveText('Products');
  await page.pause()
});