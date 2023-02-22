/// <reference types="cypress" />
before(function(){
cy.signIn();
});
describe('Login Test',function(){
    it('valid login test',function(){
        cy.reload()
cy.go('back')
cy.go('forward')
    })
    });