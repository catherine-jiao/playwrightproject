import { test, expect } from '@playwright/test';


test('display Please enter a valid email address', async ({ page }) => {
  await page.goto('https://www.zoho.com/crm/free-crm.html');

  await page.waitForTimeout(3000);
  await page.getByTestId('namefield').click();
  await page.getByTestId('namefield').fill('MARYJIAO');
  await page.getByRole('button', { name: 'GET STARTED' }).click();
  await expect(page.getByText('Please enter a valid email address')).toBeVisible();

});



test('Password cannot be less than 8 characters', async ({ page }) => {
  await page.goto('https://www.zoho.com/crm/free-crm.html');

  await page.waitForTimeout(3000);
  await page.getByTestId('namefield').click();
  await page.getByTestId('namefield').fill('MARYJIAO');

  await page.getByTestId('email').click();
  await page.getByPlaceholder('Email').click();
  await page.getByTestId('email').fill('jyj@shbjkj.com');

  await page.getByRole('button', { name: 'GET STARTED' }).click();
  await expect(page.getByText('Password cannot be less than 8 characters')).toBeVisible();

});


test('Please read and accept the Terms of Service and Privacy Policy', async ({ page }) => {
  await page.goto('https://www.zoho.com/crm/free-crm.html');

  await page.waitForTimeout(3000);
  await page.getByTestId('namefield').click();
  await page.getByTestId('namefield').fill('MARYJIAO');

  await page.getByTestId('email').click();
  await page.getByPlaceholder('Email').click();
  await page.getByTestId('email').fill('jyj@shbjkj.com');

  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('70pcana@da9');
  
  await page.getByTestId('rmobile').click();
  await page.getByTestId('rmobile').fill('5488807983');

  
  await page.getByRole('button', { name: 'GET STARTED' }).click();
  await expect(page.getByText('Please read and accept the Terms of Service and Privacy Policy')).toBeVisible();

});


test('submit sucess', async ({ page }) => {
  await page.goto('https://www.zoho.com/crm/free-crm.html');

  await page.waitForTimeout(3000);
  await page.getByTestId('namefield').click();
  await page.getByTestId('namefield').fill('MARYJIAO');
  await page.waitForTimeout(1000);

  await page.getByTestId('email').click();
  await page.getByPlaceholder('Email').click();
  await page.getByTestId('email').fill('jy4j@shbjkj.com');
  await page.waitForTimeout(1000);

  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('70pcana@da9');
  await page.waitForTimeout(1000);
  await page.getByTestId('otp_country_code').selectOption('CN');

  //element.selectOption('blue');
  
  await page.getByTestId('rmobile').click();
  await page.getByTestId('rmobile').fill('15311456789');
  await page.waitForTimeout(1000);

  await page.getByTestId('signup-termservice').click();
  await page.waitForTimeout(1000);
  await page.getByTestId('signup-termservice').check();
  await page.getByText('Built for small teams with big dreams!').click();
  await page.waitForTimeout(3000);

 

  let buttonSignup = await page.getByTestId('signupbtn');
  console.log(await buttonSignup.isEnabled());
  console.log(await buttonSignup.isVisible());
  console.log(await buttonSignup.getAttribute("onClick"));

  await buttonSignup.click();
  // //await page.getByTestId('signupbtn').click();
  // await page.waitForTimeout(3000);

  // await page.getByTestId('signupbtn').click();
 

});
//请阅读并接受服务条款和隐私政策

//<input data-zcqa="home-sgnp-getstarted" class="signupbtn btn" id="signupbtn" onclick=" return zSignupPrevent();" type="submit" value="Get started" style="opacity: 1;">
//<input data-zcqa="home-sgnp-password" class="sgnpaswrd" name="password" placeholder="Password" type="password" aria-label="Enter password for your account" aria-autocomplete="list" aria-describedby="password-error" aria-invalid="true">
//<input id="rmobile" data-zcqa="sgnp-mob-number" name="rmobile" placeholder="Phone" spellcheck="false" type="text" aria-label="Enter your phone number" aria-describedby="rmobile-error" aria-invalid="true" class="">
//<span id="signup-termservice" class="checked"></span>


////otp_country_code
