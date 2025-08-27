import {test, expect} from '@playwright/test' 

test("Calendar demo date picker", async ({ page }) => {

     await page.goto("https://jqueryui.com/datepicker/");

     const frameElement = await page.frameLocator('.demo-frame')

     await frameElement.locator('.hasDatepicker').fill('22/12/2024')

     await page.waitForTimeout(5000)

    })
 