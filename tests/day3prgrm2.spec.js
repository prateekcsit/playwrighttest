import { test, expect } from '@playwright/test';
 
test('filter buttons example', async ({ page }) => {
    await page.goto('https://github.com/');
    // Get all buttons
    const allButtons = page.locator('button').filter({ hasText: 'Sign up' });
    // Filter only the one with text "Sign up"
    const signUpButton = allButtons.filter({ hasText: 'Sign up' });
    await page.getByRole('button', { name: 'Sign up for GitHub' }).click();
    await page.waitForTimeout(3000); // just to see
});