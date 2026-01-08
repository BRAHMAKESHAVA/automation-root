const { defineConfig } = require('@playwright/test');

console.log('PLAYWRIGHT CONFIG LOADED');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: true
  }
});
