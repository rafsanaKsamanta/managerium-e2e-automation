 //Inventory item stock conversion
 describe("Should create item stock conversion ",()=>{
    beforeEach(() =>{
    //login before each test
    cy.login("01679172828","mgm@admin123");
    });

    it("should create a stock conversion using stock transfer feature of old item " , ()=>{
        cy.unbundle("Testing for Unbundle","1");
        cy.approveUnbundle();
        cy.stockCheck("Winter Pitha");
    });

 
 });