import { test, expect } from '@playwright/test';


test.beforeEach(async({page})=>{
    console.log("runing before each test case..")
      //go to url
      await page.goto('https://jqueryui.com/datepicker/')
      ///await page.waitForTimeout(1000)
})

test('Date Picker in playwright', async ({ page }) => {
   const iframe=page.frameLocator('[class="demo-frame"]');

   //Hardcoded date
//    await iframe.locator("//html[1]/body[1]/p[1]/input[1]").fill('07/16/2025')
   
   //selecting date dynamically
      await iframe.locator('id="datepicker"').click();
      await iframe.locator('.ui-iframe-today').click();

//selecting past date
     // await iframe.locator("//html[1]/body[1]/p[1]/input[1]").click();
//await iframe.locator('[title="Prev"]').click();
// await iframe.locator('text="15"').click();

});

