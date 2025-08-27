 const { test, expect } = require('@playwright/test');
 
test('Drop Down box Testing', async ({ page }) => {    
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
// custom-select  - item1
await page.locator("//select[@id='dropdowm-menu-1']").selectOption('C#')
//await page.locator("//select[@id='dropdowm-menu-1']").selectOption({label:'C#'})
//await page.locator("//select[@id='dropdowm-menu-1']").selectOption({index:2})
await page.pause()
});