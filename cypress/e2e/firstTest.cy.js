/// <reference types="Cypress" /> 

//import { archivePage } from "../support/pages/archive"

//пример не рабочий, просто пример

//mock
//beforeEach("setup success response with stub", ()=> {
//    cy.intercept("https...",
//       {fixture: "confirmResponse/success.json"})
//})

//stub
//beforeEach("setup success response with stub", ()=> {
//    cy.intercept("https...",
//        {fixture: "archiveResponse/success.json"})
//})

it("check state of paymant in the archive | publick session", () => {
    cy.intercept("https...",
        {fixture: "archiveResponse/success.json"

    });
    basePage.open("url");
    archivePage.selectArchiveMenu()
})

describe('Проверка плагина', () => {
  it.only('Делает первый скриншот', () => {
    // Заходим на любой стабильный сайт
    cy.visit('https://google.com'); 
    
    // Делаем снимок. 
    // При ПЕРВОМ запуске плагин просто создаст файл-эталон.
    // При ВТОРОМ запуске он начнет сравнивать.
    cy.matchImageSnapshot('test-google');
  });
});