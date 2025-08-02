import { test, expect } from '@playwright/test';
//打开网址
test('found', async ({ page }) => {

  await page.goto('https://www.celpip.ca/');
  await page.waitForTimeout(3_000);

//   await page.getByTestId('filter-region')
  await page.getByTestId('filter-region').selectOption('Beijing');


  await page.waitForTimeout(6_000);


  });