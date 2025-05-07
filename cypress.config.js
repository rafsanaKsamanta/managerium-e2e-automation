const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://devmgm.ibos.io/", // optional
    specPattern: "cypress/e2e/**/*.cy.js",
  },



  // Other Cypress configuration options, if any
  // preprocessors: {
  //   ...cucumber.preprocessors, // Add this line to configure the Cucumber preprocessor
  // },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
