//<reference type="cypress" />
import { faker } from "@faker-js/faker";

describe ('authentification' , () =>{

    it('inscription réussie',() => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        //cy.contains('c\'est Ok pour moi').click();
        cy.get('.mt-7 > .flex > ._3jgXaWY4 > .MkLAMntR > ._2GvJDBxS').click();
        cy.get('#firstName').type('Bob');
        cy.get('#lastName').type('Man');
        cy.get('#signup-email').type('iyatelevision@gmail.com');
        cy.get('#signup-password').type('hahiye1!');
        cy.get('._2OVE0h6V').click();

        //cy.get('._2GvJDBxS').click();

        } )

    it('inscription échouée' ,() => {
        
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        cy.get('.mb-6 > .body-2-bold').click();
        //cy.contains('c\'est Ok pour moi').click();
        cy.get('#firstName').type('Robert');
        cy.get('#lastName').type('Man');
        cy.get('#signup-email').type('iyatelevision@gmail.com');
        cy.get('#signup-password').type('16');
        cy.get('._2OVE0h6V').click();
        //cy.get('._2GvJDBxS').click();


    })

    it('authentification' , () =>{
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        cy.get('.mb-6 > .body-2-bold').click();
        
        //cy.contains('Ok pour moi').click();
        cy.get('#signup-email').type(faker.internet.email());
        cy.get('#signup-password').type(faker.internet.password());
        cy.contains('Welcome Back').click();




    })
})