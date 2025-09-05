import { test, expect } from '@playwright/test';


test.beforeEach(async({page})=>{
    console.log("runing before each test case..")
      //go to url
      await page.goto('https://jqueryui.com/droppable/')
})

test('Handling iFrames,drag and drop elements in playwright', async ({ page }) => {
 const iframe=page.frameLocator('[class="demo-frame"]')
  const dragElement= iframe.locator('[id="draggable"]')
  const dropElement= iframe.locator("//div[@id='droppable']")

 await dragElement.dragTo(dropElement);

});

