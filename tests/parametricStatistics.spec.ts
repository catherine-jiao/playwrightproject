import { test, expect } from '@playwright/test';
//打开网址
test('OpenAmazon', async ({ page }) => {
    await page.goto('https://www.amazon.ca/ ');
    let searchWord = process.env.input || 'VR';
    await page.getByTestId('twotabsearchtextbox').fill(searchWord);

    
    await page.getByTestId('nav-search-submit-button').click();
    await page.waitForTimeout(5000);

    //遍历搜索列表长度

    let searchList = await page.locator('[class="a-offscreen"]').all();

    console.log(searchList.length);
    console.log(searchList);
    let i = 0;
    let finalprice = 0;
    for (i = 0; i < searchList.length; i++) {
        let price = await searchList[i].innerText();
        price = price.replace('$', '');
        let parseprice = parseFloat(price);
        console.log(parseprice);
        finalprice += parseprice;
        console.log(finalprice);



    }



    //遍历页数   class="s-pagination-item s-pagination-selected" 第一页
    //class="s-pagination-item s-pagination-selected" 第七页
    //  next 按钮  class="s-pagination-item s-pagination-next s-pagination-button s-pagination-separator"
    //  class="s-pagination-item s-pagination-button"

    let searchpage = await page.locator('[class="s-pagination-item s-pagination-next s-pagination-button s-pagination-separator"]').all();

    console.log(searchpage.length);







});