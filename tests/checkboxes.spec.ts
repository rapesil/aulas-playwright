import { test, expect } from "@playwright/test";

test('Deve verificar que o checkbox 1 não está marcado e o checkbox 2 está marcado', async({ page }) => {
    await page.waitForTimeout(5000)
    await page.goto('https://practice.expandtesting.com/checkboxes');

    expect(page.getByLabel('Checkbox 1')).not.toBeChecked();
    expect(page.getByLabel('Checkbox 2')).toBeChecked();
    await page.waitForTimeout(5000);
});

test('Deve marcar o checkbox 1', async({ page }) => {
    await page.goto('https://practice.expandtesting.com/checkboxes');
    await page.getByLabel('Checkbox 1').check();

    expect(page.getByLabel('Checkbox 1')).toBeChecked();
    expect(page.getByLabel('Checkbox 2')).toBeChecked();
    await page.waitForTimeout(5000);
});

test('Deve desmarcar o checkbox 2', async({ page }) => {
    await page.goto('https://practice.expandtesting.com/checkboxes');
    await page.getByLabel('Checkbox 2').click();

    expect(page.getByLabel('Checkbox 1')).not.toBeChecked();
    expect(page.getByLabel('Checkbox 2')).not.toBeChecked();
    await page.waitForTimeout(5000);
});
