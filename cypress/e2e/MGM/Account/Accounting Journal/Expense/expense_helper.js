//create Advance
export const createExpense = (remarks,amount) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
  cy.visit("https://mgm.ibos.io/accounts/expenseOrAdvance");
  cy.wait(1000);
  //click create expense for employee
  cy.get('.MuiButtonBase-root').eq(1).click({force:true});
  cy.wait(1000);

  //select employee
  cy.get("#partnerPayeeName > div")
  .click({ force: true })
  .get("#react-select-mgm-option-3")
  .type("{enter}",{force: true});
  cy.wait(1000);
  //select office
  cy.get("#office > div")
  .click({ force: true })
  .get("#react-select-mgm-option-1")
  .type("{enter}",{force: true});
  cy.wait(1000);

    //select accounitng gl  expense item limit = 68
    for(let i=0; i<=2; i++)
        {
            const selector = `#react-select-mgm-option-${i}`;
            cy.log(`Current selector: ${selector}`);
            cy.get("#chartOfAccounts > div")
              .click({ force: true })
              .get(selector)
              .type("{enter}", { force: true });
              //type remarks and amount
            cy.get('.form-control').eq(3).click({force:true}).type(remarks);
            cy.get('.form-control').eq(4).click({force:true}).type(amount);
            cy.get(".btn").eq(2).click({ force: true });
            //cy.wait(2000);
              
        }
        //save botton
        cy.get(".MuiButton-root").eq(1).click({ force: true });
        cy.wait(2000);
        
  };

//Expence approval
export const approveExpense = () => {
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on("uncaught:exception", (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});
cy.visit("https://mgm.ibos.io/commonapproval");
cy.wait(1000);
cy.get('.rowItem').eq(10).click({force:true});
cy.wait(2000);
cy.get('[type="checkbox"]').eq(1).check({ force: true });
cy.wait(2000);
cy.get('.btn').eq(3).click({force:true});
cy.wait(2000);
cy.get('.MuiButtonBase-root').eq(6).click({force:true});
cy.wait(2000);
};

//payment Expense 
export const paymentExpense = () => {
  const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
  Cypress.on("uncaught:exception", (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false;
    }
  });
  cy.visit("https://mgm.ibos.io/accounts/expenseOrAdvance");
  cy.wait(1000);
  //click on checkbox 
  cy.get('[type="checkbox"]').eq(1).click({force:true});
  cy.wait(1000);
  //click Payment button
  cy.get('.btn').eq(3).click({force:true});
  cy.wait(1000);
  //cash
  cy.get("#cash > div")
      .click({ force: true })
      .get("#react-select-mgm-option-0")
      .type("{enter}",{force: true});
      cy.wait(1000);
  // click Save button
  cy.get('.MuiButtonBase-root').eq(11).click({force:true});
  cy.wait(1000);
  //check in paid page
  cy.get('.MuiButtonBase-root').eq(4).click({force:true});
  cy.get('.MuiTableCell-root').eq(11).click({force:true});
  cy.wait(1000);
  
};


  
