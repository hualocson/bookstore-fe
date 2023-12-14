const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "up98a1",
  e2e: {
    baseUrl: "http://localhost:3000",
  },
  watchForFileChanges: false,
});
