import { defineConfig } from '@playwright/test';

export default defineConfig({
  //testDir: './tests',
  //timeout: 30000,
  use: {
    headless: true,
    baseURL: 'http://localhost:5173/', // Altere para a URL correta se necessário
  },
});