/// <reference types="cypress" />
before(function(){
    cy.SignIn();
})
Cypress.config('pageLoadTimeout', 100000)
describe("Login process", function(){
it("login case",function(){
    cy.wait(10000)
    cy.get('.nav-link').contains(' New Post').first().then(($fav) => {
        const favCount = $fav.text()
        expect(favCount).to.eq(' New Post')
    }).click()
    
})
});