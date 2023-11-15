it('check text of all cards in first list', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card-text]')
    .should((cards) => {
      expect(cards[0]).to.have.text('Milk')
      expect(cards[1]).to.have.text('Juice')
      expect(cards[2]).to.have.text('Bread')
    })

});