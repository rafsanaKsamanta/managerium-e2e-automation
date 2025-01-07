 
 // Sales Collection
 export const collectionByinvoice1 = (moneyreceiptno,remarks,collection_amount) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/sales/SalesCollection");
    cy.wait(1000);

    //click on collection by invoice button
    cy.get(".btn").eq(5).click({force:true});
    cy.wait(1000);

    //select office
    cy.get("#office > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(1000);

    //select cash type
    cy.get("#cash > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);


    // //select adjustment type
    // cy.get("#expense > div")
    // .click({ force: true })
    // .get("#react-select-mgm-option-0")
    // .type("{enter}",{force: true});
    // cy.wait(2000);

    //type money receipt no
    cy.get(".form-control").eq(1).type(moneyreceiptno);
    cy.wait(1000);


    //type remarks
    cy.get(".form-control").eq(2).type(remarks);
    cy.wait(1000);

    for(let i=0; i<10; i++)
        {    // select customer
            const selector = `#react-select-mgm-option-${i}`;
            cy.log(`Current selector: ${selector}`);
            cy.get("#customer > div")
              .click({ force: true })
              .get(selector)
              .type("{enter}", { force: true });
           //select invoice
           cy.get("#invoice > div")
            .click({ force: true })
            .get("#react-select-mgm-option-0")
            .type("{enter}",{force: true});

            //type collection amount
            cy.get(".form-control").eq(3).type(collection_amount);
            //click add button
            cy.get(".btn").eq(3).click({force:true});
            //cy.wait(2000);

            // cy.get(".form-control").eq(6).click({force:true}).type(rate);
            // cy.get('#root > div > div.body.width-85 > div > div > div > div > form > div > div.MuiBox-root.css-17rbpkv > div > div:nth-child(2) > div:nth-child(7) > button').click({force:true});
        }
        cy.wait(1000);
        cy.get("form").submit();
        cy.wait(3000);

        //sales order approval
   
   
  };
 
    
   export const approveSalesCollection = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(8).click({force:true});
    cy.wait(2000);
    

   

    for (let i = 1; i <= 2; i++){
    
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
    
    cy.wait(2000);
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(5).click({force:true});
    cy.wait(2000);}
  };

    

