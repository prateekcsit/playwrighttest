import {test, expect} from '@playwright/test'
 
test('Hidden Element ', async ({ page }) => {    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole("textbox",{name:"Username"}).fill("Admin")
    await page.getByRole("textbox",{name:"Password"}).fill("admin123")
    await page.getByRole("button",{type:"Submit"}).click()
    await page.locator("//span[normalize-space()='PIM']").click()
    await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i").click()
   
    await page.waitForTimeout(3000)
    const options = await page.$$("//div[@role='listbox']//span")
 
    for (let option of options)
    {
       const jobTitle = await option.textContent()
       //console.log(jobTitle)
       if(jobTitle.includes('QA Engineer'))
       {
        await option.click()
        break
       }
    }
 
    await page.waitForTimeout(7000)
    //await page.pause()
})