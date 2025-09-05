//import
import {test,expect} from '@playwright/test';

test('my first playwright typescript pgm',async({page})=>{
//go to url
await page.goto("https://www.google.com")
//search with keyword
await page.getByRole('combobox', { name: 'Search' }).fill("playwright by testes talk")
await page.getByRole('combobox', { name: 'Search' }).press('Enter')
await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click();
await expect(page).toHaveTitle("Playwright by Testers Talk - YouTube")
//click on playlist
})