import { test, expect } from '@playwright/test';
//打开网址
test('checkbox', async ({ page }) => {
  await page.goto('https://www.limesurvey.org/zh/template/event-experience-survey-tpl');

  await page.waitForTimeout(15000);
  const classname = await page.locator('.form-check-input');
   const count = await classname.count();
   console.log(count);

  for(let i=0;i<count;i++)
  {
    await classname.nth(i).check();

  }
  
  await page.waitForTimeout(50000);

  });