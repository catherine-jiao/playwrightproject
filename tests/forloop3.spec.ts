import { test, expect } from '@playwright/test';
//打开网址
test('forloop3', async ({ page }) => {

await page.goto('https://www.saucedemo.com/v1/inventory.html');
const classname = await page.locator('.inventory_item_name');
const count = await classname.count();
console.log(count);
for(let i=0; i<count; i++)
{
    const name= await classname.nth(i).innerText();
    console.log(name);

}
  

  });