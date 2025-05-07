// Purchase requisition 
describe("Login with valid credentials",()=>{
    // Purchase order with Vat %
    it("Should login with valid credentials",()=>{
        cy.login("01679172828","123456");
        cy.purchaserequisition("Automated Testing by Samanta","10","1");
        // cy.approverequisition();
        // cy.purchasequotation();
        // cy.approveRFQ();
        // cy.createQuotationEntry1("1");
        // cy.createQuotationEntry2("2");
        // cy.approveQE();
        // cy.ComparativeStatement();

        


    });


   

});

// Purchase requisition 
// describe("Create Purchase Requisition ",()=>{
//     // Purchase order with Vat %
//     it("Should purchase requisition",()=>{
//         cy.login("01679172828","123456");
        // cy.purchaserequisition("Automated Testing by Samanta","10","1");
        // cy.approverequisition();
        // cy.purchasequotation();
        // cy.approveRFQ();
        // cy.createQuotationEntry1("1");
        // cy.createQuotationEntry2("2");
        // cy.approveQE();
        // cy.ComparativeStatement();

        


    // });


   

// });