const { test, expect } = require('@playwright/test');

test('Submit form inside iframe', async ({ page }) => {
  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_form_submit', {
    waitUntil: 'domcontentloaded'
  });

  const frame = page.frameLocator('iframe[name="iframeResult"]');

  // Fill form
  await frame.locator('input[name="fname"]').fill('John');
  await frame.locator('input[name="lname"]').fill('Doe');

  // Submit
  await frame.locator('input[type="submit"]').click();

  // Assert that server response contains query string
  await expect(frame.locator('body')).toContainText('fname=John&lname=Doe');
  await page.pause()
});
/*// tests/iframe-form.spec.js
import { test, expect } from '@playwright/test';
 
test('submit form inside iframe', async ({ page }) => {
  // Go to a page with iframe
  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_form_submit');
 
  // Switch to the iframe by name or selector
  const frame = await page.frame({ name: 'iframeResult' });
 
  //  Fill form fields inside the iframe
  await frame.fill('input[name="fname"]', 'test1');
  await frame.fill('input[name="lname"]', 'test2');
 
  // Submit the form
  await frame.click('input[type="submit"]');
 
  // Validate result (form redirects to GET response page)
  await expect(frame.locator('body')).toContainText('John');
  await expect(frame.locator('body')).toContainText('Doe');
});
*/