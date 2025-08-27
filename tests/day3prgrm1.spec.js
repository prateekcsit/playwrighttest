import { test, expect } from '@playwright/test';
 
test('Shadow DOM search using Enter key', async ({ page }) => {
    await page.goto('https://books-pwakit.appspot.com/');
    // Locate search box
    const searchBox = page.locator(
        'book-app >>> app-header >>> app-toolbar >>> book-input-decorator >>> input#input'
    );
    await searchBox.fill('Playwright');
    // Press Enter instead of clicking icon
    await searchBox.press('Enter');
    await page.waitForTimeout(3000); // see results
});
