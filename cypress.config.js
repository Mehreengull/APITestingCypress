const { defineConfig, cli } = require("cypress");
const pg = require("pg");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
