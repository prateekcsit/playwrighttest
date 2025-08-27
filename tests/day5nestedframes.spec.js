import { test, expect } from '@playwright/test';
 
test('Handle Nested Frames', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested_frames');
 
  // Get all frames
  const frames = page.frames();
  console.log('All frames:', frames.map(f => f.name()));
 
  // Get top frame
  const topFrame = page.frame({ name: 'frame-top' });
 
  // From topFrame, get child frame by name
  const middleFrame = topFrame.childFrames().find(f => f.name() === 'frame-middle');
 
  // Get text from middle frame
  const middleText = await middleFrame.locator('#content').innerText();
  console.log('Middle frame text:', middleText);
  expect(middleText).toBe('MIDDLE');
 
  // Access bottom frame directly
  const bottomFrame = page.frame({ name: 'frame-bottom' });
  const bottomText = await bottomFrame.locator('body').innerText();
  console.log('Bottom frame text:', bottomText);
  expect(bottomText).toBe('BOTTOM');
});