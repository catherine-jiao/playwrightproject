import { test, expect } from '@playwright/test';


  test(`example test`, async ({ page }) => {
    // ...
    await page.goto('https://passport.baidu.com/v2/?reg&tt=1753208216876&overseas=undefined&gid=2EC8238-4D90-4C19-8732-06D06F2CEEBB&tpl=mn&u=https%3A%2F%2Fwww.baidu.com%2F');
    await page.waitForTimeout(5000);
    await page.getByTestId('TANGRAM__PSP_4__userName').click();
    await page.getByTestId('TANGRAM__PSP_4__userName').fill(process.env.USER_NAME);
    await page.getByTestId('TANGRAM__PSP_4__phone').click();
    await page.getByTestId('TANGRAM__PSP_4__userName').fill(process.env.phone);
    await page.getByTestId('TANGRAM__PSP_4__password').fill(process.env.password);
    await page.getByTestId('TANGRAM__PSP_4__isAgreeWrapper').click();
    await page.getByTestId('TANGRAM__PSP_4__submit').click();

    

  });

