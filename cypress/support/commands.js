Cypress.Commands.add("signIn",()=>{
    cy.visit('#/login')
    cy.get('input[type=email]').type('veerendrat@getnada.com')
    cy.get('input[type=password]').type('Ranthakur17@')
    cy.get('.btn-primary').should('be.visible').click()
   
})