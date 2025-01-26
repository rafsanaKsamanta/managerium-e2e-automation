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

  //create Advance
    export const createAdvance = (amount) => {
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
        Cypress.on("uncaught:exception", (err) => {
          /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false;
          }
        });
      cy.visit("https://mgm.ibos.io/accounts/expenseOrAdvance");
      cy.wait(1000);
      cy.get('.MuiButtonBase-root ').eq(3).click({force:true});
      cy.wait(1000);
      cy.get('.MuiButtonBase-root ').eq(1).click({force:true});
      cy.wait(1000);
      //select employee
      cy.get("#partnerPayeeName > div")
      .click({ force: true })
      .get("#react-select-mgm-option-3")
      .type("{enter}",{force: true});
      cy.wait(1000);
      //select office
    //   cy.get("#office > div")
    //   .click({ force: true })
    //   .get("#react-select-mgm-option-1")
    //   .type("{enter}",{force: true});
    //   cy.wait(1000);
      cy.get('.form-control').eq(2).click({force:true}).type(amount);
      cy.wait(1000);
      cy.get("form").submit();
      cy.wait(2000);

      //view created advance details

      cy.get('.MuiSvgIcon-root').eq(29).click({force:true});
      cy.wait(1000);


      };

  //Advance approval
  export const approveAdvance = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(12).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(2).click({force:true});
    cy.wait(2000);
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
    cy.wait(2000);
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(6).click({force:true});
    cy.wait(2000);
  };

    //payment Advance 
    export const paymentAdvance = () => {
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
      Cypress.on("uncaught:exception", (err) => {
        /* returning false here prevents Cypress from failing the test */
        if (resizeObserverLoopErrRe.test(err.message)) {
          return false;
        }
      });
      cy.visit("https://mgm.ibos.io/accounts/expenseOrAdvance");
      cy.wait(1000);
      //click on $ icon for payment
      cy.get('.MuiSvgIcon-root').eq(32).click({force:true});
      cy.wait(1000);
      cy.get('.MuiSvgIcon-root').eq(29).click({force:true});
      cy.wait(1000);
      //select office
      cy.get("#office > div")
      .click({ force: true })
      .get("#react-select-mgm-option-0")
      .type("{enter}",{force: true});
      cy.wait(1000);
       //select cash type
      cy.get("#cash > div")
      .click({ force: true })
      .get("#react-select-mgm-option-0")
      .type("{enter}",{force: true});
      cy.wait(1000);
      cy.get("form").submit();
      cy.wait(2000);
      cy.get('.MuiButtonBase-root ').eq(4).click({force:true});
      cy.wait(1000);
      cy.get('.MuiTableCell-root').eq(11).click({force:true});
      cy.wait(1000);

    };

    //Check Accounting Journal 
    // export const CheckJournal = () => {
    //   const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    //   Cypress.on("uncaught:exception", (err) => {
    //     /* returning false here prevents Cypress from failing the test */
    //     if (resizeObserverLoopErrRe.test(err.message)) {
    //       return false;
    //     }
    //   });
    //   cy.visit("https://mgm.ibos.io/accounts/businessTransaction");
    //   cy.wait(2000);
    //   //click on transaction number
    //   cy.get('.MuiTableCell-root').eq(10).click({force:true});
    //   cy.wait(1000);
      
    // };

    