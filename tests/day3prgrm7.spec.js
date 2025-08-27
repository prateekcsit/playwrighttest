import {test, expect} from '@playwright/test'
 
test('multi Tab Test', async ({ browser }) => {  

  const context = await browser.newContext()
 
  const page = await context.newPage()
 
  await page.goto("https://practice.expandtesting.com/windows")

const [newPage] = await Promise.all 

(

    [

         context.waitForEvent('page'),

         page.locator("//a[contains(@href,'/windows/new')]").click()

    ])  
 
await page.pause()

})

 