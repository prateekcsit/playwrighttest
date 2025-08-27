// @ts-check
const { test, expect } = require('@playwright/test');
 
test('QA Demo Form Test', async ({ page }) => {    
    await page.goto('https://demoqa.com/automation-practice-form/');
   
    // Enter text value inside first name text box
    await page.locator('id=firstName').fill('user1');
    // Enter Last Name
    await page.locator('id=lastName').fill('user2');
    //userEmail
    // Radio Buttons
    await page.locator("//label[normalize-space()='Male']").check()
    //text box
    await page.locator('id=userEmail').fill('user1@yahoo.com');
    // Mobile Number
    await page.locator('id=userNumber').fill('1234567890');
    //Current Address
    await page.locator('id=currentAddress').fill('Blue Lotus Technologies, Chennai');
    // Submit button
    await page.locator("//button[@id='submit']").click()
    await page.pause();
});