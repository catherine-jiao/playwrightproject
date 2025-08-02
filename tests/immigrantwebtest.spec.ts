import { test, expect } from '@playwright/test';

test('check if update', async ({ page }) => {
  // 打开页面
  await page.goto('https://www.ontario.ca/page/2024-ontario-immigrant-nominee-program-updates');

  await page.waitForTimeout(3000);
  //找到结点
  //let updateTimeNode = await page.getByText('Updated: July 25, 2024');
  let updateTimeNode = await page.locator('//*[@id="block-mainpagecontent"]/article/div[4]/div/div[1]/small');
  //   //*[@id="block-mainpagecontent"]/article/div[4]/div/div[1]/small
  //取出节点内容
  let updateTime = await updateTimeNode.innerText();

  //输出和判断
  console.log(updateTime);
  if (updateTime == ('Updated: July 25, 2024')) {
    console.log('did not updated yet')
    
  } else {
    console.log('updated')
    // play audio or sendmail
  }
})