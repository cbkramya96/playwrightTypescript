import { test, expect } from '@playwright/test';

test('screenshot test case', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  //element screenshot
  await page.locator("//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]").screenshot({path:'./screenshots/elements.png'})
  //page screenshot
  await page.screenshot({path:'./screenshots/pagescreenshot.png'});
  //full page screenshoot 
  await page.screenshot({path:'./screenshots/fullpagescreenshot.png',fullPage:true});


});