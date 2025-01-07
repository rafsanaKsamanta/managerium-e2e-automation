//create Advance
export const assertion = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
  cy.visit("https://mgm.ibos.io/accounts/expenseOrAdvance");
  cy.wait(1000);
  
  //cy.get('.MuiTableCell-root').eq(13).should('exist')
   //cy.get('.MuiTableCell-root').eq(13).should('not.exist')
   //cy.get('.MuiTableCell-root').eq(13).should('be.visible');
   //cy.get('.MuiTableCell-root').eq(13).should('not.be.visible')
   //cy.get('.MuiTableCell-root').eq(13).should('contain', 'EXP-M240600009');

//    cy.get('.MuiButtonBase-root').eq(1).should('be.visible')
//   .and('be.enabled')
//   .click();

    cy.get('.MuiButtonBase-root').eq(1).click();
    cy.url('https://mgm.ibos.io').should('include', 'https://mgm.ibos.io/accounts/expenseOrAdvance/createAdvance');
  
};


  
