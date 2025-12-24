/// <reference types="Cypress" /> 
import {formData} from "../support/pages/formData"

it('заполнение формы', ()=>{
    cy.visit('https://aqa-proka4.org/sandbox/web')
    
    formData.typeFormData('julia1', 'test1@test.com', '1234567', 'Russia')
    formData.clickTerms()
    formData.submitButton()
    formData.checkFormResult('Форма успешно отправлена!')   
    
})