  //Direct Purchase Payment
  describe("Direct Purchase Payment Test Cases ",()=>{
    it("should go on supplier payment landing & click dollar icon from due list & paid bill from invoice",()=>{
        cy.devlogin("01928374657","123456");
        cy.DirectSupplierPaymentByCash();
        cy.DirectSupplierPaymentByBank();
    });
    
    it("should view the accounting journal of paid bill",()=>{
        cy.devlogin("01928374657","123456");
         //date type pick
         const dateToEnter = '2023-07-04';
       cy.viewDevAccountingJournal(dateToEnter);
    });
});