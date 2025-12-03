/// <reference types="Cypress" /> 


it('SHOULD', ()=> {
    cy.visit('https://cash.rbc.ru/converter.html')
    cy.get('[class="calc__input_box__input js-converter-input"]').eq(0)
        .click()
        .type('{selectall}{backspace}')   // выделяем и удаляем предыдущее значение
        .type(100)  //команда вводит какое-то значение в инпут
        .should('have.value', 100) //проверка, что поменялось значение на указанное (дефолтно стоит 5000)
        .and('be.visible')  //проверка, чтобы инпут визибл
})