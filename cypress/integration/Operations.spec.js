describe('check calculator operations', () => {
  
  it('user can add two numbers', () => {
    cy.visit('/')
    cy.get('p[id="number-display"]').should('not.contain.text')
    cy.get('button[id="number-button-1"]').click()
    cy.get('button[id="number-button-2"]').click()
    cy.get('button[id="operator-add"]').click()
    cy.get('button[id="number-button-9"]').click()
    cy.get('p[id="number-display"]').should('have.text','9')
    cy.get('button[id="number-button-7"]').click()
    cy.get('button[id="operator-equal"]').click()
    cy.get('p[id="number-display"]').should('have.text','109')
  })

});
