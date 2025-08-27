import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
  await page.locator('#dropdowm-menu-1').selectOption('python');
  await page.locator('#dropdowm-menu-2').selectOption('testng');
  await page.locator('#dropdowm-menu-3').selectOption('javascript');
  await page.getByText('Option 1').click();
  await page.locator('input[name="color"]').first().check();
  await page.locator('input[name="vegetable"]').first().check();
  await page.getByText('Lettuce Cabbage Pumpkin').click();
});