import { test, expect } from '@playwright/test';

//alert
test('Handling alerts popups in playwright', async ({ page,browser }) => {
    
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
 
   page.once('dialog',dialog=>{
    console.log(`dialog type:${dialog.type()}`)
    dialog.accept();
    console.log(`Alert message is:${dialog.message()}`)
    
  })

  await page.locator("//a[normalize-space()='See an example alert']").click();
});

//confirm
test('Handling confirm popups in playwright', async ({ page,browser }) => {
    
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
 
   page.once('dialog',dialog=>{
    console.log(`dialog type:${dialog.type()}`)
    dialog.dismiss();
    console.log(`Alert message is:${dialog.message()}`)
  })

  await page.locator(`//a[@onclick='window.confirm("Are you sure?")']`).click();
 });

 //prompts
test('Handling prompts in playwright', async ({ page,browser }) => {
    
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
 
   page.once('dialog',dialog=>{
    console.log(`dialog type:${dialog.type()}`)
    console.log(`Alert message is:${dialog.message()}`)
    dialog.accept('playwright');
  })

  await page.locator(`//a[normalize-space()='See a sample prompt']`).click();
});

