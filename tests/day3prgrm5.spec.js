import {test, expect} from '@playwright/test'
 
test('Assertion Testing', async ({ page }) => {     

    await page.goto('https://kitchen.applitools.com/');
 
    //await page.pause()

// check element present or not

//await expect(page.locator('text= The Kitchen')).toHaveCount(1)

await expect(page.locator('text= The Kitchen')).toHaveCount(1);

if (await page.$('text= The Kitchen')) {

    await page.locator('text= The Kitchen').click()

        }

    // check element visible or hidden

    await expect(page.locator('text= The Kitchen')).toBeVisible()

    await expect.soft(page.locator('text= The Kitchen')).toBeHidden()
 
// Check element enabled or disabled 

    await expect(page.locator('text= The Kitchen')).toBeEnabled()

    await expect.soft(page.locator('text= The Kitchen')).toBeDisabled()
 
})

 