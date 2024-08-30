import { test, expect } from '@playwright/test';

test.describe('Formulário de Desafio', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('Deve iniciar o desafio e mostrar o timer', async ({ page }) => {
    // Preencher o formulário
    await page.fill('input[placeholder="Nome"]', 'John Doe');
    await page.fill('input[placeholder="Telefone"]', '123456789');
    await page.fill('input[placeholder="Email"]', 'johndoe@example.com');

    // Clicar no botão "Iniciar Desafio"
    await page.click('button:has-text("Iniciar Desafio")');

    // Verificar se o timer está visível
    await expect(page.locator('text=00:15')).toBeVisible();
  });

  test('Deve mostrar modal de sucesso ao enviar dentro do tempo', async ({ page }) => {
    // Preencher o formulário
    await page.fill('input[placeholder="Nome"]', 'John Doe');
    await page.fill('input[placeholder="Telefone"]', '123456789');
    await page.fill('input[placeholder="Email"]', 'johndoe@example.com');

    // Iniciar o desafio
    await page.click('button:has-text("Iniciar Desafio")');

    // Esperar um tempo para garantir que o desafio esteja em andamento
    await page.waitForTimeout(5000); // espera 5 segundos, ajustável conforme necessário

    // Clicar no botão "Enviar"
    await page.click('button:has-text("Enviar")');

    // Verificar se o modal de sucesso é exibido
    await expect(page.locator('text=Desafio finalizado com sucesso!')).toBeVisible();
  });

  test('Deve mostrar modal de falha se o tempo esgotar', async ({ page }) => {
    // Preencher o formulário
    await page.fill('input[placeholder="Nome"]', 'John Doe');
    await page.fill('input[placeholder="Telefone"]', '123456789');
    await page.fill('input[placeholder="Email"]', 'johndoe@example.com');

    // Iniciar o desafio
    await page.click('button:has-text("Iniciar Desafio")');

    // Esperar até que o tempo acabe (15 segundos)
    await page.waitForTimeout(16000); // espera 16 segundos para garantir que o tempo acabou

    // Verificar se o modal de falha é exibido
    await expect(page.locator('text=Desafio finalizado com falha!')).toBeVisible();
  });
});