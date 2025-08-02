
import { test, expect } from '@playwright/test';
//打开网址
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  //希望TAB包含Playwright
  await expect(page).toHaveTitle(/Playwright/);
});

//打开网页，PICK LOCATOR查找链接的焦点，点击链接12-20行。
////希望点击的链接后的页面，包含INSTALLATION字符。20行。
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});





test('check Gmail link', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Gmail' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: '将 Gmail 添加到您的 Google 账号' })).toBeVisible();

  await expect(page.getByText('Secure, smart, and easy to use email')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Get more done with Gmail' })).toBeVisible();
  
  //抓屏39行
  await page.screenshot({ path: 'screenshots/after_logout.png' });
  //getByRole('heading', { name: 'Get more done with Gmail' })
  
  //鼠标放上的颜色用HOVER，44行。
  await page.getByRole('banner').getByRole('link', { name: 'Create an account' }).hover();
    await page.screenshot({ path: 'screenshots/after_logout.png' });

  await page.getByRole('link', { name: 'Sign in' }).click();
 
  await expect(page.getByText('Sign in', { exact: true })).toBeVisible();


});

//增加一条记录123，把状态打勾,修改
test('add record2', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').fill('123');
  await page.waitForTimeout(2000);//等待2000秒；
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByLabel('Toggle Todo').click();

});

//删除一条记录
test('add record3', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').fill('123');
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.waitForTimeout(2000);
  await page.getByTestId('todo-title').click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Delete').click();
 
});