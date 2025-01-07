 //Foreign Purchase order 
 describe(" Foreign Purchase order Test Cases ",()=>{
   
    it("should go to foreign purchase order & create a FPO after create approve the FPO then go to add shipping details on FPO",()=>{
        cy.login("01679172828","mgm@Admin123");
        for(let i=0; i<3; i++)
        {
       cy.createForeignPurchaseOrder(); 
       cy.approveForeignPo();
        }
    //    cy.addShippingDetailsInForeignPurchaseOrder();
    });

});