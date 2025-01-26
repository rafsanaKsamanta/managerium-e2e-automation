export const createPurchaseOrderWith100Item = (quantity,rate) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/purchase/purchaseOrder");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root ').eq(1).click({force:true});
    cy.wait(1000);
   
    //select supplier
    cy.get("#supplier > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);
     //select category
    //  cy.get("#category > div")
    //  .click({ force: true })
    //  .get("#react-select-mgm-option-0")
    //  .type("{enter}",{force: true});
    //  cy.wait(2000);
    //add  100 item plus
    for(let i=0; i<20; i++)
    {
        const selector = `#react-select-mgm-option-${i}`;
        cy.log(`Current selector: ${selector}`);
        cy.get("#item > div")
          .click({ force: true })
          .get(selector)
          .type("{enter}", { force: true });
        cy.get(".form-control").eq(10).click({force:true}).type(quantity);
        cy.get(".form-control").eq(11).click({force:true}).type(rate);
        cy.get('#root > div > div.body.width-85 > div > div > div > div > form > div > div.MuiBox-root.css-17rbpkv > div > div:nth-child(2) > div:nth-child(7) > button').click({force:true});
    }
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(3000);
    // cy.get('#mui-p-84103-P-0 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.tableContainer.css-13xy2my > table > tbody > tr:nth-child(1) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-sizeMedium.css-11hnn3m > div > button:nth-child(2) > svg > path').click({force:true});
    cy.wait(3000);
  
  };

  export const viewPurchaseOrderWith100Item = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/purchase/purchaseOrder");
    cy.wait(1000);
    cy.get('.MuiSvgIcon-root').eq(35).click({force:true});
    cy.wait(1000);
   
  
  };
