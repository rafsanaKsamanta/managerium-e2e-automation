//create foreign purchase order

export const createForeignPurchaseOrder = (quantity,rate,VAT,quantity1,rate1,VAT1) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("http://mgm.ibos.io/purchase/purchaseOrder/foreign/create");
    cy.wait(1000);
    //select supplier
    cy.get("#supplier > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);
    //select currency
    cy.get("#currency > div")
    .click({ force: true })
    .get("#react-select-mgm-option-14")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get('.form-control').eq(3).click({ force: true }).type("100");
    cy.wait(2000);
       //add item
       cy.get("#item > div")
       .click({ force: true })
       .get("#react-select-mgm-option-0")
       .type("{enter}",{force: true});
       cy.wait(2000);
       cy.get(".form-control").eq(6).click({force:true}).type("1");
       cy.wait(1000);
       cy.get(".form-control").eq(7).click({force:true}).type("10");
       cy.wait(2000);
       cy.get(".btn").eq(6).click({ force: true });
       cy.wait(2000);
    cy.get("form").submit();
    cy.wait(2000);
  };
  //approve foreign PO
  export const approveForeignPo = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(0).click({force:true});
    cy.wait(2000);
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(2).click({force:true});
    cy.wait(2000);
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
    cy.wait(2000);
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(7).click({force:true});
    cy.wait(2000);
  };

 //create shipment LC & other charge in foreign PO
 export const addShippingDetailsInForeignPurchaseOrder = (quantity,rate,VAT,quantity1,rate1,VAT1) => {
  const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
  Cypress.on("uncaught:exception", (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false;
    }
  });     
  cy.visit("https://mgm.ibos.io/purchase/purchaseOrder");
  cy.wait(1000);
  cy.get('.MuiButtonBase-root').eq(3).click({force:true});
  cy.wait(2000);
  cy.get(".MuiSvgIcon-root").eq(34).click({force:true});
  cy.wait(2000);
  //add lc details
  cy.get(".btn").eq(3).click({force:true});
  cy.wait(2000);
  cy.get(".form-control").eq(1).click({force:true}).type("aa",{force: true});
  cy.wait(2000);
  cy.get(".form-control").eq(3).click({force:true}).type("aa",{force: true});
  cy.wait(2000);
  cy.get(".form-control").eq(5).click({force:true}).type("10",{force: true});
  cy.wait(2000);
   //select provider
   cy.get("#provider > div")
   .click({ force: true })
   .get("#react-select-mgm-option-0")
   .type("{enter}",{force: true});
   cy.wait(2000);
  cy.get(".form-control").eq(6).click({force:true}).type("20",{force: true});
  cy.wait(2000);
   //select bankAcc
   cy.get("#bankAcc > div")
   .click({ force: true })
   .get("#react-select-mgm-option-0")
   .type("{enter}",{force: true});
   cy.wait(2000);
  //  cy.get('[id="bankAcc"]').each(($element) => {
  //   cy.wrap($element)
  //     .click({ force: true })
  //     .get("#react-select-mgm-option-2")
  //     .should('exist') // Check if the element exists
  //     .type("{enter}", { force: true });
  // });

   cy.get('.MuiButtonBase-root').eq(2).click({force:true});
   cy.wait(2000);

};