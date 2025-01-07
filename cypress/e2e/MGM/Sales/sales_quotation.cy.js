describe("MGM Test Cases ",()=>{

it("should be create a sales quotation with 3 item & gross discount only & Approve the sales quotation",()=>{
       cy.login("01928374657","123456");
       cy.createSalesQuotationGross("2","00","20");
      //  cy.approveSalesQuotation();
    });
   //  it("should be create a sales quotation with 3 item & line discount only then edit Approve the sales quotation",()=>{
   //      cy.login("01928374657","123456");
   //      cy.createSalesQuotationLine("2","00","10","1","1000","200","3","50","50");
   //      cy.editsalesQuotation();
   //      cy.approveSalesQuotation();
   //   });

    it(" Approve the created sales quotation",()=>{
        cy.login("01928374657","123456");
        cy.approveSalesQuotation();
     });
    
    it("create sales order from quotation",()=>{
        cy.login("01928374657","123456");
        cy.orderFromQuotation();
     });

    it(" Approve the created sales order",()=>{
        cy.login("01928374657","123456");
        cy.approveSalesOrder();
     });
   
    it("fully deliver the created sales order & view delivered order",()=>{
        cy.login("01928374657","123456");
        cy.deliverSalesOrder();
        
     });
     it("fully return the created sales order",()=>{
        cy.login("01928374657","123456");
        cy.returndeliverSalesOrder();
        
     });
     it("view full return",()=>{
        cy.login("01928374657","123456");
        cy.viewReturndetails();
     });

     it("Approve full return",()=>{
        cy.login("01928374657","123456");
        cy.ApproveFullReturn();
     });

      it("view Accounting Journal",()=>{
        cy.login("01928374657","123456");
        //date type pick
        const dateToEnter = '2023-06-20';
        cy.viewAccountingJournal(dateToEnter);
        //date type pick
     });
   



    });