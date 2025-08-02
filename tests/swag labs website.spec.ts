import { test, expect } from '@playwright/test';
//打开网址,断言登录成功；
test('log in sucess', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByTestId('user-name').click();
  await page.getByTestId('user-name').fill('standard_user');

  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('secret_sauce');

  await page.getByTestId('login-button').click();
  await page.waitForTimeout(2000);

  await expect(page.getByText('Products')).toBeVisible();
});

//加入购物车。
test('add to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByTestId('user-name').click();
  await page.getByTestId('user-name').fill('standard_user');

  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('secret_sauce');

  await page.getByTestId('login-button').click();
  await page.waitForTimeout(2000);

  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  await page.getByTestId('add-to-cart-sauce-labs-onesie').click();
  await page.getByTestId('add-to-cart-sauce-labs-bike-light').click();
  await page.getByTestId('add-to-cart-test.allthethings()-t-shirt-(red)').click();

  
  await page.locator('//*[@id="shopping_cart_container"]/a').click();

  //进入购物车页面
  await expect(page.getByText('Your Cart')).toBeVisible();


//遍历列表，获取价格和数量，计算总金额，输出到控制台。
  let priceList = await page.locator('[class="inventory_item_price"]').all();
  console.log(priceList.length);
  console.log(priceList);

  let quantityList = await page.locator('[class="cart_quantity"]').all();
  console.log(quantityList.length);

  //统计购物车商品总金额输出到控制台。
  let totalamount = 0;
  for (let i = 0; i < priceList.length; i++) {
    let price = await priceList[i].innerText();
    price = price.replace('$', '');
    let quantity = await quantityList[i].innerText();
    totalamount += parseFloat(price) * parseInt(quantity);
  }
console.log('********************');

  console.log(totalamount);

  console.log('********************');

    //统计购物车商品数量输出到控制台。
    let quantity=0;
    for (let i = 0; i < quantityList.length; i++) {
      let eachquantity = await quantityList[i].innerText();
      quantity += parseInt(eachquantity);
    }
    console.log();
    console.log();
    console.log('&&&&&&&&&&&&&&&');
    console.log(quantity);
    console.log('&&&&&&&&&&&&&&&');

  let jiner1 = await page.locator('//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[2]/div').innerText();
  jiner1 = jiner1.replace('$', ''); // Remove $ from jiner1
  console.log(jiner1);

  let jiner2 = await page.locator('//*[@id="cart_contents_container"]/div/div[1]/div[4]/div[2]/div[2]/div').innerText();
  jiner2 = jiner2.replace('$', '');
  console.log(jiner2);

  let jiner3 = await page.locator('//*[@id="cart_contents_container"]/div/div[1]/div[5]/div[2]/div[2]/div').innerText();
  jiner3 = jiner3.replace('$', '');
  console.log(jiner3);
  let sumjiner6 = (jiner1) + (jiner2) + (jiner3);
  console.log(sumjiner6);

  let sumjiner = parsefloat(jiner1) + parsefloat(jiner2) + parse(jiner3);
  console.log(sumjiner);
});


