import { test, expect } from '@playwright/test';
//打开网址
test('found', async ({ page }) => {
    await page.goto('https://ielts.org/test-centres');

    await page.waitForTimeout(1_000);
    //accept all cookies
    await page.getByTestId('onetrust-accept-btn-handler').click();
    await page.waitForTimeout(1_000);

    await page.locator('//*[@id="navbar"]/div/div/div/div/nav/div[2]/div/div/div[1]/button').click();
    await expect(page.getByText('Need help finding something? Enter a search term below')).toBeVisible();
    await page.waitForTimeout(5_000);

    await page.getByTestId('navigation-search-dropdown-input').click();
    await page.getByTestId('navigation-search-dropdown-input').fill('abc');
    await page.locator('//*[@id="search__dropdown"]/div/div/div/div/div[2]/form/div/div[1]/input').click();
    await expect(page.getByText('results for ')).toBeVisible();

    await page.waitForTimeout(2_000);
    // count search results
    //const result = await page.getByTestId('results__list-item-link');
    const result = await page.locator('.results__list-item-link');

    const totalresult = await result.count();
    console.log ('total result is');
    console.log(totalresult);

    //click every results
    const searchResultLinks = await page.locator('//*[@id="content-main"]/div/div[1]/div/div/div/div[2]/div/ul/li[1]/a');

    for(let i=0;i<totalresult;i++)
   {
       //await page.locator('.results__list-item-link').click(i);
       //const link = totalresult.nth(i);
       const link = result.nth(i);
       await link.click();
       await page.waitForTimeout(5000);
       await page.goBack();
     await page.waitForTimeout(3000);

   }

});