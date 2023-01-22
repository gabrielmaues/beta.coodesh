
import {faker} from  '@faker-js/faker'
import '@walmyr-filho/cy-press'

describe( 'teste', () =>{

    it('criando conta',() =>{
      
        //acessar pagina
        cy.homePage()
        
       //acessar login
        cy.acessarLogin()

        //cadastro
        cy.cadastro()

        //onboarding
        cy.onboarding()

        //Scorecard
        cy.scorecard()

        //verificação final
        cy.verificacao()

    })
})


