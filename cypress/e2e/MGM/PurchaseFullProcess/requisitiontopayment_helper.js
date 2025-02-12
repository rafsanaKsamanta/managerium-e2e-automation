// Purchase Requisiton Create 
export const purchaserequisition = (remarks,req_quantity,rate) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/purchase/purchaseRequisition");
    cy.wait(1000);

    // click on create button
    cy.get('.btn').eq(2).click({force:true});
    cy.wait(1000);

    // select employee
    cy.get("#user > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);

    // select office 
    cy.get("#office > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(1000);

    // select warehouse
    cy.get("#warehouse > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(1000);
    // select inventory type
    cy.get("#inventoryType > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(1000);

    // input remarks
    cy.get(".form-control").eq(1).type(remarks);
    cy.wait(1000);


    for(let i=0; i<5; i++)
      {
    //select item
    const selector = `#react-select-mgm-option-${i}`;
        cy.log(`Current selector: ${selector}`);
        cy.get("#item > div")
          .click({ force: true })
          .get(selector)
          .type("{enter}", { force: true });
        //input request qty
        cy.get(".form-control").eq(2).click({force:true}).type(req_quantity);
        //input rate 
        cy.get(".form-control").eq(3).click({force:true}).type(rate);
        //click add button
        cy.get('.btn').eq(4).click({force:true});
        cy.wait(1000); }


        //click on save button 
        cy.get('.btn').eq(3).click({force:true});
        cy.wait(1000);
        //click on yes button
        cy.get('.MuiButtonBase-root').eq(5).click({force:true});
        cy.wait(1000);
        
         };
       //purchase requisition approval
       export const approverequisition = () => {
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
        Cypress.on("uncaught:exception", (err) => {
          /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false;
          }
        });
        cy.visit("https://mgm.ibos.io/commonapproval");
        cy.wait(1000);
        cy.get('.rowItem').eq(4).click({force:true}); 
        // $$('.rowItem')
        cy.wait(2000);
        
        cy.get('[type="checkbox"]').eq(1).check({ force: true });
        
        //cy.get('[type="checkbox"]').eq(1).check({ force: true });
        // cy.get('#root > div > div.body.width-85 > div > div > div > div > div.container-fluid > div.purchase_order_table.section_table > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.tableContainer.css-13xy2my > table > tbody > tr:nth-child(1) > td:nth-child(7) > span > button > svg').click({ force: true });
        // cy.wait(2000);
    
        cy.get('.btn').eq(3).click({force:true});
        cy.wait(2000);
        cy.get('.MuiButtonBase-root').eq(5).click({force:true});
        cy.wait(2000); 


  };

   // RFQ Create

 export const purchasequotation = () => {
  const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
  Cypress.on("uncaught:exception", (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false;
    }
  });
  cy.visit("https://mgm.ibos.io/purchase/rfq");
  cy.wait(1000);

   // click on create button
   cy.get('.MuiButtonBase-root').eq(2).click({force:true});
   cy.wait(1000);

  // click create from requisition
  cy.get('#isRequisition').eq(0).check({ force: true });
  cy.wait(500);


  //select requisition code
    cy.get("#purchaseRequisition > div")
    .click({ force: true })

    cy.get('[id^="react-select-mgm-option-"]') // Select all options dynamically
  .last() // Get the last option
  .scrollIntoView() // Ensure it's visible
  .click({ force: true }); // Click to select

  cy.wait(2000); // Optional wait

   // select office 
   cy.get("#office > div")
   .click({ force: true })
   .get("#react-select-mgm-option-0")
   .type("{enter}",{force: true});
   cy.wait(1000);

  //click on save button 
  cy.get('.btn').eq(3).click({force:true});
  cy.wait(1000);   

    };

    //