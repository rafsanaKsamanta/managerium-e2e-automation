//Foreign Purchase order 
describe(" Foreign Purchase order Test Cases ",()=>{
   
    it("should go to foreign purchase order & create a FPO after create approve the FPO then go to add shipping details on FPO",()=>{
       cy.login("01234444553","123456");
       cy.wait(1000);
       cy.createForeignPurchaseOrder(); 
       cy.wait(1000);
       cy.approveForeignPo();
       cy.wait(1000);
       cy.addShippingDetailsInForeignPurchaseOrder();
    });

});