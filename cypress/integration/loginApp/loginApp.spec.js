/// <reference types="cypress" />
describe('Login Test',function(){
it('valid login test',function(){

// cy.visit('https://pcc.dev.platform.linuxfoundation.org/')
// cy.visit('https://pcc.dev.platform.linuxfoundation.org/', this.timeout(30000))
// cy.get('#username').type('veerendrat')
// cy.get('#password').type('Ranthakur17@')
// cy.get('.button').should('be.visible').click()
// cy.title().should('eq','LFX Project Control Center')
cy.visit('https://www.google.com')
cy.location('protocol').should('eq','https:')
cy.location('href').should('eq','https://www.google.com/')


})

// it('valid login test',function(){
// cy.visit('https://www.google.com')
// cy.reload()
// cy.go('back')
// cy.go('forward')
// })
});
