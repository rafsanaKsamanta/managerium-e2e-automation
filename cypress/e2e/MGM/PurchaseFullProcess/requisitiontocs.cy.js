// Purchase requisition 
describe("Purchase All Process",()=>{

     // Login before each test case
  beforeEach(() => {
    cy.login("01679172828", "123456");
  });

    // Purchase order with Vat %
    it("Should login with valid credentials",()=>{
        cy.login("01679172828","123456");
        //cy.purchaserequisition("Automated Testing by Samanta","10","1");
        // cy.approverequisition();
        // cy.purchasequotation();
        // cy.approveRFQ();
        // cy.createQuotationEntry1("1");
        // cy.createQuotationEntry2("2");
        // cy.approveQE();
        // cy.ComparativeStatement();

        


    });

    it("Should create a Purchase Requisition",()=>{
        //cy.login("01679172828","123456");
        cy.purchaserequisition("Automated Testing by Samanta","10","1");
        // cy.approverequisition();
        // cy.purchasequotation();
        // cy.approveRFQ();
        // cy.createQuotationEntry1("1");
        // cy.createQuotationEntry2("2");
        // cy.approveQE();
        // cy.ComparativeStatement();

        


    });

    it("Should create a Purchase Requisition",()=>{
        //cy.login("01679172828","123456");
        //cy.purchaserequisition("Automated Testing by Samanta","10","1");
        cy.approverequisition();
        // cy.purchasequotation();
        // cy.approveRFQ();
        // cy.createQuotationEntry1("1");
        // cy.createQuotationEntry2("2");
        // cy.approveQE();
        // cy.ComparativeStatement();

        


    });
   

});

