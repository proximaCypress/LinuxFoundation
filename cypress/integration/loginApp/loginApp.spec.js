/// <reference types="cypress" />
describe('Login Test',function(){
it('valid login test',function(){
cy.visit('https://www.google.com')
cy.location('protocol').should('eq','https:')
cy.location('href').should('eq','https://www.google.com/')


})
});
