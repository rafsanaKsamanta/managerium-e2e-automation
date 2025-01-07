//create direct purchase receive
export const checkSalesAnalyticsReports = (dateToEnter) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://devmgm.ibos.io/sales/salesAnalytics");
        cy.wait(2000);
        //select report types
        cy.get("#reportType > div")
        .click({ force: true })
        .get("#react-select-mgm-option-0")
        .type("{enter}",{force: true});
        cy.wait(2000);
         //select office types
         cy.get("#office> div")
         .click({ force: true })
         .get("#react-select-mgm-option-0")
         .type("{enter}",{force: true});
         cy.wait(2000);
         //check customer wise check box
         cy.get('.PrivateSwitchBase-input').eq(0).check({force:true});
         //select customer Groupo
        //  cy.get("#customerGroup> div")
        //  .click({ force: true })
        //  .get("#react-select-mgm-option-0")
        //  .type("{enter}",{force: true});
         cy.wait(2000);
        //pick input date type
        // cy.get('.form-control').eq(0).click({ force: true });
        // cy.wait(2000);
        // cy.get('input[name="fromDate"]').type(dateToEnter);
        // cy.wait(2000);
        // cy.get('.form-control').eq(1).click({ force: true });
        // cy.wait(2000);
        // cy.get('input[name="toDate"]').clear().type(dateToEnter);
        //click on view button
        cy.get(".btn").eq(2).click({ force: true });
        cy.wait(2000);
        
  };