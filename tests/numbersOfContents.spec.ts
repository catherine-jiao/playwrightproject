
import { test, expect } from '@playwright/test';
//打开网址
test('openWebsite', async ({ page }) => {
    await page.goto('https://ieltsliz.com/ielts-reading-lessons-information-and-tips/ ');
    let jiaodiannline= await page.locator('//*[@id="menu-item-4244"]');
    await jiaodiannline.click();

  

    await page.waitForTimeout(5000);

  
//找到1至31的Ol
    let olPosition = await page.locator('//*[@id="content"]/div[2]/div/ol[2]');
  
    //let searchList = await page.locator('[data-testid="sharedPSPDellPrice"]').all();
    let searchList = await olPosition.locator('li').all(); 
    console.log(searchList.length);
    console.log(searchList);

    ////let searchName= await olPosition.locator('//*[@id="content"]/div[2]/div/ol[2]/li[2]/blockquote/p/strong/a').all();
   // console.log(searchName.length);
   // console.log(//*[@id="content"]/div[2]/div/ol[2]/li[1]/blockquote/p/strong/a);

      //  FOR(let i = 0; i < searchList.length; i++) {

    //*[@id="content"]/div[2]/div/ol[2]/li[1]/blockquote/p/strong/a

    for (let i = 0; i < searchList.length; i++) {
        let price = await searchList[i].innerText();
        let li = await searchList[i];
        let a = await li.locator('a');
        let acontent= await a.innerText();
        console.log(acontent);
        let link= await a.getAttribute('href');
        console.log(link);

        // let price2 = await searchList[i].innerHTML();
        // console.log(price2);

        console.log('[' + price + ']');
        console.log('************');

       console.log('');

    }

});





