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
// create cost center
  export const createCostCenter = (CostCenterName ) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.viewport(1920, 1080);
    cy.visit("https://mgm.ibos.io/accounts/costCenter");
    cy.wait(1000);
    cy.get('.btn').eq(2).click({force:true});
    cy.wait(1000);
     //select office
     cy.get("#office > div")
     .click({ force: true })
     .get("#react-select-mgm-option-0")
     .type("{enter}",{force: true});
     cy.wait(1000);
     cy.get('.form-control').eq(1).click({force:true}).type(CostCenterName);
     cy.wait(1000);
     cy.get("form").submit();
     cy.wait(1000);      
  };
// edit cost center
  export const editCostCenter = (CostCenterName ) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.viewport(1920, 1080);
    cy.visit("https://mgm.ibos.io/accounts/costCenter");
    cy.wait(1000);
    cy.get('.MuiSvgIcon-root ').eq(28).click({force:true});
    cy.wait(1000);
     //select office
     cy.get("#office > div")
     .click({ force: true })
     .get("#react-select-mgm-option-1")
     .type("{enter}",{force: true});
     cy.wait(1000);
     //clear the existing text & type new text for edit
     cy.get('.form-control').eq(1).click({force:true}).clear().type(CostCenterName);
     cy.wait(1000);
     cy.get("form").submit();
     cy.wait(1000); 
  };
 