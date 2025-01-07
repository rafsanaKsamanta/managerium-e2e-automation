const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  // Your existing Cypress configuration options

  reporter: "cypress-mochawesome-reporter",

  plugins: {
    e2e: {
      setupNodeEvents(on, config) {
        require("cypress-mochawesome-reporter/plugin")(on);
      },
    },
  },

  // Other Cypress configuration options, if any
  preprocessors: {
    ...cucumber.preprocessors, // Add this line to configure the Cucumber preprocessor
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
