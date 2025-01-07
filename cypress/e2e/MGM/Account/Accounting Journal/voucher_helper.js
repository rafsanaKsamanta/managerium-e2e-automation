
  //create Advance
  export const createVoucher = (amount) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
// create accounting journal when voucher type is Bank

//   cy.visit("https://devmgm.ibos.io/accounts/businessTransaction/create");
//   //select voucher type
//   cy.get("#transaction > div")
//   .click({ force: true })
//   .get("#react-select-mgm-option-2")
//   .type("{enter}",{force: true});
//   cy.wait(1000);
//   // select bank account
//   cy.get("#bank > div")
//   .click({ force: true })
//   .get("#react-select-mgm-option-1")
//   .type("{enter}",{force: true});
//   cy.wait(1000);
//   // add instrument No.
//   cy.get('.form-control').eq(2).click({force:true}).type("Test by Etu new0");
//   cy.wait(1000);
//   //add narration
//   cy.get('.form-control').eq(1).click({force:true}).type("Test by Etu");
//   cy.wait(1000);
//   //select Account Head
//   cy.get("#transactionHead > div")
//   .click({ force: true })
//   .get("#react-select-mgm-option-6")
//   .type("{enter}",{force: true});
//    cy.wait(1000);
//   //add amount when bank
//    cy.get('.form-control').eq(4).click({force:true}).type(amount);
//    cy.wait(2000);
//   //add list
//    cy.get('.btn').eq(3).click({force:true});
//    cy.wait(2000);  
//  //submit
//   cy.get("form").submit();
//   cy.wait(2000);


   // create accounting journal when voucher type is journal voucher

   cy.visit("https://devmgm.ibos.io/accounts/businessTransaction/create");
   //select voucher type
   cy.get("#transaction > div")
   .click({ force: true })
   .get("#react-select-mgm-option-4")
   .type("{enter}",{force: true});
   cy.wait(1000);
   //add narration
   cy.get('.form-control').eq(1).click({force:true}).type("Test by Etu");
   cy.wait(1000);
  //select Account Head when journal voucher
     cy.get("#chartOfAccount> div")
     .click({ force: true })
     .get("#react-select-mgm-option-0")
     .type("{enter}",{force: true});
     cy.wait(1000);
    //select Debit or credit
     cy.get("#debitOrCredit > div")
     .click({ force: true })
     .get("#react-select-mgm-option-1")
     .type("{enter}",{force: true});
     cy.wait(1000);
    //add amount
    cy.get('.form-control').eq(2).click({force:true}).type(amount);
    cy.wait(2000);
    //add list
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
 //select Account Head when journal voucher
 cy.get("#chartOfAccount> div")
 .click({ force: true })
 .get("#react-select-mgm-option-1")
 .type("{enter}",{force: true});
 cy.wait(1000);
// //select Debit or credit
 cy.get("#debitOrCredit > div")
 .click({ force: true })
 .get("#react-select-mgm-option-0")
 .type("{enter}",{force: true});
 cy.wait(1000);
//add list
cy.get('.btn').eq(3).click({force:true});
cy.wait(2000);
  //submit
  cy.get("form").submit();
  cy.wait(2000);

// create accounting journal when voucher type is CASH
    // cy.visit("https://devmgm.ibos.io/accounts/businessTransaction/create");
    // //select voucher type
    // cy.get("#transaction > div")
    // .click({ force: true })
    // .get("#react-select-mgm-option-0")
    // .type("{enter}",{force: true});
    // cy.wait(1000);
    // //select cashAccount
    // cy.get("#cashAccount > div")
    // .click({ force: true })
    // .get("#react-select-mgm-option-0")
    // .type("{enter}",{force: true});
    // cy.wait(1000);
    // //add narration
    // cy.get('.form-control').eq(1).click({force:true}).type("Test by Etu");
    // cy.wait(1000);
    // //select Account Head
    // cy.get("#transactionHead > div")
    // .click({ force: true })
    // .get("#react-select-mgm-option-1")
    // .type("{enter}",{force: true});
    // cy.wait(1000);
    // //add amount
    // cy.get('.form-control').eq(2).click({force:true}).type(amount);
    // cy.wait(2000);
    // //add list
    // cy.get('.btn').eq(3).click({force:true});
    // cy.wait(2000);
    // //submit
    // cy.get("form").submit();
    // cy.wait(2000);
  };

    //approve purchase order
 export const approveVoucher = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(8).click({force:true});
    cy.wait(2000);
    cy.get('.MuiSvgIcon-root').eq(25).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(3).click({force:true});
    cy.wait(2000);
  };