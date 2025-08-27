import { test, expect } from '@playwright/test';
 
// ✅ Shared fixture: browser & context
test.describe.configure({ mode: 'serial' }); // run tests in order for demo
 
test.describe('SauceDemo Login Tests', () => {
  let page;
 
  // 🔹 beforeAll runs once (shared fixture)
  test.beforeAll(async ({ browser }) => {
    console.log('>>> Launching browser and creating context');
    const context = await browser.newContext();
    page = await context.newPage();
  });
 
  // 🔹 beforeEach runs before every test
  test.beforeEach(async () => {
    console.log('>>> Navigating to site before test');
    await page.goto('https://www.saucedemo.com/');
  });
 
  // 🔹 afterEach runs after every test
  test.afterEach(async () => {
    console.log('>>> Clearing storage after test');
    await page.evaluate(() => localStorage.clear());
  });
 
  // 🔹 afterAll runs once after all tests
  test.afterAll(async () => {
    console.log('>>> Closing page');
    await page.close();
  });
 
  // 🟢 Test 1: Valid login
  test('valid login', async () => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('.title')).toHaveText('Products');
  });
 
  // 🔴 Test 2: Invalid login
  test('invalid login shows error', async () => {
    await page.fill('#user-name', 'wrong_user');
    await page.fill('#password', 'wrong_pass');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
  });
});