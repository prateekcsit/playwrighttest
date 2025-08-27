import {test, expect} from '@playwright/test'
 
 test("Calendar demo using fill function", async ({ page }) => {
     await page.goto("https://testautomationpractice.blogspot.com/");
     let date = "2024-10-18"
 
     await page.fill("id=datepicker", date);
     await page.waitForTimeout(3000)
     await page.pause()
 })
 