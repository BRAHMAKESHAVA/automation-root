import { test, expect } from '@playwright/test';

test('Dummy Login Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  // Verify successful login
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

  // Verify logout button exists
  await expect(page.locator('a[href="/logout"]')).toBeVisible();

  // Logout
  await page.click('a[href="/logout"]');

  // Verify back to login page
  await expect(page.locator('#username')).toBeVisible();
});
