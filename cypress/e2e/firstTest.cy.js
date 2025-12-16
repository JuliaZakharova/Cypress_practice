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
it('blur', ()=>{
    cy.visit('https://followish.io/auth/login')
        .get('[name="email"]')
        .type(1) //сработал блюр только при неверном вводе в инпут, 
                // как пишут в примерах с focus не сработал блюр
        .blur()
})

//clear() 
it('clear', ()=>{
    cy.visit('https://followish.io/auth/login')
        .get('[name="email"]')
        .type(1) 
        .wait(2000) //подождать 2 сек
        .clear()
})

//submit() 
it('submit', ()=>{
    cy.visit('https://followish.io/auth/login')
        .get('form[class="css-lsvjum er4rr0v6"]')
        .submit() //должны подсветить валидационные ошибки для инпутов
})

//click() 
it('click', ()=>{
    cy.visit('https://followish.io/auth/login')
        .get('[class="css-1iy1o3a e1qw3ps62"]').eq(1)
        .click()
})

//rightclick() 
it.only('rightclick', ()=>{
    cy.visit('https://the-internet.herokuapp.com/context_menu')
        .get('#hot-spot')
        .rightclick()
})