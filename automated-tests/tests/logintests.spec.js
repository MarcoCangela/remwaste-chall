import { test, expect } from '@playwright/test';


const defaultPage = 'http://localhost:3000/';

test('Successful Login with Valid Credentials', async ({ page }) => {
  await page.goto(defaultPage);
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('email@test.com');
  await page.getByRole('textbox', { name: 'Email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('12312341234');
  await page.getByRole('button', { name: 'Login' }).click();
});

test('Invalid Credentials', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('email@email.com');
  await page.getByRole('textbox', { name: 'Email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('12341');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('text=Password must be at least 6')).toBeVisible();
});
