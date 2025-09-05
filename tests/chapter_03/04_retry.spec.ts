import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
    console.log("runing before each test case..")
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})

test.describe('smokeTesting',()=>{
test('test case---1', async ({ page }) => {
    console.log("test-1 execution started")
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Login' })).toHaveText("Login");
});
})

test.describe('regressionTesting',()=>{
test('test case---2', async ({ page }) => {
    console.log("test-2 execution started")
  await expect(page.locator("//button[normalize-space()='Login']")).toBeVisible();
  await expect(page.locator("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']")).toHaveText("Forgot your password??");
});

test('test case---3', async ({ page }) => {
    console.log("test-2 execution started")
        console.log("retry test cases---")
  await expect(page.locator("//p[normalize-space()='OrangeHRM OS 5.7']")).toBeVisible();
  await expect(page.locator("//p[normalize-space()='OrangeHRM OS 5.7']")).toHaveText("OrangeHRM OS 5.7");
});
})

