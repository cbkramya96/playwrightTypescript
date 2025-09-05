import { test, expect } from '@playwright/test';


test.beforeEach(async({page})=>{
    console.log("runing before each test case..")
      //go to url
      await page.goto('https://www.google.com/')
})

test('Keyboard Actions in playwright', async ({ page }) => {
    //enter actions from keyboard
    // await page.getByLabel('Search',{exact:true}).first().click();
    // await page.getByLabel('Search',{exact:true}).first().fill('playwright tutorial');
    // await page.getByLabel('Search',{exact:true}).first().press('Enter');

    //selecting & deleting from keyboard
    //     await page.getByLabel('Search',{exact:true}).first().click();
    // await page.keyboard.press('Meta+A');
    //     await page.keyboard.press('Delete');

    //press tab and Enter
     await page.getByLabel('Search',{exact:true}).first().click();
     await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    

});

