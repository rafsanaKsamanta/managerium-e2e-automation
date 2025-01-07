 // Exclusive sales direct delivery

 export const createDirectSalesExclusive = (quantity,rate,discount,VAT,AIT) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/goodsSales");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
    cy.wait(1000);
    // add 1st item
    cy.get("#customer > div")
    .click({ force: true })
    .get("#react-select-mgm-option-2")
    .type("{enter}",{force: true});
    cy.wait(1000);
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-8")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type(quantity);
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type(rate);
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type(discount);
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
//  add 2nd item
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-9")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("1");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("1000");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("20");
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
    // add 3rd item 
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-11")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("3");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("50");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("0");
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);

    // cy.get(".form-control").eq(36).click({force:true}).type(discount);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(1000);

    cy.get(".MuiButtonBase-root").eq(3).click({force:true});
    cy.wait(1000);
    cy.get(".newBtnBackground").eq(1).click({force:true});
    
  };

  // Inclusive sales direct delivery

 export const createDirectSalesInclusive = (quantity,rate,discount,VAT,AIT) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/goodsSales");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
    cy.wait(1000);
    // add 1st item
    cy.get(".PrivateSwitchBase-input").eq(0).click({force: true });
    cy.wait(1000);
    cy.get("#customer > div")
    .click({ force: true })
    .get("#react-select-mgm-option-2")
    .type("{enter}",{force: true});
    cy.wait(1000);
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-8")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type(quantity);
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type(rate);
    cy.wait(2000);
    //add discount in amount
    cy.get(".PrivateSwitchBase-input").eq(1).click({force: true });
    cy.wait(1000);
    cy.get(".form-control").eq(9).click({force:true}).type(discount);
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
//  add 2nd item
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-9")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("1");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("1000");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("20");
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
    // add 3rd item 
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-11")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("3");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("50");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("0");
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);

    // cy.get(".form-control").eq(36).click({force:true}).type(discount);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(1000);

    cy.get(".MuiButtonBase-root").eq(3).click({force:true});
    cy.wait(1000);
    cy.get(".newBtnBackground").eq(1).click({force:true});
    
  };

  // Exclusive sales order

 // Exclusive sales order

export const createSalesOrderExclusive = (quantity,rate,discount,VAT,AIT) => {
  const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
  Cypress.on("uncaught:exception", (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false;
    }
  });
  cy.visit("https://mgm.ibos.io/sales/salesOrder");
  cy.wait(1000);
  cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
  cy.wait(2000);
//select customer
  cy.get("#customer > div")
  .click({ force: true })
  .get("#react-select-mgm-option-3")
  .type("{enter}",{force: true});
  cy.wait(1000);
  //add  100 item plus
  for(let i=1; i<20; i++)
    {
        const selector = `#react-select-mgm-option-${i}`;
        cy.log(`Current selector: ${selector}`);
        cy.get("#item > div")
          .click({ force: true })
          .get(selector)
          .type("{enter}", { force: true });
          //enter quantity
          cy.get(".form-control").eq(7).click({force:true}).type(quantity);
          // cy.wait(1000);
          //enter item price
          cy.get(".form-control").eq(8).click({force:true}).type(rate);
          // cy.wait(2000);
          //enter item discount
          cy.get(".form-control").eq(9).click({force:true}).type(discount);
          // cy.wait(2000);
          //enter VAT
          cy.get(".form-control").eq(10).click({force:true}).type(VAT);
          // cy.wait(2000);
          //enter AIT
          // cy.get(".form-control").eq(11).click({force:true}).type(AIT);
          // // cy.wait(2000);
          cy.get("#root > div > div.body.width-85 > div > div > div > div > form > div.container-fluid > div:nth-child(2) > div > div.row.mt-1.align-items-center > div.col-lg-1.align-self-end > button").click({ force: true });
          // cy.wait(2000);
     }
 //submit
  cy.get("form").submit();
  cy.wait(1000);

  cy.get(".newBtnBackground").eq(1).click({force:true});
  cy.wait(1000);
};
  
  // Inclusive sales direct delivery

 export const createSalesOrderInclusive = (quantity,rate,discount,VAT,AIT) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/salesOrder");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
    cy.wait(1000);
    // cy.get(".MuiButtonBase-root").eq(6).click({force:true});
    // cy.wait(2000);
    // add 1st item
    cy.get(".PrivateSwitchBase-input").eq(1).click({force: true });
    cy.wait(1000);
    cy.get("#customer > div")
    .click({ force: true })
    .get("#react-select-mgm-option-2")
    .type("{enter}",{force: true});
    cy.wait(1000);
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-8")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type(quantity);
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type(rate);
    cy.wait(2000);
    //add discount in amount
    cy.get(".PrivateSwitchBase-input").eq(1).click({force: true });
    cy.wait(1000);
    cy.get(".form-control").eq(9).click({force:true}).type(discount);
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(5).click({ force: true });
    cy.wait(2000);
//  add 2nd item
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-9")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("1");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("1000");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("20");
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".btn").eq(5).click({ force: true });
    cy.wait(2000);
    // add 3rd item 
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-11")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("3");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("50");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("0");
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(5).click({ force: true });
    cy.wait(2000);

    // cy.get(".form-control").eq(36).click({force:true}).type(discount);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(1000);

    cy.get(".MuiButtonBase-root").eq(3).click({force:true});
    cy.wait(1000);
    cy.get(".newBtnBackground").eq(1).click({force:true});
    
  };

   //Partially deliver the created sales order(with batch & serial item)
   export const PartialdeliverSalesOrder = (deliverQuantity1,deliverQuantity2,deliverQuantity3) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/goodsSales");
    cy.wait(1000);
    cy.get('.sales_collection_action').eq(0).click({force:true});
    cy.wait(2000);
    cy.get("#office > div")
       .click({ force: true })
       .get("#react-select-mgm-option-0")
       .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get("#warehouse > div")
       .click({ force: true })
       .get("#react-select-mgm-option-0")
       .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(3).click({force:true}).type(deliverQuantity1);
    cy.wait(1000);
    cy.get(".form-control").eq(4).click({force:true}).type(deliverQuantity2);
    cy.wait(1000);
    cy.get(".form-control").eq(5).click({force:true}).type(deliverQuantity3);
    cy.wait(1000);
    //add batch
    cy.get('.MuiSvgIcon-root').eq(29).click({force:true});
    cy.wait(2000);
    cy.get('.form-control').eq(8).click({force:true}).type('1', {force: true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(2).click({force:true});
    cy.wait(2000);
    //add serial
    cy.get('.MuiSvgIcon-root').eq(30).click({force:true});
    cy.wait(2000);
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(107).click({force:true});
    cy.wait(2000);
    //add batch
    cy.get('.MuiSvgIcon-root').eq(31).click({force:true});
    cy.wait(2000);
    cy.get('.form-control').eq(6).click({force:true}).type('1', {force: true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(2).click({force:true});
    //submit & view delivery details
    cy.wait(2000);
    cy.get("form").submit();
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiSvgIcon-root').eq(27).click({force:true});
    cy.wait(2000);

  };

