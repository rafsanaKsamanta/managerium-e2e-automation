      //Exclusive  sales order
      describe("sales order Test Cases ",()=>{
          it("should created a Exclusive sales order & view the created sales details",()=>{
              cy.login("01928374657","123456");
              cy.createSalesOrderExclusive("1","200","10","10","5");
          });

     //Inclusive  sales order
        it("should created a Inclusive sales order & view the created sales details",()=>{
            cy.login("01928374657","123456");
            cy.createSalesOrderInclusive("1","200","10","10","5");
        });
      // Approved sales order  
        it(" Approve the created sales order",()=>{
            cy.login("01928374657","123456");
            cy.approveSalesOrder();
         });
      //  partially deliver the sales order
        it("partially deliver the created sales order & view delivered order",()=>{
            cy.login("01928374657","123456");
            cy.PartialdeliverSalesOrder("1","1","1");
            
         });
        //full return & view
         it("fully return the created sales order",()=>{
            cy.login("01928374657","123456");
            cy.returndeliverSalesOrder();
            cy.viewReturndetails();  
         });
        //Approve full return 
         it("Approve full return",()=>{
            cy.login("01928374657","123456");
            cy.ApproveFullReturn();
         });
       // view accounting journal after return 
        it("view Accounting Journal",()=>{
            cy.login("01928374657","123456");
            //date type pick
            const dateToEnter = '2023-06-20';
            cy.viewAccountingJournal(dateToEnter);
            //date type pick
         });

    it("At first login,Then create an exclusive sales order,then approved the order, go to sales delivery from approved SO deliver the order then see SO delivery details, then see accounting journal for the sales",()=>{
      cy.login("01679172828","mgm@Admin123");
      cy.createSalesOrderExclusive("1","200","10","10","5");
      cy.approveSalesOrder();
      cy.deliverSalesOrder();
      //date type pick
      const dateToEnter = '2023-10-08';
      cy.viewAccountingJournal(dateToEnter);
    });
});