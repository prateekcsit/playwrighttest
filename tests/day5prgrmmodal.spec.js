import { test, expect } from '@playwright/test';
 
test('Handle Bootstrap modal', async ({ page }) => {
 
 
    await page.goto('https://getbootstrap.com/docs/5.3/components/modal/');
 
  // Click to open modal
  await page.click('text=Launch demo modal');
 
  // Wait for modal to be visible
  const modal = page.locator('.modal.show');
  await expect(modal).toBeVisible();
 
  // Interact with modal content
  await expect(modal.locator('.modal-title')).toHaveText('Modal title');
  // Close modal
  await modal.locator('button.btn-close1').click();
  await expect(modal).toBeHidden();
});
 