 
 // Stock transfer with new item
 export const stockTransferNewItem = (remarks,trnsQty,item_name) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/inventory/Item-stock-convertion");
    cy.wait(2000);


    //click on Item stock conversion button
    
    //cy.wait(2000);
    cy.get(".btn").eq(3).click({force:true});
    cy.wait(1000);

    //select conversion type
    cy.get("#conversionType > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(1000);

    // type remarks
    cy.get(".form-control").eq(0).type(remarks);
    cy.wait(1000);

    //click on Transfer to new item checkbox
    cy.get('.PrivateSwitchBase-input').eq(0).click({force:true});
    cy.wait(1000);

    //select from item
    cy.get("#fromItemName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-1")
    .type("{enter}",{force: true});
    cy.wait(1000);

    // type remarks
    cy.get(".form-control").eq(2).type(trnsQty);
    cy.wait(1000);

    //Change new item name
    cy.get(".form-control").eq(4).type(item_name);
    cy.wait(1000);
    

    //click on add button
    cy.get(".btn").eq(3).click({force:true});
    cy.wait(1000);

    //click on save button
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
  };
    
    //approve conversion
       
   export const approveStockConversion = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(27).click({force:true}); 
    // $$('.rowItem')
    cy.wait(2000);
    
    for (let i = 1; i <= 1; i++){
    
    //cy.get('[type="checkbox"]').eq(1).check({ force: true });
    cy.get('#root > div > div.body.width-85 > div > div > div > div > div.container-fluid > div.purchase_order_table.section_table > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.tableContainer.css-13xy2my > table > tbody > tr:nth-child(1) > td:nth-child(7) > span > button > svg').click({ force: true });
    cy.wait(2000);

    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(2).click({force:true});
    cy.wait(2000);}
   };


  

