import { test, expect } from '@playwright/test';


test.beforeEach(async({page})=>{
    console.log("runing before each test case..")
      //go to url
      await page.goto('https://www.youtube.com/')
      
})

test('Asserations in playwright', async ({ page }) => {
    //visible,editable,enabled,empty
   //await expect(page.getByPlaceholder("Search",{exact:true}).first()).toBeVisible();

      await expect(page.getByPlaceholder("Search",{exact:true}).first()).toBeEditable();
      await expect(page.getByPlaceholder("Search",{exact:true}).first()).toBeEnabled();
      await expect(page.getByPlaceholder("Search",{exact:true}).first()).toBeEmpty();

      //verify url,title,text,count
            await page.getByPlaceholder("Search",{exact:true}).first().click();
            await page.getByPlaceholder("Search",{exact:true}).first().fill("Playwright by testers talk");
            await page.getByPlaceholder("Search",{exact:true}).first().press("Enter");
            await expect(page).toHaveURL("https://www.youtube.com/results?search_query=Playwright+by+testers+talk  ");

expect(page).toHaveTitle("Playwright by testers talk - YouTube")
await expect(page.locator('span[id="title"]').first()).toHaveText("People also watched")
await expect(page.locator('span[id="title"]')).toHaveCount(1);

});

