import { test, expect } from '@playwright/test';
 
test('poll weather temperature on Weather.com', async ({ page }) => {

  await page.goto('https://weather.com');
 
  // Wait for temperature to show up

  await page.waitForSelector('.CurrentConditions--tempValue--zUBSz');
 
  const getTemperature = async () => {

    return await page.locator('.CurrentConditions--tempValue--zUBSz').innerText();

  };
 
  // Poll until temperature contains "°" symbol

  await expect.poll(getTemperature, {

    timeout: 20000,

    intervals: [2000],

    message: 'Temperature did not appear'

  }).toContain('°');

});

 