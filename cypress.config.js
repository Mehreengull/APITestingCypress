const { defineConfig, cli } = require("cypress");
const pg = require("pg");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        ReadDB({ dbConfig, sql }) {
          const client = new pg.Pool(dbConfig);
          return client.query(sql);
        },
      });
    },
    pageLoadTimeout: 120000,
  },
  DB: {
    host: "numu-staging.cz2ayce8ak6w.eu-west-1.rds.amazonaws.com",
    username: "mehreen_stage",
    password: "5x8buWRHDb4g8kLFTZqa",
    database: "stage_v5",
    port: "5432",
  },
});
