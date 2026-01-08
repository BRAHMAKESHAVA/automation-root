import { defineConfig } from '@playwright/test';

console.log('PLAYWRIGHT CONFIG LOADED');

export default defineConfig({
  testDir: './tests',

  reporter: [['html', { open: 'never' }]],

  use: {
    headless: false,
    slowMo: 1000
  }
});
