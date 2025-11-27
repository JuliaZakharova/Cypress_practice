/// <reference types="Cypress" /> 

it('Поиск по contains', ()=> {
   cy.visit('https://aqa-proka4.org/sandbox/web')  
   cy.contains('Показать подсказку');
})

it('Поиск по contains', ()=> {
   cy.visit('https://online.vtb.by/non-auth/login')  //долго заходит на предыдущий сайт, заменила его на банковскую ссылку
   cy.contains('Войти');                             //находит button, в котором стоит текст
})

it('Поиск по contains', ()=> {
   cy.visit('https://online.vtb.by/non-auth/login')  
   cy.contains('div', 'Войти');                      //ищем по тегу, в котором стоит текст
})

it('Поиск по contains', ()=> {
   cy.visit('https://online.vtb.by/non-auth/login')  
   cy.contains('ВОЙТИ');                      //пробуем найти текст капсом. Его нет и тест упал
})

it('Поиск по contains', ()=> {
   cy.visit('https://online.vtb.by/non-auth/login')  
   cy.contains('ВОЙТИ', {matchCase:false});     //не сравниваем совпадение
})

it.only('Поиск по contains', ()=> {
   cy.visit('https://online.vtb.by/non-auth/login')  
   cy.get('footer').contains('Мы в соцсетях');
})