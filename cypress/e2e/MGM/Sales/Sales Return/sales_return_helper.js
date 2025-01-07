 
 // Sales Collection
 export const salesReturnFull = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/sales/salesReturn");
    cy.wait(3000);

    //Full Return

    //click on full button
    
    cy.wait(2000);
    cy.get(".text-decoration-underline").eq(0).click({force:true});
    cy.wait(1000);

    //select office
    cy.get("#office > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(1000);

    //select warehouse
    cy.get("#warehouse > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(1000);


    //click on save button
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
   
  };
 
    
   export const approveSalesReturn = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(7).click({force:true});
    cy.wait(2000);
    
    for (let i = 1; i <= 1; i++){
    
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
    
    cy.wait(2000);
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(4).click({force:true});
    cy.wait(2000);}
 };

  

