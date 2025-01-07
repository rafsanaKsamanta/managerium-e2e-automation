  //login
  export const MgmLiveMgm = (userId, password) => {
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
        cy.get("#branchList > div")
        .click({ force: true })
        .get("#react-select-mgm-option-0")
        .type("{enter}",{force: true});
        cy.wait(2000);
  };
  //login
  export const MgmLiveSqa = (userId, password) => {
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
        cy.get("#branchList > div")
        .click({ force: true })
        .get("#react-select-mgm-option-1")
        .type("{enter}",{force: true});
        cy.wait(2000);
  };
// create direct sales in managerium branch
  export const CreateDirectSalesinManageriumBranch = (quantity,rate,discount,VAT,AIT) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/goodsSales");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
    cy.wait(1000);
    // add 1st item
    cy.get("#customer > div")
    .click({ force: true })
    .get("#react-select-mgm-option-53")
    .type("{enter}",{force: true});
    cy.wait(1000);
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-12")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type(quantity);
    cy.wait(1000);
    cy.get(".form-control").eq(10).click({force:true}).type(rate);
    cy.wait(2000);
    // cy.get(".form-control").eq(9).click({force:true}).type(discount);
    // cy.wait(2000);
    // cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    // cy.wait(2000);
    // cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    // cy.wait(2000);
    cy.get(".btn").eq(8).click({ force: true });
    cy.wait(2000);

    cy.get("form").submit();
    cy.wait(1000);

    // cy.get(".MuiButtonBase-root").eq(3).click({force:true});
    // cy.wait(1000);
    // cy.get(".newBtnBackground").eq(1).click({force:true});
  };

  // create direct sales in managerium branch
  export const CreateDirectSalesinSqaBranch = (quantity,rate,discount,VAT,AIT) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/goodsSales");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
    cy.wait(1000);
    // add 1st item
    cy.get("#customer > div")
    .click({ force: true })
    .get("#react-select-mgm-option-1")
    .type("{enter}",{force: true});
    cy.wait(1000);
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-1")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type(quantity);
    cy.wait(1000);
    cy.get(".form-control").eq(10).click({force:true}).type(rate);
    cy.wait(2000);
    // cy.get(".form-control").eq(9).click({force:true}).type(discount);
    // cy.wait(2000);
    // cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    // cy.wait(2000);
    // cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    // cy.wait(2000);
    cy.get(".btn").eq(8).click({ force: true });
    cy.wait(2000);

    cy.get("form").submit();
    cy.wait(1000);

    // cy.get(".MuiButtonBase-root").eq(3).click({force:true});
    // cy.wait(1000);
    // cy.get(".newBtnBackground").eq(1).click({force:true});
  };