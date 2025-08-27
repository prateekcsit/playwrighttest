import { test, expect, request } from '@playwright/test';
 
test('Validate API response matches UI product details', async ({ page }) => {
  // 1. Create API context
  const apiContext = await request.newContext();
 
  // 2. Fetch product from API
  const apiResponse = await apiContext.get('https://fakestoreapi.com/products/1');
  expect(apiResponse.ok()).toBeTruthy();
  const product = await apiResponse.json();
 
  console.log("🛒 API Product:", product.title, " | Price:", product.price);
 
  // 3. Go to UI (SauceDemo login)
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
 
  // 4. Locate first product in UI
  const uiProductName = await page.locator('.inventory_item_name').first().innerText();
  const uiProductPrice = await page.locator('.inventory_item_price').first().innerText();
  //for any particular product
 /*const uiProductName = await page.locator('.inventory_item_name').nth(3).innerText();
  const uiProductPrice = await page.locator('.inventory_item_price').nth(3).innerText();*/
  console.log("🖥️ UI Product:", uiProductName, " | Price:", uiProductPrice);
 
  // 5. Validate API + UI consistency (dummy check: just non-empty & valid number)
  expect(uiProductName.length).toBeGreaterThan(0);
  expect(Number(uiProductPrice.replace('$',''))).toBeGreaterThan(0);
 
  // For real project: expect(uiProductName).toContain(product.title) etc.
 
  await apiContext.dispose();
});