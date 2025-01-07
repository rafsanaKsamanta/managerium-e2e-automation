it("At first login,Then create an exclusive sales order,then approved the order, go to sales delivery from approved SO deliver the order then see SO delivery details, then see accounting journal for the sales",()=>{
    cy.login("01679172828","mgm@Admin123");
    cy.createSalesOrderExclusive("1","200","10","10");
  cy.approveSalesOrder();
    // cy.deliverSalesOrder();
    // //date type pick
    // const dateToEnter = '2023-10-08';
    // cy.viewAccountingJournal(dateToEnter);
  });