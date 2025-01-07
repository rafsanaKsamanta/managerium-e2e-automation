//create direct purchase receive
export const checkStockHistoryReport = (dateToEnter) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://devmgm.ibos.io/inventory/inventoryReport");
        cy.wait(2000);
        //select report types
        cy.get("#viewBy> div")
        .click({ force: true })
        .get("#react-select-mgm-option-1")
        .type("{enter}",{force: true});
        cy.wait(2000);
         //select office types
         cy.get("#office> div")
         .click({ force: true })
         .get("#react-select-mgm-option-1")
         .type("{enter}",{force: true});
         cy.wait(2000);
         //select wearhouse
         cy.get("#warehouse> div")
         .click({ force: true })
         .get("#react-select-mgm-option-1")
         .type("{enter}",{force: true});
         cy.wait(2000);

        cy.get(".btn").eq(2).click({ force: true });
        cy.wait(2000);
        
  };