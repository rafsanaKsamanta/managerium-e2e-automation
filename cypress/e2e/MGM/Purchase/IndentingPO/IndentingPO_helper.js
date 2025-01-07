 
 // Indenting Purchase order 
 export const createIndentingPurchaseOrder = (quantity,supplier_rate,customer_rate) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/purchase/purchaseOrder/indenting/create");
    cy.wait(1000);

    //select supplier
    cy.get("#supplier > div")
    .click({ force: true })
    .get("#react-select-mgm-option-1")
    .type("{enter}",{force: true});
    cy.wait(2000);
    //select customer
    cy.get("#customer > div")
    .click({ force: true })
    .get("#react-select-mgm-option-2")
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
    cy.get(".form-control").eq(7).click({force:true}).type(quantity);
    cy.wait(1000);
    //add supplier rate
    cy.get(".form-control").eq(8).click({force:true}).type(supplier_rate);
    cy.wait(1000);
    //add customer rate
    cy.get(".form-control").eq(9).click({force:true}).type(customer_rate);
    cy.wait(2000);
  
    cy.get(".btn").eq(7).click({ force: true });
    cy.wait(2000);
    cy.get("form").submit();
    cy.wait(2000);
    //view indention PO details
    cy.get('.MuiButtonBase-root').eq(4).click({force:true});
    cy.wait(1000);
   // click on view icon
    cy.get('.MuiSvgIcon-root ').eq(28).click({force:true});
    cy.wait(1000);

  };
 //approve purchase order
 export const approveIndentingPO = () => {
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
    cy.get('.MuiButtonBase-root').eq(3).click({force:true});
    cy.wait(1000);
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
    cy.wait(2000);
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(7).click({force:true});
    cy.wait(2000);
  };
// Add shipping address & close the Indenting PO
export const createShippingAndCloseIndentingPO = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/purchase/purchaseOrder");
     //view indention PO details
     cy.get('.MuiButtonBase-root').eq(4).click({force:true});
     cy.wait(1000);
    // click on view icon
     cy.get('.MuiSvgIcon-root ').eq(28).click({force:true});
     cy.wait(1000);
     //create new shipment 
     cy.get('.btn').eq(2).click({force:true});
     cy.wait(2000);
     cy.get('.MuiButtonBase-root').eq(2).click({force:true});
     cy.wait(1000);
     //click on checkbox
     cy.get('[type="checkbox"]').eq(1).check({ force: true });
     cy.wait(2000);
    //save shipment
    cy.get('.btn-checkout').eq(0).click({force:true});
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(2).click({force:true});
    cy.wait(1000);
    // close the order 
    cy.get('.purchase_order_shipment_button').eq(0).click({force:true});
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(4).click({force:true});
    cy.wait(1000);
  };

