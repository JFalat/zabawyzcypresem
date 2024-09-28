const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'y89cqq',
  e2e: {
    baseUrl: 'https://parabank.parasoft.com/',
    setupNodeEvents(on, config) {
      // Możesz dodać inne ustawienia eventów tutaj, jeśli są potrzebne
    },
  },
});
