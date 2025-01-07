 
 // Sales Collection
 export const DuelistRowCollection = (moneyreceiptno,remarks,received_amount,collection,discount) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/sales/SalesCollection");
    cy.wait(1000);

    //click on action icon
    cy.get(".MuiSvgIcon-root").eq(37).click({force:true});
    cy.wait(1000);

    //select cash type
    cy.get("#cash > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);


    //select adjustment type
    cy.get("#expense > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);

    //type money receipt no
    cy.get(".form-control").eq(1).type(moneyreceiptno);
    cy.wait(2000);


    //type remarks
    cy.get(".form-control").eq(2).type(remarks);
    cy.wait(2000);
    
    //select employee
    cy.get("#employeeName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);

      //type received amount
      cy.get(".form-control").eq(3).type(received_amount);
      cy.wait(2000);

      //click add button
      cy.get(".btn").eq(3).click({force:true});
      cy.wait(2000);

    //click add button
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(2000);

   
  };
 
    

    

