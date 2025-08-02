import { test, expect } from '@playwright/test';
//打开网址
test('found', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/inventory.html');
    const findprice = await page.locator('.inventory_item_price');
    const pricetotal = await findprice.count();

    console.log(pricetotal);
    let sumprice = 0;
    for (let i = 0; i < pricetotal; i++) {
        const price = await findprice.nth(i).innerText();
        // console.log(price);

        //把$转换为空
        let newStr = price.replace(/\$/g, "");
        console.log(newStr);
        console.log('[' + newStr + ']');// 

        //把价格转换为浮点型
        let str1 = newStr;
        //let num1 = parseInt(str1); // num1 等于 123
        let num2 = parseFloat(str1); // num2 等于 123

        sumprice = sumprice + num2;


    }
    console.log('总价格是：');
    console.log(sumprice);
});



