import { test, expect } from '@playwright/test';

test.beforeAll(async()=>{
console.log("running before all test cases.....")
})

test.beforeEach(async({page})=>{
    console.log("runing before each test case..")
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})

test.afterEach(async()=>{
    console.log("runing after each test case..")
    console.log("itsended")
})

test.afterAll(async()=>{
    console.log("running after all test cases")
})



test('Hooks test case---1', async ({ page }) => {
    console.log("test-1 execution started")
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Login' })).toHaveText("Login");
});

test('Hooks test case---2', async ({ page }) => {
    console.log("test-2 execution started")
 // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.locator("//button[normalize-space()='Login']")).toBeVisible();
  await expect(page.locator("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']")).toHaveText("Forgot your password?");
});