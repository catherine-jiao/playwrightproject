import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  // Expect a title "to contain" a substring.
  //希望TAB包含Playwright
  await expect(page).toHaveTitle(/TodoMVC/);
});
//获得焦点，增加一条记录

test('add record', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').fill('abc');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
});

//增加一条记录123，把状态打勾
  test('add record2', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').fill('123');
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByLabel('Toggle Todo').click();

});

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


test('search ', async ({ page }) => {
  await page.goto('https://www.youtube.com/@sxh/featured');

  await page.getByRole('tab', { name: 'Search' }).locator('#button').click();
  await page.locator('input[name="query"]').fill('美');
  await page.locator('input[name="query"]').press('Enter');
  
  await page.screenshot({ path: 'screenshots/searchresult美.png' });
});