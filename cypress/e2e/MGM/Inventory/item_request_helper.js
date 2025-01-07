  //login
  export const login = (userId, password) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.viewport(1920, 1080);
    cy.visit("https://mgm.ibos.io/");
        cy.get("#loginMobileNo").eq(0).click({force:true}).type(userId);
        cy.get("#loginPassword").eq(0).click({force:true}).type(password);
        cy.get("form").submit();
        cy.wait(1000);
        // cy.get("#branchList > div")
        // .click({ force: true })
        // .get("#react-select-mgm-option-0")
        // .type("{enter}",{force: true});
        cy.wait(2000);
  };
    //create item request from normal user
    export const createItemRequest = (RequestQuantity) => {
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
        Cypress.on("uncaught:exception", (err) => {
          /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false;
          }
        });
        cy.viewport(1920, 1080);
        cy.visit("https://mgm.ibos.io/inventory/request");
        cy.wait(1000);
        cy.get('.btn').eq(2).click({ force: true });
        cy.wait(1000);
    //add requesting office
        cy.get("#requestingOffice > div")
       .click({ force: true })
       .get("#react-select-mgm-option-0")
       .type("{enter}",{force: true});
       cy.wait(1000);  
    //add requesting wearhouse
      cy.get("#requestingWarehouse > div")
     .click({ force: true })
     .get("#react-select-mgm-option-0")
     .type("{enter}",{force: true});
     cy.wait(1000);
     //add requesting item
     cy.get("#item > div")
     .click({ force: true })
     .get("#react-select-mgm-option-0")
     .type("{enter}",{force: true});
     cy.wait(2000);
   // add requiesting quantity
     cy.get(".form-control").eq(3).click({force: true}).type(RequestQuantity);
     cy.wait(1000);
     cy.get(".btn").eq(4).click({ force: true });
     cy.wait(2000); 
    // save
    cy.get("form").submit();
    cy.wait(2000);
    //view details 
    cy.get(".newBtnBackground").eq(0).click({force:true});
    cy.wait(1000);
    cy.get(".btn-go-back").eq(0).click({force:true});
    cy.wait(1000);
    //view request summary
    cy.get(".MuiButtonBase-root").eq(1).click({ force: true });
    cy.wait(1000);
    //view request details
    cy.get(".MuiButtonBase-root").eq(2).click({ force: true });
    cy.wait(1000);
      
};
 //Item Request approval
 export const ApproveItemRequest = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(19).click({force:true});
    cy.wait(2000);
    cy.get('.newBtnBackground').eq(2).click({ force: true });
    cy.wait(2000);
     //add sending office
     cy.get("#sendingOffice> div")
     .click({ force: true })
     .get("#react-select-mgm-option-0")
     .type("{enter}",{force: true});
     cy.wait(1000);  
  //add sending wearhouse
     cy.get("#sendingWarehouse > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(1000);
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    ;
  };