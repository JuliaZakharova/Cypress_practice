/// <reference types="Cypress" /> 


it("Exemple sending the GET request", ()=>{
    cy.request("https://aqa-proka4.org/sandbox/web")
        .then((response)=>{           // then работает с промисами, 
            console.log(response);   // respons это данные от промиса (объект ответа)
        })
})

it.skip("Exemple sending the POST request", ()=>{
    cy.request({
        method: "POST",
        url: "https://my-test-qa-2026.free.beeceptor.com", //песочница-сервер
        message: "Hello server!"
    }).then((response)=>{
        //console.log(response); 
        //оставим, чтобы в консоль выводило ответ, откуда брать данные для проверовк
        expect(response).to.have.property('status').to.equal(200)
        expect(response.headers).to.have.property('vary').to.equal('Accept-Encoding')
    })
})

it.only("Exemple sending the POST request", ()=>{
    cy.request({
        method: "POST",
        url: "https://my-test-qa-2026.free.beeceptor.com", //песочница-сервер
        message: "Hello server!"
    }).its('headers').should('contain' , {
        vary: 'Accept-Encoding'
    })
})