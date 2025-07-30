import { test, expect } from '@playwright/test';


test('Add a task', async ({ page }) => {
  await page.goto('http://localhost:3000/home');
  await page.getByRole('textbox', { name: 'What is the task today?' }).click();
  await page.getByRole('textbox', { name: 'What is the task today?' }).fill('New Task');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await expect(page.locator('text=New Task')).toBeVisible();

});

test('Remove the inserted task', async ({ page }) => {
  await page.goto('http://localhost:3000/home');
  await page.getByRole('textbox', { name: 'What is the task today?' }).click();
  await page.getByRole('textbox', { name: 'What is the task today?' }).fill('Hello World');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.locator('path').nth(1).click();
      await expect(page.locator('text=Hello World')).not.toBeVisible();

});

test('Edit the task', async ({ page }) => {
   await page.goto('http://localhost:3000/home');
  await page.getByRole('textbox', { name: 'What is the task today?' }).click();
  await page.getByRole('textbox', { name: 'What is the task today?' }).fill('My name is you');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.locator('path').first().click();
  await page.getByRole('textbox', { name: 'Update task' }).click();
  await page.getByRole('textbox', { name: 'Update task' }).fill('My name is Me');
  await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
    await expect(page.locator('text=My name is Me')).toBeVisible();

});