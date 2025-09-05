import { test, expect } from '@playwright/test';


test.beforeEach(async({page})=>{
    console.log("runing before each test case..")
      //go to url
      await page.goto('https://www.google.com/search?q=playwright+by+testers+talk')
})

test('Mouse actions in playwright', async ({ page }) => {
    //left button click
 //await page.getByRole('link',{name:'Playwright by testers talk'}).first().click({button:"left"})

 //middle button click
 // await page.getByRole('link',{name:'Playwright by testers talk'}).first().click({button:"middle"})

  //right button click
    //await page.getByRole('link',{name:'Playwright by testers talk'}).first().click({button:"right"})
//await page.waitForTimeout(2000);

//mouse hover
await page.getByLabel("Search by voice").hover();

//double click
await page.getByLabel("Search by voice").dblclick();

});

