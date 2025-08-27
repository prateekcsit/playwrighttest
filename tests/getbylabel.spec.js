const { test, expect } = require('@playwright/test');
 
test('get by label', async ({ page }) => {
  await page.goto('https://secure.simplepractice.com/users/sign_in');
  await page.getByLabel('Email').fill('user1');
  await page.getByLabel('Password').fill('secret');
  await page.pause()
});
 