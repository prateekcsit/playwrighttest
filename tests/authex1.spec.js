import { test, expect } from '@playwright/test';
 
test('Check inventory after login via auth.json', async ({ page }) => {
  // Directly go to inventory (session is reused from auth.json)
  await page.goto('https://www.saucedemo.com/inventory.html');
 
  // ✅ Verify inventory is loaded
  const firstProduct = page.locator('.inventory_item_name').first();
  await expect(firstProduct).toBeVisible();
 
  console.log("📦 First Product:", await firstProduct.innerText());
});