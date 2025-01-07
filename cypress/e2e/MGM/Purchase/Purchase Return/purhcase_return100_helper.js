 
 // purhcase return
 export const PurchaseReturn100 = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/purchase/purchaseReturn");
    cy.wait(1000);

    // // full return click
    // cy.get(".icon_action").eq(0).click({force:true});
    // cy.wait(1000);

   

   
  //click on check box
  cy.get("#simple-tabpanel-0 > div > p > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.tableContainer.css-13xy2my > table > tbody > tr:nth-child(1) > td:nth-child(8) > span > small:nth-child(1)").click({ force: true });
  cy.wait(1000);
  //click receive button
  cy.get(".btn").eq(2).click({ force: true });

   };
   
  

  

 
    

    

