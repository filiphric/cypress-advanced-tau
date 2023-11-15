import { trelloDatabase } from "workshop-scripts";

Cypress.Commands.add('info', (displayName: string, db: trelloDatabase) => {

  Cypress.log({
    displayName,
    message: '\n',
    consoleProps: () => {
      return {
        'database': db,
      }
    }
  });

});