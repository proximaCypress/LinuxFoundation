/// <reference types="cypress" />
before(function(){
    cy.SignIn();
})
describe("Login process", function(){
it("login case",function(){
    defaultCommandTimeout:6000
    Cypress.config(defaultCommandTimeout)
    cy.visit("")
})
});