import { test as setup } from '@playwright/test';

import path from 'path';
 
const authFile = path.join(__dirname, '../auth.json');
 
setup('Login and save auth state', async ({ page }) => {

  // Go to saucedemo

  await page.goto('https://www.saucedemo.com/');
 
  // Fill login form

  await page.fill('[data-test="username"]', 'standard_user');

  await page.fill('[data-test="password"]', 'secret_sauce');

  await page.click('[data-test="login-button"]');
 
  // Wait for inventory page to confirm login

  await page.waitForURL('**/inventory.html');
 
  // Save storage state

  await page.context().storageState({ path: authFile });

});

 