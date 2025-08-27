import { test as base, expect } from '@playwright/test';
 
// Extend with custom fixture: test data

const test = base.extend({

  validUser: async ({}, use) => {

    await use({ username: 'standard_user', password: 'secret_sauce' });

  },

  invalidUser: async ({}, use) => {

    await use({ username: 'wrong_user', password: 'wrong_pass' });

  }

});
 
test('valid login with injected user', async ({ page, validUser }) => {

  await page.goto('/');

  await page.fill('#user-name', validUser.username);

  await page.fill('#password', validUser.password);

  await page.click('#login-button');

  await expect(page.locator('.title')).toHaveText('Products');
  await page.pause()

});
 
test('invalid login shows error', async ({ page, invalidUser }) => {

  await page.goto('/');

  await page.fill('#user-name', invalidUser.username);

  await page.fill('#password', invalidUser.password);

  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
  await page.pause()
});
