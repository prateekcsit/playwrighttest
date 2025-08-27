import { test, expect } from '@playwright/test';

test('filter + nth', async ({ page }) => {

  await page.goto('https://news.ycombinator.com/');
 
  // Get all links

  const links = page.locator('a');
 
  // Filter only links with text "comments"

  const commentLinks = links.filter({ hasText: 'comments' });
 
  // Pick the 2nd one

  await commentLinks.nth(1).click();

});
 
 