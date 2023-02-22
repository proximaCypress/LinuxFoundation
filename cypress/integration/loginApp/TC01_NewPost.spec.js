Cypress.config('pageLoadTimeout', 30000)
describe("Login Scenario",function(){
    it("Login Test",function(){
        cy.signIn()
    })
    it("Verify New post link",()=>{
    cy.contains(' New Post').as('New Post')
    cy.get('@New Post').should('be.visible')
    cy.get('@New Post').click()
    })
    it("Publish New Post",function(){
    
        cy.get('form').within(($form)=>{
            cy.get('input').first().type('With-in-Test')
            cy.get('input').eq(1).type('what is the wheather today?')
            cy.get('textarea').first().type('type 1234567')
            cy.get('input').last().type('type testing12345')
            cy.get('button').first().should('be.visible').click()
    })
    cy.hash().should('eq', '#/article')
    })
    // Click on Home 
    // Navigate to Globle feed
    it("Visit Home Page",function(){
cy.get('.nav-link').first().click()
cy.get('.nav-link').last().click()
// cy.get('.nav-link').contains('Home').should('be.visible').click();
cy.get('.nav-link').contains('Global Feed').should('be.visible')

    })
})
