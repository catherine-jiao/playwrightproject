import { test, expect } from '@playwright/test';
test('automatic update', async ({ page }) => {
    //初始值是LINE, 如果不等于这个值就是更新了
    let line = 'Updated: August 13, 2024';
    await page.goto('https://www.ontario.ca/page/2024-ontario-immigrant-nominee-program-updates');
    //找到更新时间的标签，结点
    let linesave = await page.locator('//*[@id="block-mainpagecontent"]/article/div[4]/div/div[1]/small');
    let linefill = await linesave.innerText();
    if (line == linefill) {
        console.log("not update");}
    else {
            console.log("update");
        }
        //let butomline = await page.locator('//*[@id="block-mainpagecontent"]/article/div[4]/div/div[2]/small');
        //let butomfill = await butomline.innerText();
       // console.log(butomfill);
    });