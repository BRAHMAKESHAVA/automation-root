const { defineConfig } = require('@playwright/test');

console.log('PLAYWRIGHT CONFIG LOADED');

module.exports = defineConfig({
  testDir: './tests',

  reporter: [['html', { open: 'never' }]],

  timeout: 60000,

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
});
