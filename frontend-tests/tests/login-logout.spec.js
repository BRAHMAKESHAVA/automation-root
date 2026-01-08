import { test, expect } from '@playwright/test';
import { env } from '../config/env.js';
import { LoginPage } from '../pages/LoginPage.js';

test('Login and Logout UI', async ({ page }) => {

  const login = new LoginPage(page);

  // 1. Open login page
  await page.goto(env.url);

  // 2. Login
  await login.login(env.username, env.password);

  //  3. Verify login success using DASHBOARD element
  await expect(
    page.locator('text=Add New Partner')
  ).toBeVisible({ timeout: 30000 });

  // 4. Handle logout confirm
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  // 5. Click logout (now safe)
  await page.locator('text=Logout').click();

  // 6. Wait for page to stabilize
  await page.waitForLoadState('networkidle');

  // 7. Verify login page
  await expect(page.locator('#login'))
    .toBeVisible({ timeout: 30000 });
});
