beforeEach(() => {
  cy.request('POST', '/api/reset')
  cy.request('POST', '/api/boards', { name: 'new board' })
});

it('creates a new list and a new card', () => {
  cy.visit('/board/1')
  cy.get('[data-cy="add-list-input"]')
    .type('new list{enter}')
  cy.contains('Add another card')
    .click()
  cy.get('[data-cy="new-card-input"]')
    .type('new card{enter}')
})