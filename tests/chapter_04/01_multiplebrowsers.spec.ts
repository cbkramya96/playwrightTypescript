import { test, expect } from '@playwright/test';

test('multiple browsers in playwright', async ({ page,browser }) => {
    
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Login' })).toHaveText("Login");

  const context2=await browser.newContext();
  const page2=await context2.newPage();

  await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page2.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await expect(page2.getByRole('heading', { name: 'Login' })).toHaveText("Login");
});

