// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {faker} from  '@faker-js/faker'
Cypress.Commands.add('homePage', ()=> {

    cy.visit("/")
    cy.contains('Coodesh').should('be.visible') 

})

Cypress.Commands.add('acessarLogin', ()=>{
    cy.get('a[href="/auth/signin/candidates"]').click()
    cy.contains('Faça o login').should('be.visible')
})

Cypress.Commands.add('cadastro', ()=>{
    cy.get('a.small').click()

    cy.get('input[placeholder="Nome Completo"]').type(faker.name.fullName())

    cy.get('input[placeholder="email@example.com"]').type(faker.internet.exampleEmail())
    
    cy.get('input[placeholder="********"]').type(faker.internet.password(20, true, /[A-Z]/,'1A_'))

    cy.get('input[type=checkbox][value="1"]').check({force: true})

    cy.get('form button[type="submit"]').click()

    cy.wait(3000)
})

Cypress.Commands.add('onboarding', ()=>{
    cy.get('input[placeholder="Seu nome social completo"]').type(faker.name.fullName())

    cy.get('input[type=radio][id="career-qa"]').check({force: true})

        
    cy.get('.col-md-12 > .form-text > div > :nth-child(1)').click()


    cy.get('#years_experience').select('2 - 3 anos')

    // cy.get('#preferences\.job_search').select('employed_and_searching')

    cy.get('.react-tel-input > .form-control').type(faker.phone.number('92 9#### ####'))
        
    cy.get('input[controlid="address.city"]').type(faker.address.cityName() )

    cy.get('input[type=checkbox][id="home-office-integral"]').check({force: true})

     cy.contains('button', 'Próximo').click()

    // segunda pagina de dados

    cy.get('.mt-3.col > .col-12 > :nth-child(3) > :nth-child(1)').click()

    cy.get('#communities-0-relation').select("Entusiasta")

    cy.get('.col-lg-12 > .react-select > .css-yk16xz-control > .css-13tza3w').type('Saúde{enter}')
        

    cy.get('#race').select("Pessoa Negra")

    cy.get('#gender').select("Homem")

    cy.get('#sexual_orientation').select("Heterossexual")

    //cy.get('#desabilities.type').select("Nenhuma deficiência")

    cy.contains('button', 'Próximo').click()
})

Cypress.Commands.add('scorecard', ()=> {
    //primeira parte
    cy.get('.btn-primary').click()

    cy.get(':nth-child(1) > td').type('{rightArrow}')

    cy.get('.score-card--body > :nth-child(2) > td').type('{moveToEnd}')

    cy.get(':nth-child(4) > td').type('{rightArrow}')
    
    cy.get(':nth-child(5) > td').type('{moveToEnd}')

    cy.get(':nth-child(6) > td').type('{rightArrow}')

    cy.get(':nth-child(7) > td').type('{rightArrow}')

    cy.get(':nth-child(9) > td').type('{moveToEnd}')

    cy.get(':nth-child(10) > td').type('{rightArrow}')

    cy.contains('button', 'Próximo').click()

    //Scorecard parte 2

    cy.get(':nth-child(1) > td').type('{rightArrow}')

    cy.get('.score-card--body > :nth-child(2) > td').type('{moveToEnd}')

    cy.get(':nth-child(4) > td').type('{rightArrow}')
    
    cy.get(':nth-child(5) > td').type('{moveToEnd}')

    cy.get(':nth-child(6) > td').type('{rightArrow}')

    cy.get(':nth-child(7) > td').type('{rightArrow}')

    cy.contains('button', 'Enviar').click()
})

Cypress.Commands.add('verificacao', ()=> {
    cy.get('.mb-5 > p').should('have.text','Se você achar que este problema está no site, por favor nos avise')

})