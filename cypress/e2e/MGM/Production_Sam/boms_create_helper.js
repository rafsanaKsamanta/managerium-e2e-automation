 
 // Bom Create for finished goodes
 export const bomsCreate = (BomName,LotSize,MaterialName1,MaterialQty,wastage,MaterialName2) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/production/billOfMaterial");
    cy.wait(2000);


    //click on Bill of Material create button
    
    //cy.wait(2000);
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);

    //select FG Item
    cy.get("#itemName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-1")
    .type("{enter}",{force: true});
    cy.wait(1000);

    // type BOM Name ; Bom name should be unique
    cy.get(".form-control").eq(0).type(BomName);
    cy.wait(1000);
    // type Lot Size
    cy.get(".form-control").eq(1).type(LotSize);
    cy.wait(1000);

    //search and add material item 1 ; cant use loop because field is not ddl 
    cy.get("#value > div")
    .click({ force: true }).type(MaterialName1);
    cy.wait(2000);
    cy.get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    //cy.wait(1000);
    //type material quantity
    cy.get(".form-control").eq(2).type(MaterialQty);
    //cy.wait(1000);
    //type material quantity
    cy.get(".form-control").eq(3).type(wastage);
    //cy.wait(1000);
    //click on add button
    cy.get(".btn").eq(3).click({force:true});
    cy.wait(1000);
    
    //search and add material item 2
    cy.get("#value > div")
    .click({ force: true }).type(MaterialName2);
    cy.wait(2000);
    cy.get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    //cy.wait(1000);
    //type material quantity
    cy.get(".form-control").eq(2).type(MaterialQty);
    //cy.wait(1000);
    //type material quantity
    cy.get(".form-control").eq(3).type(wastage);
    //cy.wait(1000);
    //click on add button
    cy.get(".btn").eq(3).click({force:true});
    //cy.wait(1000);
    //click on save button
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    
      
  };
    
    //approve conversion
       
   export const approveUnbundle = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(24).click({force:true});
    cy.wait(2000);
    
    for (let i = 1; i <= 1; i++){
    
    //cy.get('[type="checkbox"]').eq(1).check({ force: true });
    cy.get('#root > div > div.body.width-85 > div > div > div > div > div.container-fluid > div.purchase_order_table.section_table > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.tableContainer.css-13xy2my > table > tbody > tr:nth-child(1) > td:nth-child(7) > span > button > svg').click({ force: true });
    cy.wait(2000);

    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(1).click({force:true});
    cy.wait(2000);}
   };

   //chcek for stock and duplicate
   export const stockCheck = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/inventory/Item-stock-convertion");
    cy.wait(1000);
    cy.get('.rowItem').eq(24).click({force:true});
    cy.wait(2000);
    

    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(1).click({force:true});
    cy.wait(2000);
   };
   

  

