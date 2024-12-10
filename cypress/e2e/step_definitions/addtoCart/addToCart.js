import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { elementsProd } from "../../../support/pageObjects/produto/elements";


Given('I am on the product page', () => {
    cy.visit('https://advantageonlineshopping.com/');
    cy.get('.loader').should('not.be.visible');
    cy.busca("Speaker");
    cy.selecProd();
});

When('I click the "Add to Cart" button', () => {
    cy.addCart();
});

Then('I should see the product in the cart', () => {
    cy.checkQTDD();
});

When('I select a quantity greater than the stock', () => {
    cy.get(elementsProd.inputQTDD).type(11);
});

And('I click the "Add to Cart" button', () => {
    cy.addCart();
});

Then('I should see an alert message indicating insufficient stock', () => {
    cy.get(elementsProd.msgErro).should('contain', 'Oops! We only have 10 in stock. We updated your order accordingly')
});