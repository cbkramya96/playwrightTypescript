//import
import {test,expect} from '@playwright/test';

const searchKeywords=['Playwright by Testers Talk','Cypress by Testers Talk','API Testing by Testers Talk']
for (const searchKeyword of searchKeywords){
test(`parameterized tests in playwright ${searchKeyword}`,async({page})=>{
//go to url
await page.goto("https://www.google.com")
//search with keyword
await page.getByRole('combobox', { name: 'Search' }).fill(searchKeyword)
await page.getByRole('combobox', { name: 'Search' }).press('Enter')
await page.getByRole('link', { name: searchKeyword }).click();
await expect(page).toHaveTitle(searchKeyword+' - YouTube')
//click on playlist
})
}