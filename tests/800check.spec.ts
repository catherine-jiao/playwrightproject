import { test, expect } from '@playwright/test';

test('check if it is greater than 800 ', async ({ page }) => {
    let defaultcountvalue = 800;
    await page.goto('https://fastthread.io/my-thread-report.jsp?p=YXJjaGl2ZWQvMjAyNC8wNy8zMS92aHljczIudHMubWl0cmEuY29tLS0xNy0xMS0yNA==&channel=API');
    let asyvaluearrow = await page.locator('//*[@id="page-wrapper"]/div[1]/div[4]/div[2]/span/p');

    let asyvalue = await asyvaluearrow.innerText();

    console.log('[' + asyvalue + ']');
    // 只要不是数字是0--9的就去掉。
    asyvalue = asyvalue.replace(/[^0-9]/ig, "");
    //把asyvalue变成变量。
    let intValue = Number(asyvalue);
    console.log('************************');
    console.log('[' + intValue + ']');
    console.log(intValue);
    if (intValue <= defaultcountvalue) { 
        console.log('Pass'); 
    }
    else { 
        console.log('fail'); 
    }
    console.log(500);

    var text = "abc123";
    text = text.replace(/[^0-9]/ig, "");
    console.log(text);
});