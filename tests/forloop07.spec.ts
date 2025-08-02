import { test, expect } from '@playwright/test';
//打开网址
test('forloop', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/inventory.html');

  //点inventory_item_name，必须有点, 数数是count，不是account;
 //找到有几个分类,用locator找到分类
 const classname= await page.locator('.inventory_item_name');
 //数一下分类一共有几个
 const count= await classname.count();
 //输出 数量
 console.log(count);
 let namesure =false; //判断一条数据是否在显示的列表内
 for(let i=0; i<count;i++)
 {//按条输出名字一条命令就可以
   const name= await classname.nth(i).innerText();
   console.log(name);
   if(name.trim()=='Sauce Labs Bike Light')//判断一条数据是否在显示的列表内；

    namesure=true;//判断一条数据是否在显示的列表内；
 }


 //查看名字Sauce Labs Bike Light在显示列表中


// console.log("@@@@@@@@********************************");
//   const classname2 = await page.locator('.inventory_item_name').all();
//   console.log(classname2);
//   const count2 = await classname2.length;
//   console.log(count2);
//   let j=0;
//   for (j = 0; j < count; j++) {
//     const name = await classname[i].innerText();
//     console.log(name);

//   }

});
