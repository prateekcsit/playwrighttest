import { test, expect } from '@playwright/test';
 
test('Modify headers with route.continue', async ({ page }) => {

  await page.route('**/posts', async route => {

    const headers = {

      ...route.request().headers(),

      'Authorization': 'Bearer FAKE_TOKEN_123'

    };
 
    await route.continue({ headers }); // pass modified request

  });
 
  const response = await page.request.get('https://jsonplaceholder.typicode.com/posts');

  expect(response.ok()).toBeTruthy();

  console.log("📡 Request sent with modified headers");

});
