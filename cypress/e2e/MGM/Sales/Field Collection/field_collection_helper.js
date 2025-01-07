// Create field collection by cash
export const createFieldCollection = (amount) => {
  const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
  Cypress.on("uncaught:exception", (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false;
    }
  });
  cy.visit("https://mgm.ibos.io/sales/fieldCollection");
  cy.wait(1000);
     cy.get(".btn").eq(2).click({force:true});
     cy.wait(1000);
     //select office
     cy.get("#office > div")
     .click({ force: true })
     .get("#react-select-mgm-option-0")
     .type("{enter}",{force: true});
     cy.wait(2000);

     //select multiple customers customer
     for(let i=1; i<60; i++)
        {
            const selector = `#react-select-mgm-option-${i}`;
            cy.log(`Current selector: ${selector}`);
            cy.get("#customer > div").click({ force: true }).get(selector).type("{enter}", { force: true });
            // cy.wait(2000);
            // enter money receipt No.
            cy.get('.form-control').eq(1).click({force:true}).type("Money Rep" + i);
            // cy.wait(2000);
            //select collection type 
            cy.get("#collectionType > div")
            .click({ force: true })
            .get("#react-select-mgm-option-0")
            .type("{enter}",{force: true});
            // cy.wait(2000);
            // add amount
            cy.get(".form-control").eq(4).click({force:true}).type(amount);
            // cy.wait(1000);
            //click on add button
            cy.get('.btn').eq(3).click({force:true});
            // cy.wait(1000);
        }
            //submit
            cy.get("form").submit();
};
//field Collection deposite by cash
export const collectionReceive = () => {
  const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
  Cypress.on("uncaught:exception", (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false;
    }
  });
  cy.visit("https://mgm.ibos.io/sales/fieldCollection");
  cy.wait(3000);
  //click on all check box
  cy.get('input[type="checkbox"][name="isAllCheck"][aria-label="Select all"]')
  .check({ force: true });
  cy.wait(2000);
  //click on deposit button
  cy.get('.btn').eq(4).click({force:true});
  cy.wait(2000);

 //select office when office is called inside a module also outside a module
 cy.get('body > div:nth-of-type(2) > div:nth-of-type(3) > div > div:first-of-type > form > div > div > div:first-of-type > div:nth-of-type(2) > div > div > div:first-of-type > div:nth-of-type(2)')
  .click({ force: true, multiple: true })
  .get('#react-select-mgm-option-0')
  .type('{enter}', { force: true });
  cy.wait(2000);
  //select cash type
  cy.get("#cash > div")
  .click({ force: true })
  .get("#react-select-mgm-option-0")
  .type("{enter}",{force: true});
  cy.wait(2000);
  //save
  cy.get('.MuiButtonBase-root').eq(9).click({force:true});
  cy.wait(2000);

  
};