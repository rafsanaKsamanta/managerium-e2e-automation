// Purchase order 
describe("Purchase Requisition ",()=>{
    // Purchase order with Vat %
    it("Should go to purchase requisition screen and create a purchase requisition",()=>{
        cy.login("01679172828","123456");
        cy.purchaserequisition("Automated Testing by Samanta","10","1");
        cy.approverequisition();
        cy.purchasequotation();
        cy.approveRFQ();
        cy.createQuotationEntry1("1");
        cy.createQuotationEntry2("2");
        cy.approveQE();

        


    });

   

});