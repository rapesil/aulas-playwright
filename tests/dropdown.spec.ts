import { test, expect } from "@playwright/test";

test.describe('Aprendendo a trabalhar com Dropdown', () => {
    test('Deve selecionar a opção 1', async({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
    
        const select = await page.locator('#dropdown');
        await select.selectOption('1');
        
        expect(select).toHaveValue('1');
    })

    test('Deve selecionar a opção 1 - fazendo em única linha', async({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
    
        await page.locator('#dropdown').selectOption('1');
    
        await page.waitForTimeout(10000);
    })

    test('Deve selecionar a opção 2', async({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        
        const select = await page.locator('#dropdown');
        await select.selectOption({ label: 'Option 2'});
    
        expect(select).toHaveValue('2');
    })

    test('Deve selecionar a opção 2 - sem utilizar magic number', async({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        
        const select = await page.locator('#dropdown');
        await select.selectOption({ label: 'Option 2'});
        const saoPaulo = '2'
        expect(select).toHaveValue(saoPaulo);
    })
    
    // Não buscar por texto - dá erro
    test('Deve selecionar a opção 2 - valida pelo texto', async({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        
        const select = await page.locator('#dropdown');
        await select.selectOption({ label: 'Option 2'});
        // expect(select).toHaveText('Option 1')
    })
})






