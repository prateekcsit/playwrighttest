
// @ts-check
 const { test, expect } = require('@playwright/test');
 
test('Check box Testing', async ({ page }) => {    
await page.goto('https://practice.expandtesting.com/upload');
await page.locator("//input[@id='fileInput']").setInputFiles('C:/playwrighttest/tests/hello.js')
await page.locator('#fileSubmit').click()
await page.pause()
})
/*// @ts-check
 const { test, expect } = require('@playwright/test');
 
test('Check box Testing', async ({ page }) => {    
await page.goto('https://www.webdriveruniversity.com/File-Upload/index.html');
await page.locator("//input[@id='myFile']").setInputFiles('C:/playwrighttest/tests/hello.js')
await page.locator("//input[@id='submit-button']").click()
await page.pause()
 
})*/