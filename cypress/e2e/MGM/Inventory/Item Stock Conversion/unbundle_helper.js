 
 // Stock conversion unbundle
 export const unbundle = (remarks,trnsQty,avg_rate) => {
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
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);

    //select conversion type
    cy.get("#conversionType > div")
    .click({ force: true })
    .get("#react-select-mgm-option-2")
    .type("{enter}",{force: true});
    cy.wait(1000);

    // type remarks
    cy.get(".form-control").eq(0).type(remarks);
    cy.wait(1000);


    //select from item
    cy.get("#fromItemName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(1000);

    // type required quanity
    cy.get(".form-control").eq(2).type(trnsQty);
    cy.wait(1000);

    //Test with unequal avg rate

    for(let i=0; i<10; i++)
        {    // select unbundle item name
            const selector = `#react-select-mgm-option-${i}`;
            cy.log(`Current selector: ${selector}`);
            cy.get("#toItemName > div")
              .click({ force: true })
              .get(selector)
              .type("{enter}", { force: true });
            // select unbundle qty  
            cy.get(".form-control").eq(4).type(trnsQty);
            //cy.wait(1000);

            //click on add button
            cy.get(".btn").eq(3).click({force:true});
            //cy.wait(1000);

        }
    
    //click on save button
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    //click on delete all items
    for(let i=0; i<9; i++)
    {cy.get(".MuiSvgIcon-root").eq(33).click({force:true});
    //cy.wait(1000);
    }
    for(let i=1; i<=4; i++){
    //select unbundle item 
    const selector = `#react-select-mgm-option-${i}`;
    cy.log(`Current selector: ${selector}`);
    cy.get("#toItemName > div")
      .click({ force: true })
      .get(selector)
      .type("{enter}", { force: true });
    //clear avg rate and type avg rate
    cy.get(".form-control").eq(3).clear().type("1,571.305");
    //cy.wait(1000);

    // select unbundle qty  
    cy.get(".form-control").eq(4).type(trnsQty);
    //cy.wait(1000);

    //click on add button
    cy.get(".btn").eq(3).click({force:true});
    }
    //click on save button
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get('body').type('{ctrl}f');
      
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

   //chcek for stock
   export const stockCheck = (itemName) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/inventory/inventoryReport");
    cy.wait(1000);
    cy.get('.MuiInputBase-input').eq(0).click({force:true}).type(itemName);
    cy.wait(3000);
    //click on closing quantity 
    cy.get('.MuiTableCell-root').eq(21).click({force:true});
    
   };
   

  

