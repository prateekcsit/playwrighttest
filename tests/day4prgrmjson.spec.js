import {test, expect} from '@playwright/test'

const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))
 
test('Data Driven testing', async ({ page }) => {
 
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("//input[@id='email1']").fill(testdata.username)

    await page.locator("//input[@id='password1']").fill(testdata.username)

    await page.pause()
 
    

});