Cypress.Commands.add("signIn",()=>{
    cy.visit('#/login')
    cy.get('input[type=email]').type('Test')
    cy.get('input[type=password]').type('Test')
    cy.get('.btn-primary').should('be.visible').click()
   
})