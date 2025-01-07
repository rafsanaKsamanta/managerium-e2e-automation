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
 // create bank account 1
  export const createBankAccount1 = (accountName,bankAccountNumber,bankShortName) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });

    cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get(".form-control").eq(0).click({force:true}).type(accountName);
    cy.get("#bankName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#branchName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#bankAccountType > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get(".form-control").eq(1).click({force:true}).type(bankAccountNumber); 
    cy.wait(1000);
    cy.get(".form-control").eq(2).click({force:true}).type(bankShortName);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(2000);
    cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
    cy.wait(2000);
    // cy.get(".newBtnBackground").eq(0).click({force:true});
    // cy.wait(2000);
    // cy.get(".MuiButton-root").eq(0).click({force:true});

  };
    //create bank account 2
  export const createBankAccount2 = (accountName,bankAccountNumber,bankShortName) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });

    cy.visit("https://mgm.ibos.io/accounts/bankAccount");
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get(".form-control").eq(0).click({force:true}).type(accountName);
    cy.get("#bankName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-1")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#branchName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-1")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#bankAccountType > div")
    .click({ force: true })
    .get("#react-select-mgm-option-1")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get(".form-control").eq(1).click({force:true}).type(bankAccountNumber); 
    cy.wait(1000);
    cy.get(".form-control").eq(2).click({force:true}).type(bankShortName);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(2000);
    cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
    cy.wait(2000);
    // cy.get(".newBtnBackground").eq(0).click({force:true});
    // cy.wait(2000);
    // cy.get(".MuiButton-root").eq(0).click({force:true});

  };
    //create bank account 3
  export const createBankAccount3 = (accountName,bankAccountNumber,bankShortName) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });

    cy.visit("https://mgm.ibos.io/accounts/bankAccount");
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get(".form-control").eq(0).click({force:true}).type(accountName);
    cy.get("#bankName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-2")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#branchName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-2")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#bankAccountType > div")
    .click({ force: true })
    .get("#react-select-mgm-option-2")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get(".form-control").eq(1).click({force:true}).type(bankAccountNumber); 
    cy.wait(1000);
    cy.get(".form-control").eq(2).click({force:true}).type(bankShortName);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(2000);
    cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
    cy.wait(2000);
    // cy.get(".newBtnBackground").eq(0).click({force:true});
    // cy.wait(2000);
    // cy.get(".MuiButton-root").eq(0).click({force:true});

  };
    //create bank account 4
  export const createBankAccount4 = (accountName,bankAccountNumber,bankShortName) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });

    cy.visit("https://mgm.ibos.io/accounts/bankAccount");
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get(".form-control").eq(0).click({force:true}).type(accountName);
    cy.get("#bankName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-3")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#branchName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-3")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#bankAccountType > div")
    .click({ force: true })
    .get("#react-select-mgm-option-3")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get(".form-control").eq(1).click({force:true}).type(bankAccountNumber); 
    cy.wait(1000);
    cy.get(".form-control").eq(2).click({force:true}).type(bankShortName);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(2000);
    cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
    cy.wait(2000);
    // cy.get(".newBtnBackground").eq(0).click({force:true});
    // cy.wait(2000);
    // cy.get(".MuiButton-root").eq(0).click({force:true});

  };
     //create bank account 5
  export const createBankAccount5 = (accountName,bankAccountNumber,bankShortName) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });

    cy.visit("https://dev-mgm.ibos.io/accounts/bankAccount");
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get(".form-control").eq(0).click({force:true}).type(accountName);
    cy.get("#bankName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-4")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#branchName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-4")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#bankAccountType > div")
    .click({ force: true })
    .get("#react-select-mgm-option-4")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get(".form-control").eq(1).click({force:true}).type(bankAccountNumber); 
    cy.wait(1000);
    cy.get(".form-control").eq(2).click({force:true}).type(bankShortName);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(2000);
    cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
    cy.wait(2000);
    // cy.get(".newBtnBackground").eq(0).click({force:true});
    // cy.wait(2000);
    // cy.get(".MuiButton-root").eq(0).click({force:true});

  };
    //create bank account 6
  export const createBankAccount6 = (accountName,bankAccountNumber,bankShortName) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });

    cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get(".form-control").eq(0).click({force:true}).type(accountName);
    cy.get("#bankName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-5")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#branchName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-5")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#bankAccountType > div")
    .click({ force: true })
    .get("#react-select-mgm-option-5")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get(".form-control").eq(1).click({force:true}).type(bankAccountNumber); 
    cy.wait(1000);
    cy.get(".form-control").eq(2).click({force:true}).type(bankShortName);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(2000);
    cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
    cy.wait(2000);
    // cy.get(".newBtnBackground").eq(0).click({force:true});
    // cy.wait(2000);
    // cy.get(".MuiButton-root").eq(0).click({force:true});

  };
    //create bank account 7
  export const createBankAccount7 = (accountName,bankAccountNumber,bankShortName) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });

    cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get(".form-control").eq(0).click({force:true}).type(accountName);
    cy.get("#bankName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-6")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#branchName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-6")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#bankAccountType > div")
    .click({ force: true })
    .get("#react-select-mgm-option-6")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get(".form-control").eq(1).click({force:true}).type(bankAccountNumber); 
    cy.wait(1000);
    cy.get(".form-control").eq(2).click({force:true}).type(bankShortName);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(2000);
    cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
    cy.wait(2000);
    // cy.get(".newBtnBackground").eq(0).click({force:true});
    // cy.wait(2000);
    // cy.get(".MuiButton-root").eq(0).click({force:true});

  };
    //create bank account 8
    export const createBankAccount8 = (accountName,bankAccountNumber,bankShortName) => {
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
        Cypress.on("uncaught:exception", (err) => {
          /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false;
          }
        });
    
        cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
        cy.get(".btn").eq(2).click({force:true});
        cy.wait(1000);
        cy.get(".form-control").eq(0).click({force:true}).type(accountName);
        cy.get("#bankName > div")
        .click({ force: true })
        .get("#react-select-mgm-option-7")
        .type("{enter}",{force: true});
        cy.wait(2000);
    
        cy.get("#branchName > div")
        .click({ force: true })
        .get("#react-select-mgm-option-7")
        .type("{enter}",{force: true});
        cy.wait(2000);
    
        cy.get("#bankAccountType > div")
        .click({ force: true })
        .get("#react-select-mgm-option-7")
        .type("{enter}",{force: true});
        cy.wait(2000);
    
        cy.get(".form-control").eq(1).click({force:true}).type(bankAccountNumber); 
        cy.wait(1000);
        cy.get(".form-control").eq(2).click({force:true}).type(bankShortName);
        cy.wait(1000);
        cy.get("form").submit();
        cy.wait(2000);z
        cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
        cy.wait(2000);
        // cy.get(".newBtnBackground").eq(0).click({force:true});
        // cy.wait(2000);
        // cy.get(".MuiButton-root").eq(0).click({force:true});
    
      };