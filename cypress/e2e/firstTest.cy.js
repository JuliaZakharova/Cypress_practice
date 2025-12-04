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

it('EXPECT', ()=> {
    cy.visit('https://cash.rbc.ru/converter.html')
    cy.get('[class="calc__input_box__input js-converter-input"]').eq(0)
        .click()
        .type('{selectall}{backspace}')
        .type(100).then(input=> {
            expect(input).to.have.value(100)
        })
        
})

it('дефолтное состояние cheked в чекбоксе', ()=> {
    cy.visit('https://the-internet.herokuapp.com/checkboxes')
    cy.get('[type="checkbox"]').eq(1)
        .should('be.checked')
})

it('проверка видимости вложенной ссылки', ()=> {
    cy.visit('https://the-internet.herokuapp.com/jqueryui/menu#') //переходим на опред. ресурс
    cy.contains('Enabled') //найдем эл-т с текстом
        .trigger('mouseover') //наведем мышью на него
        .get('#ui-id-4') //проверим что эл-т с таким id есть
        .should('be.visible') //и он виден
})

it('элемент имеет атрибут и имеет конкретное значение', ()=> {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-submit')
        .should('have.attr', 'type').and('match', /submit/) //матч это должен совпадать, /с этим значением/
})

it.only('проверка корретности url', ()=> {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.url().should('eq','https://the-internet.herokuapp.com/upload')
})