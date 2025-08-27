import { test, expect } from '@playwright/test';

test('filter by inner element', async ({ page }) => {

  await page.goto('https://playwright.dev/');
 
  // All "Get started" links exist in multiple cards

  const allCards = page.locator('.getStarted_Sjon');
 
  // Filter the card that has the link "Docs"

  const docsCard = allCards.filter({ has: page.getByRole('link', { name: 'Docs' }) });
 
  await docsCard.click(); // click inside the right card

});

 