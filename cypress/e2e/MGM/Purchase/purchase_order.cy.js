 // Purchase order 
 describe("Purchase order with Vat % Test Cases ",()=>{
    // Purchase order with Vat %
    it("should go to purchase order click on the vutton ,create local PO 2,then approve the created PO",()=>{
        cy.login("01679172828","mgm@admin123");
        cy.createPurchaseOrder();
        // cy.approvePurchaseOrder();
        // cy.receivePurchaseOrder();
        // view
        // cy.viewReceivePurchaseOrder();
        // cy.DirectSupplierPaymentByCash();
    });

   

});