import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


var token = ''
var userID = ''
var prodID = 20
var source = 'teste'
Given('I am logged in as a Admin user', () => {
    //cy.createAdmin();
    cy.loginAPI().then((authLogin) => {
        token = authLogin.body.statusMessage.token
        userID = authLogin.body.statusMessage.token
    })
});


When('I send a request to update the product image', () => {
    cy.buscaProdAPI(prodID).then((prodResponse) =>{
        expect(prodResponse.status).equals(200);
    });
    cy.alteraFotoAPI(prodID, token, userID, source).then((finalResponse) => {
        expect(finalResponse.status).equals(200);
    });
});

Then('I should receive a response confirming the update', () => {
    
});