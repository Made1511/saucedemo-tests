const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      console.log(' Mochawesome plugin cargado');
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'e2e-tests/*.spec.js',
    supportFile: 'cypress/support/e2e.js',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'reports',
      overwrite: false,
      html: false,
      json: true
    }
  }
});
