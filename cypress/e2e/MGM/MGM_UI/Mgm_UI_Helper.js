//Purchase
export const PurchaseUI = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
     cy.viewport(1920, 1080);
     //rfq
     cy.visit("https://mgm.ibos.io/purchase/rfq");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //QuotationEntry
     cy.visit("https://mgm.ibos.io/purchase/quotationEntry");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //cs
     cy.visit("https://mgm.ibos.io/purchase/cs");
     cy.wait(1000);
     
     //purchaseOrder
     cy.visit("https://mgm.ibos.io/purchase/purchaseOrder");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
      //goodsReceive
      cy.visit("https://mgm.ibos.io/purchase/goodsReceive");
      cy.wait(1000);
      cy.get(".MuiButtonBase-root").eq(1).click({force:true});
      cy.wait(1000);
       //purchaseReturn
     cy.visit("https://mgm.ibos.io/purchase/purchaseReturn");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
      //purchase payment
      cy.visit("https://mgm.ibos.io/purchase/invoice");
      cy.wait(1000);
      cy.get(".MuiButtonBase-root").eq(1).click({force:true});
      cy.wait(1000);
       //purchase Analytics
     cy.visit("https://mgm.ibos.io/purchase/purchaseAnalytics");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
    //purchase Report
    cy.visit("https://mgm.ibos.io/purchase/purchase");
    cy.wait(1000);
     
  };

  //Sales
export const SalesUI = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
     cy.viewport(1920, 1080);
     //sales Quotation
     cy.visit("https://mgm.ibos.io/sales/salesQuotation");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //sale sOrder
     cy.visit("https://mgm.ibos.io/sales/salesOrder");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //Sales Delivery
     cy.visit("https://mgm.ibos.io/sales/goodsSales");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //sales Return
     cy.visit("https://mgm.ibos.io/sales/salesReturn");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
    //Sales Collection
    cy.visit("https://mgm.ibos.io/sales/SalesCollection");
    cy.wait(1000);
    //sales target
    cy.visit("https://mgm.ibos.io/sales/target");
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(0).click({force:true});
    cy.wait(1000);
    //Sales Report
    cy.visit("https://mgm.ibos.io/sales/sales");
    cy.wait(1000);
    //sales field Collection
    cy.visit("https://mgm.ibos.io/sales/fieldCollection");
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(1).click({force:true});
    cy.wait(1000);
    //sales Analytics
    cy.visit("https://mgm.ibos.io/sales/salesAnalytics");
    cy.wait(1000);
     
  };

   //Account
export const AccountUI = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
     cy.viewport(1920, 1080);
     //Bank Account
     cy.visit("https://mgm.ibos.io/accounts/bankAccount");
     cy.wait(1000);
     cy.get(".btn").eq(2).click({force:true});
     cy.wait(1000);
     //Chart Of Accounts
     cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
     cy.wait(1000);
     cy.get(".btn").eq(2).click({force:true});
     cy.wait(1000);
     //Accounting Journal
     cy.visit("https://mgm.ibos.io/accounts/businessTransaction");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //Budget Landing
     cy.visit("https://mgm.ibos.io/accounts/budgetSetup");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
    //Expense/Advance
    cy.visit("https://mgm.ibos.io/accounts/expenseOrAdvance");
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(1).click({force:true});
    cy.wait(1000);
    //Project
    cy.visit("https://mgm.ibos.io/accounts/Project");
    cy.wait(1000);
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    //financial Report
    cy.visit("https://mgm.ibos.io/accounts/financialReport");
    cy.wait(1000);
    //others Report
    cy.visit("https://mgm.ibos.io/accounts/othersReport");
    cy.wait(1000);
    //fund Transfer
    cy.visit("https://mgm.ibos.io/accounts/fundTransfer");
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(0).click({force:true});
    cy.wait(1000);
    //cheque Setup
    cy.visit("https://mgm.ibos.io/accounts/chequeSetup");
    cy.wait(1000);
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
     
  };

  //Inventory
