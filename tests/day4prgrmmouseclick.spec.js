// @ts-check
const { test, expect } = require('@playwright/test');
test('Check box Testing', async ({ page }) => {    
await page.goto('https://artoftesting.com/samplesiteforselenium');
//await page.locator('id=idOfButton').click()
 
//await page.locator('id=dblClkBtn').dblclick()
 
await page.getByText('Submit').hover()
await page.pause()
 
 
})
 