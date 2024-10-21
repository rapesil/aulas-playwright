import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    console.log('Passei no before each')
    await page.goto('https://the-internet.herokuapp.com/login');
})

test.beforeAll(async() =>{
    console.log('Passei no before all');
})

test.afterAll(async () =>{
    console.log('Passei no after all');
})

test.afterEach(async () =>{
    console.log('Passei no after each');
})

test.only('Deve carregar a página com a opção Blue marcada', async({ page }) => {
    await page.goto('https://practice.expandtesting.com/radio-buttons');

    await page.getByLabel('Blue').check();
    expect(page.getByLabel('Blue')).toBeChecked();
});


test.only('Deve marcar a opção Vermelho desmarcando os demais', async({ page }) => {
    await page.goto('https://practice.expandtesting.com/radio-buttons');


});