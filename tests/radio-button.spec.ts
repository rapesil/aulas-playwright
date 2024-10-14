import { test, expect } from "@playwright/test";

test.only('Deve carregar a página com a opção Blue marcada', async({ page }) => {
    await page.goto('https://practice.expandtesting.com/radio-buttons');

    await page.getByLabel('Blue').check();
    expect(page.getByLabel('Blue')).toBeChecked();
});


test('Deve marcar a opção Vermelho desmarcando os demais', async({ page }) => {
    await page.goto('https://practice.expandtesting.com/radio-buttons');


});