Cypress.Commands.add('getDataCy', input => {

  Cypress.log({
    displayName: 'getDataCy',
    message: input,
    consoleProps() {
        return {
          selector: input
        }
    },
  })

  cy.get(`[data-cy="${input}"]`, {log: false})

})

it('creates new list and a new card', () => {

  cy.visit(`/board/1`)

  cy.getDataCy('add-list-input')
    .type('Groceries{enter}')

  cy.getDataCy('new-card')
    .click()

  cy.getDataCy('new-card-input')
    .type('milk{enter}')
  
});