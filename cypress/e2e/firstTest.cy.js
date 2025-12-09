/// <reference types="Cypress" /> 

//type()
it('type', ()=>{
    cy.visit('https://aqa-proka4.org/sandbox/web')
        .get('[name="phone[]"]')
        .type(73334445577)
})

//focus()
it('focus', ()=>{
    cy.visit('https://aqa-proka4.org/sandbox/web')
        .get('[name="dyn-name"]')
        .focus()
})

//blur() 
it.only('blur', ()=>{
    cy.visit('https://followish.io/auth/login')
        .get('[name="email"]')
        .type(1) //сработал блюр только при неверном вводе в инпут, 
                // как пишут в примерах с focus не сработал блюр
        .blur()
})