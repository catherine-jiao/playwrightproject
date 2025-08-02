import { test, expect } from '@playwright/test';
//打开网址
test('found', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.goto('https://www.saucedemo.com/v1/inventory.html');
  await page.waitForTimeout(6000);
  

  });



  //把字符串转换为数字型
  //let str1 = "123";
  //let num1 = parseInt(str1); // num1 等于 123
  // let num2 = parseFloat(str1); // num2 等于 123



  //把$替换为空的javascript
  //let str = "This is a string with $dollar$ signs.";
 // let newStr = str.replace(/\$/g, "");
// console.log(newStr); // 输出: This is a string with  signs.



// 以下是把第i个finprice里的内容取出来。
//for (let i = 0; i < pricetotal; i++) {
  // const price = await findprice.nth(i).innerText();


  // 取价格一样的，用点表示class 
  //const findprice = await page.locator('.inventory_item_price');