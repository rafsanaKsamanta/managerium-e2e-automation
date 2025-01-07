import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the website', () => {
  cy.visit('https://mgm.ibos.io/');
});

When('I click the mobile no field  & password', () => {
    cy.get("#loginMobileNo").eq(0).click({force:true}).type('01315655618');
    cy.get("#loginPassword").eq(0).click({force:true}).type(password);
    cy.get("form").submit();
});

Then('I see the success message', () => {
  cy.get('.success-message').should('be.visible');
});
