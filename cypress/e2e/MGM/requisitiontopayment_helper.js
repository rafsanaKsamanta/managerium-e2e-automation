// Purchase Requisiton Create 
export const purchaserequisition = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/purchase/purchaseRequisition");
    cy.wait(1000);





















//     // click payment by invoice($) icon
//     cy.get(".MuiSvgIcon-root").eq(35).click({force:true});
//     //select office
//     cy.get("#office > div")
//        .click({ force: true })
//        .get("#react-select-mgm-option-0")
//        .type("{enter}",{force: true});
//        cy.wait(2000);
//     //click on check box as cash 
//     cy.get('.PrivateSwitchBase-input').eq(0).check({force:true});
//     //select cash type
//     cy.get("#cash > div")
//     .click({ force: true })
//     .get("#react-select-mgm-option-0")
//     .type("{enter}",{force: true});
//     cy.wait(2000);
//     //type payment amount
//     cy.get('.form-control').eq(3).click({force:true}).type("100");
//     cy.wait(2000);
//     //click on add button
//     cy.get('.btn').eq(3).click({force:true});
//     cy.wait(2000);
//     //submit form
//     cy.get("form").submit();
//     cy.wait(2000);
//    //view paid bill
//    cy.get('.MuiButtonBase-root ').eq(5).click({force:true});
//    cy.wait(2000);

  };