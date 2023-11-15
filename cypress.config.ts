import { defineConfig } from "cypress";
import { registerWorkshopScripts } from "./workshop-scripts/workshopScripts";

export default defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on, config) {
      registerWorkshopScripts(on)
      // const version = config.env.version || 'local'

      // config.env = require(`./cypress/config/${version}.json`)

      // config.baseUrl = config.env.baseUrl
      
      return config
    },
    baseUrl: 'http://localhost:3000'
  },
});
