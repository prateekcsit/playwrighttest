const { test, expect } = require('@playwright/test');
 
test('get by label', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  //await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.pause()
});