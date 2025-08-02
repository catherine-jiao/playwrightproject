import { test, expect } from '@playwright/test';
test('open  sign up website', async ({ page }) => {
    await page.goto('https://obsidian.md/account#signup');
    await expect(page.getByRole('button', { name: 'Sign up' })).toBeVisible();
  });

  test('fist sign up', async ({ page }) => {
    await page.goto('https://obsidian.md/account#signup');
    await expect(page.getByRole('button', { name: 'Sign up' })).toBeVisible();
    await page.getByTestId('labeled-input-name').click();
    await page.getByTestId('labeled-input-name').fill('Maryjyj');
    const d= new Date();
    let time = d.getTime();

    await page.getByTestId('labeled-input-email').fill('jyj'+time+'@shbjkj.com');
    await page.getByTestId('labeled-input-password').fill('jyjshbjkj@ubsa');
    await page.screenshot({ path: 'jyjphoto/screenshot.png' });
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Sign up' }).click();

    
  });

  //const d = new Date();
//let time = d.getTime();

//await page.getByRole('button', { name: 'GET STARTED' }).click();
  //<input class="block input w-full" type="text" id="labeled-input-name">
  //<input class="block input w-full" type="email" id="labeled-input-email">
  //<input class="block input w-full" type="password" id="labeled-input-password" aria-autocomplete="list">
  //<button class="button button-primary w-full">Sign up</button>

  //await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();