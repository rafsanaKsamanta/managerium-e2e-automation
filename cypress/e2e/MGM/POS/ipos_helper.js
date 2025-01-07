  //login
  export const iposlogin = (userId, password) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.viewport(1920, 1080);
    cy.visit("https://ipos.ibos.io/");
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