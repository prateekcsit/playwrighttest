const { test, expect } = require('@playwright/test');
 
async function dragAndDrop(page, sourceSelector, targetSelector) {
  const source = await page.$(sourceSelector);
  const target = await page.$(targetSelector);
 
  await page.evaluate(([src, tgt]) => {
    const dataTransfer = new DataTransfer();
    src.dispatchEvent(new DragEvent('dragstart', { dataTransfer }));
    tgt.dispatchEvent(new DragEvent('drop', { dataTransfer }));
    src.dispatchEvent(new DragEvent('dragend', { dataTransfer }));
  }, [source, target]);
}
 
test('custom drag and drop', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  await dragAndDrop(page, '#column-a', '#column-b');
  await expect(page.locator('#column-b')).toHaveText('A');
  await page.pause()
});