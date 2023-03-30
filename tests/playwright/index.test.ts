import { expect, test } from '@playwright/test';

test('index page has body element', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1')).toBe('Christian');
});
