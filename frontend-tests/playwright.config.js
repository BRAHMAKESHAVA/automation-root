import { defineConfig } from '@playwright/test';

console.log('PLAYWRIGHT CONFIG LOADED');

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  timeout: 60000,

  use: {
    headless: true,                 //  MUST for Jenkins
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
});
