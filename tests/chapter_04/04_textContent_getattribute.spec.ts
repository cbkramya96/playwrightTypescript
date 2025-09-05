import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  console.log("runing before each test case..");
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

test.describe("getText and getAttribute value in playwright", () => {
  test("test case---1", async ({ page }) => {
    console.log("test-1 execution started");
    const name = await page.locator("//h5[normalize-space()='Login']").textContent();
    const finalName=name?.trim();
    expect(finalName).toBe("Login")
    console.log(`name is, ${name}`);
    console.log(`name is, ${finalName}`);

    await page.getByPlaceholder("Username");
  });
});
