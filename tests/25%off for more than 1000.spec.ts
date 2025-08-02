import { test, expect } from '@playwright/test';

//打开网址
test('open the website', async ({ page }) => {
    
    await page.goto('http://www.dell.com');
    await page.getByTestId('mh-search-input').fill('java');

    await page.locator('//*[@id="unified-masthead"]/div[1]/div[1]/div[2]/div[1]/button[2]').click();
    
    await page.waitForTimeout(5000);
    //遍历一共有几个sharedPSPDellPrice
    let searchList = await page.locator('[data-testid="sharedPSPDellPrice"]').all();

    console.log(searchList.length);
    console.log(searchList);

    //遍历列表，获取价格和数量，计算总金额，输出到控制台。
    let totalamount = 0;
    let beforeFinal1Price = 0;
    let beforeFinal2Price = 0;

    for (let i = 0; i < searchList.length; i++) {
        let price = await searchList[i].innerText();

        console.log('[' + price + ']');
        console.log('************');
        price = price.replace('$', '');
        price = price.replace('CAD', '');
        price = price.replace(',', '');
        console.log('__________');
        console.log('[' + price + ']');
        let floatPrice = parseFloat(price);

        if (floatPrice > 1000) {
            let a=40;
            floatPrice = floatPrice * 0.75;
        }
        else {
            floatPrice = floatPrice;
        }

        totalamount += floatPrice




    }
    //这行比较重要；
     totalamount=totalamount/2;
    console.log(totalamount);


    console.log('####################'); 
    let line = 'Showing 1 - 3 of 3 results for java';
    console.log('[' + line + ']');
    let line2 = 'Showing 1 - 11 of 11 results for xxxx           ';
    console.log('[' + line2 + ']');



});








