import { test, expect } from '@playwright/test';

test('averagereponsetime', async ({ page }) => {
    let defaultvalue = 80;

    await page.goto( process.env.ldinkadress);
     // process.env.USER_NAME
    let arrowART = await page.locator('//*[@id="customers"]/tbody/tr[1]/td/b');
    let valueART = await arrowART.innerText();
    valueART = valueART.replace(/[^0-9|^.]/ig, "");


    // 只要不是数字是0--9的就去掉。
   // asyvalue = asyvalue.replace(/[^0-9]/ig, "");
   //保存点
//valueART = valueART.replace(/[^0-9|^.]/ig, "");
    let intvalueART = Number(valueART);
     console.log(intvalueART);

    if (intvalueART <= defaultvalue) {
        console.log('pass');

    }
    else {
        console.log('fail');

    }

});



