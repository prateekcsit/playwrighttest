// @ts-nocheck

const { test, expect } = require('@playwright/test');
 
test('Get Text Extract', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // user and Invalid Password

  await page.getByPlaceholder('Username').fill('User1');

  await page.getByPlaceholder('Password').fill('Secret');

})
 
 