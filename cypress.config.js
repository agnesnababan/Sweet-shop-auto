const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Nonaktifkan auto-run saat file berubah
  watchForFileChanges: false,

  viewportWidth: 1920,
  viewportHeight: 1080,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
