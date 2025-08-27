import {test, expect} from '@playwright/test'
 
test('Assertion Testing', async ({ page }) => {     

    await page.goto('https://kitchen.applitools.com/');
 
 
    // Locate the element and get its text content

  const textContent = await page.textContent('h1');

  console.log(textContent); // Outputs the text content of the h1 element
 
 
})

 