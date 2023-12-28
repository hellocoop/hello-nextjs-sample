import { test, expect } from '@playwright/test';

test('Login and update with Hellō', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('button', { name: 'ō Continue with Hellō' })).toBeVisible();
  await page.getByRole('button', { name: 'ō Continue with Hellō' }).click();
  await expect(page.getByRole('main')).toContainText('John Smith');
  await page.getByRole('button', { name: 'John Smith john.smith@example' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
//   await expect(page.locator('section')).toContainText('John Smith');
  await page.getByRole('button', { name: 'ō Update Email with Hellō' }).click();
  await page.getByRole('heading', { name: 'john.smith@example.com' }).click();
//   await expect(page.locator('section')).toContainText('john.smith@example.com');
  await page.getByRole('button', { name: 'John Smith john.smith@example' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
});