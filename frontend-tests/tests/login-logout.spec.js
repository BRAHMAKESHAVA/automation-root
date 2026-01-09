import { test, expect } from '@playwright/test';
import { env } from '../config/env';

test.describe('@smoke @frontend', () => {
test('Valid login', async ({ page }) => {
  await page.goto(env.url);

  await page.fill(env.usernameSelector, env.username);
  await page.fill(env.passwordSelector, env.password);
  await page.click(env.loginButtonSelector);

  // wait for SPA network calls
  await page.waitForLoadState('networkidle');

  // ✅ strongest assertion for your app
  await expect(page.locator(env.loginButtonSelector)).toBeHidden();

  // OR (optional extra check)
  await expect(page.locator('nav')).toBeVisible();
});


});

test.describe('@regression @frontend', () => {
test('Invalid login', async ({ page }) => {
  await page.goto(env.url);

  await page.fill(env.usernameSelector, 'wronguser');
  await page.fill(env.passwordSelector, 'wrongpass');
  await page.click(env.loginButtonSelector);

  // ✅ wait for response
  await page.waitForTimeout(2000);

  // ✅ still on login page
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

});
