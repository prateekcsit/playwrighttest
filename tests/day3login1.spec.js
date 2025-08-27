import {test,expect} from '@playwright/test'
const LoginPage=require("../pages/loginpage")
test('Login using POM file', async ({ page }) => {
 
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    
    const loginPage   = new LoginPage(page)
    
    await  loginPage.LoginToApplication()
    
    await page.pause();
 
})