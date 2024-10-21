import { test, expect } from '@playwright/test';

test.describe('Login com sucesso', () => {
    test('Deve fazer login com sucesso', async({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        await page.locator('#username').fill('tomsmith');
        await page.locator('#password').fill('SuperSecretPassword!');
        await page.locator('.fa-sign-in').click();

        const successMessage = page.locator('.success');
        expect(successMessage).toBeVisible();
        expect(await successMessage.textContent()).toContain('You logged into a secure area!')
        expect(page.url()).toBe('https://the-internet.herokuapp.com/secure')
    });
})

test.describe('Casos de login sem sucesso', () => {
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

    test('Deve impedir acesso caso senha esteja incorreta', async({ page })=> {
        await page.locator('#username').fill('tomsmith');
        await page.locator('#password').fill('senha-invalida');
        await page.locator('.fa-sign-in').click();

        const errorMessage = page.locator('.error');
        expect(errorMessage).toBeVisible();
        expect(await errorMessage.textContent()).toContain('Your password is invalid!')
        expect(page.url()).toBe('https://the-internet.herokuapp.com/login')
    });

    test('Deve impedir acesso caso usuário não seja válido', async({ page }) => {
        await page.locator('#username').fill('fakeUser');
        await page.locator('#password').fill('SuperSecretPassword!');
        await page.locator('.fa-sign-in').click();

        const errorMessage = page.locator('.error');
        expect(errorMessage).toBeVisible();
        expect(await errorMessage.textContent()).toContain('Your username is invalid!')
        expect(page.url()).toBe('https://the-internet.herokuapp.com/login')
    });
})

