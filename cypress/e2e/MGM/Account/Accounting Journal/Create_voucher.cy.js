 // Create Accounting Journal voucher
 describe("Create different type of voucher ",()=>{
    // Purchase order with Vat %
    it("should login then go to advance landing and create an advance,then approve the advance from approval, the payment the advance, after payment it should be go to paid & view the details ",()=>{
        cy.login("01679172828","mgm@admin123");
        // for(let i=0; i<5; i++)
        // {
        cy.createVoucher("5");
        // }
   
        // cy.approveVoucher();
    
   
        
        
    });
});