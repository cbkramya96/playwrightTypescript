import {test,expect} from '@playwright/test';

test('locators in playwright',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//await page.goto('https://www.google.com/')

//page.waitForTimeout(9000);
//getbyrole
//await page.getByRole('button',{name:'Login'}).click();

//getbylabel
//getbyalttext
//await page.getByAltText('company-branding').click();

//await page.getByText('Login').nth(1).click();

//getbyplaceholder
//await page.getByPlaceholder('Username').fill('ramya');

//getbyxpath
//await page.locator("input[placeholder='Username']").fill('ramya')

//getbytitle
await expect(page.getByTitle('OrangeHRM')).toBeVisible();;

})