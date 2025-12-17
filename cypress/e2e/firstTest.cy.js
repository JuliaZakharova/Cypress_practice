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
it('rightclick', ()=>{
    cy.visit('https://the-internet.herokuapp.com/context_menu')
        .get('#hot-spot')
        .rightclick()
})

//dblclick() 
it('dblclick', ()=>{
    cy.visit('https://453887ba053ddb2bd28e50fe89b41c6e840a68e8.mdnplay.dev/en-US/docs/Web/API/Element/dblclick_event/runner.html?state=ZZHBTsMwEER%2FZWUurdS6qSohNaS5ADc4cfXFsbeJW8cOXgepVP13HBeoEJfImnkZz67PrIu9ZSWrJBmNtXAAVbepX0%2FwKIOuVumctaF%2B8mNjEZQ16gjRQ0AynwixMwS%2BOaCKvFoNia5WP1lswRRRSs8CnKekRqpjG%2FzodAl3%2Bz3idvuQdR80hmWQ2oxUwhr7LGtDg5WnEoyzxuGysV4dszNIrY1rb2gM0tHeh74EUtLirODb%2BV9n6YNpjSuhgOLmmGh80n4pKPg9ZXukVInQpuFKcN5hUi%2FCCcetDO33RP%2FuXfPN%2FAqmBRym%2BZV3FEGljcIOtFdjjy7y9xHD6S2n%2BzAT1y0JNv0r3ATzNOLzR0JfDEV0OEG6sfkJBFvADOewq68tMq%2BsJJpgHn3bpiqC5aLX0Mv0SZVihz2mVta0XWSXLw%3D%3D&code=1173f671-4a14-4921-b742-92614cb48969')
        .get('a').contains('Continue').click() 
        .get('aside').contains('My Card').dblclick()
})

//check() 
it('check', ()=>{
    cy.visit('https://aqa-proka4.org/sandbox/web')
        .get('input[value="paypal"]')
        .check()
})

//uncheck() 
it('uncheck', ()=>{
    cy.visit('https://aqa-proka4.org/sandbox/web')
        .get('#termsCheckbox').check()
        .wait(2000)
        .uncheck()
})

//select() 
it('select', ()=>{
    cy.visit('https://aqa-proka4.org/sandbox/web')
        .get('#countrySelect')
        .select('fr')
})

//scroll() 
it('scroll', ()=>{
    cy.visit('https://followish.io/')
        .get('div').contains('Оферта')
        .wait(2000)
        .scrollIntoView()
})

//scrollTo() 
it('scrollTo', ()=>{
    cy.visit('https://followish.io/')
    cy.scrollTo(0, 1000)
})

//trigger() 
it.only('trigger', ()=>{
    cy.visit('https://the-internet.herokuapp.com/jqueryui/menu')
        .contains('Enabled')
        .trigger('mouseover')
})