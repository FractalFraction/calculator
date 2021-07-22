describe("Test to see if my Calculator app works",()=>{
  it("Check a single number button can pressed and displayed on the page", () => {
    cy.visit('/');
    cy.get("#number-button-1").should('contain',1)
    cy.get("#number-button-1").click()
    cy.get("#number-display").should('contain', 1)
  })

   it("number can be appended to the right of display", () => {
    cy.visit('/');
    cy.get("#number-button-1").should('contain',1)
    cy.get("#number-button-1").click()
    cy.get("#number-button-1").click()
    cy.get("#number-button-1").click()
    cy.get("#number-display").should('contain', 111)
   })

  it("Check two different number button can pressed and displayed on the page", () => {
      cy.visit('/');
      cy.get("#number-button-1").should('contain',1)
      cy.get("#number-button-1").click()
        cy.get("#number-button-2").should('contain',2)
      cy.get("#number-button-2").click()
      cy.get("#number-display").should('contain', 12)
    })

    it("Check two different number button can pressed and displayed on the page", () => {
    cy.visit('/');
    cy.get("#number-button-2").click()
    cy.get("#number-button-1").click()
    cy.get("#number-display").should('contain', 21)
  })

  it("display can be cleared", () => {
    
  })

})