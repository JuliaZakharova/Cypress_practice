/// <reference types="Cypress" /> 


it('заполнение формы', ()=>{
    cy.visit('https://aqa-proka4.org/sandbox/web')
        
    .get('#username').eq(0)
        .type('julia1')
    .get('#email').eq(0)
        .type('test1@test.com')
    .get('#password')
        .type('1234567')
    .get('#country').eq(0)
        .select('Russia')
    .get('#terms').eq(0).click()
        
    .get('#submitBtn').eq(0).click()
       
    .get('#formResult', {timeout: 10000}).eq(0)
        .should('be.visible') //т.к. это div
        .and('contain.text','Форма успешно отправлена!')
})