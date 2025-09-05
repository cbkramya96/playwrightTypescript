import {test,expect} from '@playwright/test';

test('Page Testing in playwright',async({page})=>{
await page.goto('https://github.com/login')
await expect(page).toHaveScreenshot('githubLoginPageScreenshot.png')
await page.locator("//input[@id='login_field']").fill("Playwright By Testers Talk")
await expect(page).toHaveScreenshot('githubLoginPageScreenshot.png')

})

test('Element Testing  in playwright',async({page})=>{
await page.goto('https://github.com/login')
await expect(page).toHaveScreenshot('githubLoginPageScreenshotForElementTesting.png')

const element=page.locator("//body/div[@class='logged-out env-production page-responsive session-authentication']/div[contains(@class,'application-main')]/main/div[contains(@class,'authentication')]/div[@class='authentication-body authentication-body--with-form new-session']/form[1]")
await expect(page).toHaveScreenshot('githubLoginPageScreenshotForElementTesting.png')

await page.locator("//input[@id='login_field']").fill("Playwright By Testers Talk")
//await expect(page).toHaveScreenshot('githubLoginPageScreenshot.png')

})