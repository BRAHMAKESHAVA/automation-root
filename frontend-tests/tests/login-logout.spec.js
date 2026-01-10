import { test, expect } from '@playwright/test';
import { env } from '../config/env.js';
import { LoginPage } from '../pages/LoginPage.js';

test('Login and Logout UI', async ({ page }) => {

  const login = new LoginPage(page);

  // 1. Open login page
  await page.goto(env.url);

  // 2. Login
  await login.login(env.username, env.password);

  // Debug screenshot
  await page.screenshot({ path: 'test-results/before-dashboard-check.png', fullPage: true });

  // Wait until network is idle
  await page.waitForLoadState('networkidle');

  // 3. Verify login success
  await expect(
    page.getByRole('button', { name: 'Add New Partner' })
  ).toBeVisible({ timeout: 30000 });

  // 4. Handle logout confirm
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  // 5. Click logout
  await page.locator('text=Logout').click();

  // 6. Wait for page to stabilize
  await page.waitForLoadState('networkidle');

  // 7. Verify login page
  await expect(
    page.locator('#login')
  ).toBeVisible({ timeout: 30000 });
});
