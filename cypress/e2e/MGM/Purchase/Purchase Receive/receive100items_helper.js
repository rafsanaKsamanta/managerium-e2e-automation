 
 // Sales Collection
 export const PurchaseReceive = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/purchase/goodsReceive");
    cy.wait(1000);

    //recevie icon click
    cy.get(".icon_action").eq(0).click({force:true});
    cy.wait(1000);

   

   
  //click on check box
  cy.get(".PrivateSwitchBase-input").eq(0).click({ force: true });
  //click receive button
  cy.get(".btn-order").eq(0).click({ force: true });

   };
   
  

  

 
    

    

