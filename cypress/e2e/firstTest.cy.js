/// <reference types="Cypress" /> 
// выше добавлена строка, которая говорит об использовании IntelliSense (подсказок)

// describe('Мой первый тест', () => {
    
//    context('Проверить открытие сайта Affarts', () => {
//        it('Открывает site Affarts', () => {cy.visit('https://affarts.ru')})
//    })
//  })

/* it('Поиск по id', ()=> { //получилось не пой айди, т.к. на странице-тренажере оказались айди динамические
    cy.visit('https://followish.io/auth/login') //cy.visit - для перехода на определенный сайт
    cy.get('[type="email"]') //cy.get - для того чтобы идентифицировать эл-т на стр-це
});

it('Поиск по id', ()=> { //это уже тест по айди нормальный
    cy.visit('https://docs.cypress.io/api/commands/get') 
    cy.get('#Usage') 
});

it('Поиск по class', ()=> {
    cy.visit('https://docs.cypress.io/api/commands/get') 
    cy.get('.searchBox_H2mL')
});

it('Поиск по tag', ()=> {
    cy.visit('https://docs.cypress.io/api/commands/get') 
    cy.get('nav')
});

it('Поиск по значению тега', ()=> {
    cy.visit('https://followish.io/auth/login') 
    cy.get('[name="password"]')
});

it('Поиск по другому атрибуту', ()=> {
    cy.visit('https://followish.io/auth/login') 
    cy.get('[placeholder="Не менее 8 символов"][name="password"]')
});

it('Поиск по другим элементам', ()=> {
    cy.visit('https://docs.cypress.io/api/commands/get') 
    cy.get ('button[type="button"][aria-label="Close"]')
});

it('Поиск по классу с содержимым', ()=> {
    cy.visit('https://docs.cypress.io/api/commands/get') 
    cy.get('*[class^="language"]') // * - найти любой, ^ - начинается со слова указанного
}); */

//коммент для практики перезаливки дока в гитхаб и мерджа после изменений

it('Поиск по Get с Find и Eq', ()=> { // eq - берет селектор по индексу из набора
    cy.visit('https://www.vtb.by/chastnym-licam/valutno-obmennye-operacii') 
    cy.get('tbody').find('table').find('td').eq(2)
});

it.only('Поиск по месту среди соседей', ()=> { 
    cy.visit('https://docs.cypress.io/api/commands/get') 
    cy.get('li:nth-child(1) a[href="#Syntax"]')
})