import { test, expect } from '@playwright/test';

test('Sample Playwright Test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
