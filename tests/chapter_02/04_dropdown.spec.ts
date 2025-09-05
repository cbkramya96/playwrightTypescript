import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  console.log("runing before each test case..");
  //go to url
  await page.goto("https://www.facebook.com/");
});

test("Handling dropdown list in playwright", async ({ page }) => {
  await page.getByRole("button", { name: "Create new account" }).click();

  //select dropdown using value
  await page.locator("//select[@id='month']").selectOption("3");

  //select using visible text
  await page.locator("//select[@id='month']").selectOption("Jun");

  //select using visible text
  const monthOptions = page.locator("//select[@id='month']/option");
  await expect(monthOptions).toHaveText([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);
});
