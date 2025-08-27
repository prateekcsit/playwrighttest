// @ts-check
const { test, expect } = require('@playwright/test');
 
test('Check box Testing', async ({ page }) => {    
await page.goto('https://demoqa.com/buttons');
//await page.locator('id=SWEqz').click()
 
await page.locator('id=doubleClickBtn').dblclick()
await page.locator('id=rightClickBtn').click({ button: 'right' });
 
//await page.getByText('Submit').hover()
await page.pause()
 
 
})