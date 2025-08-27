import { test } from '@playwright/test';
 
test('record video only for this test', async ({ browser }) => {
  // Create context with video enabled
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',        // folder where videos will be saved
      size: { width: 1280, height: 720 }
    }
  });
 
  const page = await context.newPage();
  await page.goto('https://playwright.dev/');
 
  // Do some actions
  await page.click('text=Get started');
 
  // Close page to finalize video
  await page.close();
 
  // Get video file path
  const videoPath = await page.video().path();
  console.log(`🎥 Video saved at: ${videoPath}`);
})