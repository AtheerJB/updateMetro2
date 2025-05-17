// tests/login-modal.spec.js
const { test, expect } = require('@playwright/test');

test('login/signup modal workflow', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');

  // Open login modal
  await page.click('#loginBtn');
  await expect(page.locator('#authModal')).toBeVisible();

  // Switch to signup form
  await page.click('#signupLink'); // only if this exists
  await expect(page.locator('#signupForm')).toBeVisible();

  // Fill and submit signup
  await page.fill('#newUsername', 'Atheer');
  await page.fill('#newEmail', 'test@example.com');
  await page.fill('#newPassword', '1234');
  await page.fill('#newPhoneNumber', '0500000000');
  await page.click('#signupButton'); // make sure this ID is in your HTML

  // Go back to login
  await page.click('#loginLink'); // only if this exists
  await page.fill('#email', 'test@example.com');
  await page.fill('#password', '1234');
  await page.click('#loginButton'); // make sure this ID is in your HTML
});
