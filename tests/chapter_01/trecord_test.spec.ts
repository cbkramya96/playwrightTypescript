import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('cbkramya96@gmail.com');
  await page.getByTestId('royal-login-button').click();
  await page.goto('https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzUxNDE5MTExLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&next');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('#content').click();
  await page.getByRole('textbox', { name: 'Email address or phone number' }).click();
  await page.locator('div').filter({ hasText: 'Log in to FacebookThe' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Email address or phone number' }).fill('kcramya123@gmail.com');
  await page.getByRole('button', { name: 'Log in' }).click();
});