export class FormData{
    typeFormData(name, email, pass, country) {
        cy.get('#username').eq(0)
            .type(name)
            .get('#email').eq(0)
            .type(email)
            .get('#password')
            .type(pass)
            .get('#country').eq(0)
            .select(country)
    }

    clickTerms(){
        cy.get('#terms').eq(0).click()
    }

    submitButton(){
        cy.get('#submitBtn').eq(0).click()
    }

    checkFormResult(textSuccess){
        cy.get('#formResult', {timeout: 10000}).eq(0)
            .should('be.visible') //т.к. это div
            .and('contain.text', textSuccess)
    }
}
export const formData = new FormData()