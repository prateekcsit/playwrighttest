import {test, expect} from '@playwright/test'
const testdata = JSON.parse(JSON.stringify(require("../testdata1.json")))
 
test.describe("data driven login test",function()
{
 
    for(const data of testdata) {
 
        test.describe(`login with users ${data.id}`, function()
        {
 
              test('Login to application', async ({ page }) => 
                { 
                  await page.goto("https://freelance-learn-automation.vercel.app/login")
                  await page.locator("//input[@id='email1']").fill(data.username)
                   await page.locator("//input[@id='password1']").fill(data.password)
                   await page.pause()
    })
 
    
    })
 
}
})
 