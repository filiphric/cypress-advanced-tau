it('board has no lists', () => {

  cy.intercept('GET', '/api/lists?boardId=1')
    .as('getLists')

  cy.visit('/board/1')

  cy.wait('@getLists')

  cy.get('[data-cy=list]')
    .should('be.visible')
  
});

it.only('deleting a list', () => {

  cy.intercept({
    method: 'DELETE',
    url: '/api/lists/*'
  }).as('deleteList')

  cy.visit('/board/1')

  cy.get('[data-cy="list-options"]')
    .click()

  cy.get('[data-cy="delete-list"]')
    .click()

  cy.wait('@deleteList')
    .its('response.statusCode')
    .should('eq', 200)
    
});