export const InventoryUI = () => {
  const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
  Cypress.on("uncaught:exception", (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false;
    }
  });
   cy.viewport(1920, 1080);
   //Inventory Request
   cy.visit("https://mgm.ibos.io/inventory/request");
   cy.wait(1000);
   cy.get(".MuiButtonBase-root").eq(1).click({force:true});
   cy.wait(1000);
   cy.get(".MuiButtonBase-root").eq(2).click({force:true});
   cy.wait(1000);
   cy.get(".btn").eq(2).click({force:true});
   cy.wait(1000);
   //Transfer
   cy.visit("https://mgm.ibos.io/inventory/transfer");
   cy.wait(1000);
   cy.get(".MuiButtonBase-root").eq(2).click({force:true});
   cy.wait(1000);
   cy.get(".MuiButtonBase-root").eq(1).click({force:true});
   cy.wait(1000);
   cy.get(".MuiButtonBase-root").eq(0).click({force:true});
   cy.wait(1000);
   //Item Conversion
   cy.visit("https://mgm.ibos.io/inventory/Item-convertion");
   cy.wait(1000);
   cy.get(".btn").eq(2).click({force:true});
   cy.wait(1000);
   //Item Requisition
   cy.visit("https://mgm.ibos.io/inventory/InvRequisition");
   cy.wait(1000);
   cy.get(".btn").eq(2).click({force:true});
   cy.wait(1000);
   //Item Issue
   cy.visit("https://mgm.ibos.io/inventory/InvRequisitionIssue");
   cy.wait(1000);
   cy.get(".MuiButtonBase-root").eq(2).click({force:true});
   cy.wait(1000);
   //stock adjustment
   cy.visit("https://mgm.ibos.io/inventory/stock-adjustment");
   cy.wait(1000);
   cy.get(".MuiButtonBase-root").eq(0).click({force:true});
   cy.wait(1000);
   //stock adjustment
   cy.get(".MuiButtonBase-root").eq(1).click({force:true});
   cy.wait(1000);
   //stock dispose
  //  cy.get(".MuiButtonBase-root").eq(2).click({force:true});
  //  cy.wait(1000);
   //Inventory Report
   cy.visit("https://mgm.ibos.io/inventory/inventoryReport");
   cy.wait(1000);
  //Stock Report
    cy.visit("https://mgm.ibos.io/inventory/stock");
    cy.wait(1000);
    // cy.get(".MuiButtonBase-root").eq(1).click({force:true});
    // cy.wait(1000);
    // cy.get(".MuiButtonBase-root").eq(2).click({force:true});
    // cy.wait(1000);
    // cy.get(".MuiButtonBase-root").eq(3).click({force:true});
    // cy.wait(1000);
  //audit Setup
    cy.visit("https://mgm.ibos.io/inventory/auditSetup");
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(0).click({force:true});
    cy.wait(1000);
    //Stock Audit
    cy.visit("https://mgm.ibos.io/inventory/audit");
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(0).click({force:true});
    cy.wait(1000);  
};

  //HR
  export const HrUI = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
     cy.viewport(1920, 1080);
     //Daily Attendance
     cy.visit("https://mgm.ibos.io/hrAdmin/attendance");
     cy.wait(1000);
     //Leave & Movement
     cy.visit("https://mgm.ibos.io/hrAdmin/leave&Movement");
     cy.wait(1000);
     cy.get(".PrivateSwitchBase-input").eq(1).click({force: true });
     cy.wait(1000);
     //Config/Policies
     cy.visit("https://mgm.ibos.io/hrAdmin/config");
     cy.wait(1000);
     cy.get(".btn").eq(2).click({force:true});
     cy.wait(1000);
     cy.get('.MuiSvgIcon-root').eq(23).click({force:true});
     cy.wait(1000);  
     //Calander
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);  
     cy.get(".btn").eq(2).click({force:true});
     cy.wait(1000);
     cy.get('.MuiSvgIcon-root').eq(23).click({force:true});
     cy.wait(1000);  
     //offday
     cy.get(".MuiButtonBase-root").eq(2).click({force:true});
     cy.wait(1000);  
     cy.get(".btn").eq(2).click({force:true});
     cy.wait(1000);
     cy.get('.MuiSvgIcon-root').eq(23).click({force:true});
     cy.wait(1000);  
    //Leave
    cy.get(".MuiButtonBase-root").eq(3).click({force:true});
    cy.wait(1000);  
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get('.MuiSvgIcon-root').eq(23).click({force:true});
    cy.wait(1000);  
    //Roster
    cy.get(".MuiButtonBase-root").eq(4).click({force:true});
    cy.wait(1000);  
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get('.MuiSvgIcon-root').eq(23).click({force:true});
    cy.wait(1000);  
    //salary
    cy.get(".MuiButtonBase-root").eq(5).click({force:true});
    cy.wait(1000);  
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get('.MuiSvgIcon-root').eq(23).click({force:true});
    cy.wait(1000);  
    //overtime
    cy.get(".MuiButtonBase-root").eq(6).click({force:true});
    cy.wait(1000);  
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get('.MuiSvgIcon-root').eq(23).click({force:true});
    cy.wait(1000);  
    //others
    cy.get(".MuiButtonBase-root").eq(7).click({force:true});
    cy.wait(1000);  
   //Payroll
   cy.visit("https://mgm.ibos.io/hrAdmin/salarySheet");
   cy.wait(1000);
   cy.get(".MuiButtonBase-root").eq(1).click({force:true});
   cy.wait(1000); 
   cy.get('.MuiSvgIcon-root').eq(23).click({force:true});
   cy.wait(1000); 
   //Salary Generate Sheet
   cy.visit("https://mgm.ibos.io/hrAdmin/salaryDisbursment");
   cy.wait(1000);
   //HR Report
   cy.visit("https://mgm.ibos.io/hrAdmin/report");
   cy.wait(1000);     
  };
