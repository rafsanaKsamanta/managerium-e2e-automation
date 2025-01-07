// can create 100 item
export const CreateItem = (itemName, itemCode) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/config/item");
    cy.wait(1000);
    cy.get('#root > div > div.body.width-85 > div > div > div > form > div > div > div.purchase_order_header > div.header_right > button ').click({force:true});
    cy.wait(1000);
    //using loop for creating 100 plus item
    for (let i = 100; i < 101; i++) {
      const itemCode = `ItemCode_${i}`; // Example: ItemCode_0, ItemCode_1, ...
      const itemName = `ItemName_${i}`; // Example: ItemName_0, ItemName_1, ...

      // enter item name & code
      cy.get('#root > div > div.body.width-85 > div > div > div > div > form > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.d-.flex.row.mt-3 > div:nth-child(1) > div.form-container > div > input').click({force:true}).type(itemCode);
      cy.wait(1000);
      cy.get('#root > div > div.body.width-85 > div > div > div > div > form > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.d-.flex.row.mt-3 > div:nth-child(2) > div.form-container > div > input').click({force:true}).type(itemName);
      cy.wait(1000);

      //select item Category
      cy.get("#itemCategory > div").click({ force: true }).get(`#react-select-mgm-option-0`).type("{enter}", { force: true });
      // Select UOM and save the item
      cy.get("#uom > div").click({ force: true }).get(`#react-select-mgm-option-25`).type("{enter}", { force: true });
      cy.wait(1000);
      cy.get("form").submit();
      cy.wait(1000);
    }

  };
