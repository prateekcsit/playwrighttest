const { test, expect } = require('@playwright/test');
 
test('Radio Button Testing', async ({ page }) => {     
await page.goto('https://artoftesting.com/samplesiteforselenium');
const maleradio = page.locator("#male")
await maleradio.check();
await expect(maleradio).toBeChecked
await page.pause()
 
})