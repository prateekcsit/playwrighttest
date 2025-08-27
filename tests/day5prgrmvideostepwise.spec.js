import { test, chromium } from '@playwright/test';
 
test('step-wise recording demo', async () => {
  const browser = await chromium.launch();
  // Step 1 video
  const context1 = await browser.newContext({
    recordVideo: { dir: 'videos/step1/' }
  });
  const page1 = await context1.newPage();
  await page1.goto('https://playwright1.dev/');
  await page1.click('text=Get started');
  await context1.close();  // saves video
 
  // Step 2 video
  const context2 = await browser.newContext({
    recordVideo: { dir: 'videos/step2/' }
  });
  const page2 = await context2.newPage();
  await page2.goto('https://github1.com/');
  await page2.click('.HeaderMenu-link.HeaderMenu-link--sign-in.HeaderMenu-button.flex-shrink-0.no-underline.d-none.d-lg-inline-flex.border.border-lg-0.rounded.px-2.py-1');
  await context2.close();  // saves video
 
  await browser.close();
});