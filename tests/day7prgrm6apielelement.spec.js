import { test, expect } from '@playwright/test';
 
test('Block weather API calls', async ({ page }) => {
  await page.route('**/data/2.5/weather**', (route) => {
    console.log('🚫 Blocked weather API:', route.request().url());
    return route.abort();
  });
 
  await page.goto('https://openweathermap.org/');
  await expect(page).toHaveTitle(/OpenWeather/);
});
 
 