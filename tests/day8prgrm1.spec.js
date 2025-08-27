/*import { test, expect } from '@playwright/test';
 
test.describe.serial('Priority Demo', () => {
  test('P1 - Login (highest priority)', async ({ page }) => {
    await page.goto('https://saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory/);
  });
 
  test('P2 - Add to Cart', async ({ page }) => {
    await page.click('.inventory_item:first-child button');
    await page.click('.shopping_cart_link');
    await expect(page.locator('.cart_item')).toHaveCount(1);
  });
 
  test('P3 - Checkout (lowest priority)', async ({ page }) => {
    await page.click('#checkout');
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
  });
});*/
import { test, expect } from '@playwright/test';
 
test.describe.serial('Priority Demo', () => {

  test('P1 - Login (highest priority)', async ({ page }) => {

    await page.goto('https://saucedemo.com/');     

  });
 
  test('P2 - Add to Cart', async ({ page }) => {

  await page.goto('https://www.google.co.in');

  });
 
  test('P3 - Checkout (lowest priority)', async ({ page }) => {

    await page.goto('https://www.icicibank.com/'); 

  });

});
 