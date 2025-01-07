
 describe("Local Purchase order with 100 plus item ",()=>{

    it("should go to local purchase order click on the button ,create local PO with 100 plus item",()=>{
        cy.login("01234444553","123456");
         cy.createPurchaseOrderWith100Item("200","1");
        cy.wait(1000);
        // cy.viewPurchaseOrderWith100Item();
        cy.approvePurchaseOrder();
    });

    
   

});