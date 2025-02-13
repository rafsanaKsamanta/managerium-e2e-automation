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
    cy.get('#user > div', { timeout: 10000 }).should('be.visible')
    //cy.get("#user > div")
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
   cy.wait(2000);

  // click create from requisition
  //cy.get('#isRequisition', { timeout: 10000 }).should('be.visible').eq(0).check({ force: true });
  cy.get('#isRequisition').eq(0).check({ force: true });
  cy.wait(1000);


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
  cy.get('.btn').eq(2).click({force:true});
  cy.wait(1000);   

    };

    //approve request of quotation
    export const approveRFQ = () => {
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
      Cypress.on("uncaught:exception", (err) => {
        /* returning false here prevents Cypress from failing the test */
        if (resizeObserverLoopErrRe.test(err.message)) {
          return false;
        }
      });
      cy.visit("https://mgm.ibos.io/commonapproval");
      cy.wait(1000);
      cy.get('.rowItem').eq(2).click({force:true}); 
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
 // QE Create 01 

 export const createQuotationEntry1 = (rate) => {
  const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
  Cypress.on("uncaught:exception", (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false;
    }
  });
  cy.visit("https://mgm.ibos.io/purchase/quotationEntry");
  cy.wait(1000);

   // click on create button
   cy.get('.MuiButtonBase-root').eq(2).click({force:true});
   cy.wait(1000);

   // select office 
   cy.get("#rfqType > div")
   .click({ force: true })
   .get("#react-select-mgm-option-0")
   .type("{enter}",{force: true});
   cy.wait(2000);

   //select rfq code
   cy.get('#rfq > div', { timeout: 10000 }).should('be.visible')
   .click({ force: true })
   .get("#react-select-mgm-option-0")
   .type("{enter}",{force: true});
   cy.wait(1000);

   // select Supplier
   cy.get("#supplier > div")
   .click({ force: true })
   .get("#react-select-mgm-option-4")
   .type("{enter}",{force: true});
   cy.wait(1000);

  
   //input rate 

   cy.get(".form-control").eq(3).click({force:true}).type(rate);
   cy.get(".form-control").eq(4).click({force:true}).type(rate);
   cy.get(".form-control").eq(5).click({force:true}).type(rate);
   cy.get(".form-control").eq(6).click({force:true}).type(rate);
   cy.get(".form-control").eq(7).click({force:true}).type(rate);

  //click on save button 
  cy.get('.btn').eq(3).click({force:true});
  cy.wait(1000);   

    };
// QE Create 02 

export const createQuotationEntry2 = (rate) => {
  const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
  Cypress.on("uncaught:exception", (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false;
    }
  });
  cy.visit("https://mgm.ibos.io/purchase/quotationEntry");
  cy.wait(1000);

   // click on create button
   cy.get('.MuiButtonBase-root').eq(2).click({force:true});
   cy.wait(1000);

   // select office 
   cy.get("#rfqType > div")
   .click({ force: true })
   .get("#react-select-mgm-option-0")
   .type("{enter}",{force: true});
   cy.wait(1000);

   //select rfq code
   cy.get("#rfq > div")
   .click({ force: true })
   .get("#react-select-mgm-option-0")
   .type("{enter}",{force: true});
   cy.wait(1000);

   // select Supplier
   cy.get("#supplier > div")
   .click({ force: true })
   .get("#react-select-mgm-option-6")
   .type("{enter}",{force: true});
   cy.wait(1000);

  
   //input rate 

   cy.get(".form-control").eq(3).click({force:true}).type(rate);
   cy.get(".form-control").eq(4).click({force:true}).type(rate);
   cy.get(".form-control").eq(5).click({force:true}).type(rate);
   cy.get(".form-control").eq(6).click({force:true}).type(rate);
   cy.get(".form-control").eq(7).click({force:true}).type(rate);

  //click on save button 
  cy.get('.btn').eq(3).click({force:true});
  cy.wait(1000);   

    };

  //approve quotation entry
  export const approveQE = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(5).click({force:true}); 
    // $$('.rowItem')
    cy.wait(2000);
    // qe 1 approve
    //eye icon click
    cy.get('.MuiSvgIcon-root').eq(37).click({force:true});
    //approve button click
    cy.get('.btn').eq(3).click({force:true});
    //yes button click
    cy.get('.MuiButtonBase-root').eq(3).click({force:true});

    //qe 2 approve
    //eye icon click
    cy.get('.MuiSvgIcon-root').eq(36).click({force:true});
    //approve button click
    cy.get('.btn').eq(3).click({force:true});
    //yes button click
    cy.get('.MuiButtonBase-root').eq(3).click({force:true});

};



