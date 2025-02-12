 // Create Advance
 describe("Create Advance from Different office ",()=>{
    // Purchase order with Vat %
    it("should login then go to advance landing and create an advance,then approve the advance from approval, the payment the advance, after payment it should be go to paid & view the details ",()=>{
        cy.login("01679172828","123456");
        for(let i = 0 ; i <=2 ; i++)
        {
        cy.createAdvance("10");}
        cy.approveAdvance();
        cy.paymentAdvance();
        //cy.CheckJournal();
    });
});