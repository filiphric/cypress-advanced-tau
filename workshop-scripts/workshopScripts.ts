import { testSetupData } from './testSetupData';

declare global {
  namespace Cypress {
    interface Chainable {
      task(event: 'testSetupData');
    }
  }
}

export const registerWorkshopScripts = (on: Cypress.PluginEvents) => {
  on('task', { testSetupData })
};