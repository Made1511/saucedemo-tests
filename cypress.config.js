const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
       console.log('✅ Mochawesome plugin cargado');
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'e2e-tests/*.spec.js',
    supportFile: false // 👈 Desactiva el archivo de soporte
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'reports',
    overwrite: false,
    html: true,
    json: true
  }
})