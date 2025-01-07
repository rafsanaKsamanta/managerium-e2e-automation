 // Create Expense
 describe("Create Expense from Different office ",()=>{
    // Purchase order with Vat %
    it("should login then go to expense landing and create an expense,then approve the expense from approval, the payment the expense, after payment it should be go to paid & view the details ",()=>{
        cy.login("01679172828","123456");
        for(let i=0;i<=10;i++){
        cy.createExpense("Demo Expense","10");
        //cy.approveExpense();
        //cy.paymentExpense();
        //cy.CheckJournal();
        }
    });
});