import { test, expect } from '@playwright/test';

test.only('Deve acessar a página inicial do Google', async ({ page }) => {
            await page.goto('https://www.google.com');  

            await expect(page).toHaveTitle('Google');
});