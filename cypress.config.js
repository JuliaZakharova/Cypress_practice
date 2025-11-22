const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Путь, где Cypress будет искать тесты
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://example.com", // можешь удалить или заменить на свой сайт
    setupNodeEvents(on, config) {
      // Здесь можно добавлять обработчики событий, если нужно
    },
  },
});
