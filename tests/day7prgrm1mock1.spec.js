import { test, expect } from '@playwright/test';
 
test('Mock API with route.fulfill', async ({ page }) => {

  // Intercept /users requests

  await page.route('**/users', async route => {

    await route.fulfill({

      status: 200,

      contentType: 'application/json',

      body: JSON.stringify([

        { id: 1, name: "Test (mocked)" },

        { id: 2, name: "Test1 (mocked)" }

      ])

    });

  });
 
  // Navigate to a site that makes the request

  await page.goto('https://jsonplaceholder.typicode.com');
 
  // Simulate fetch from inside the browser context

  const data = await page.evaluate(async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    return res.json();})
    console.log("Mocked Data :" ,data)
  })