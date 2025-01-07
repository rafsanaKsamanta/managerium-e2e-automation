 //Inventory item stock conversion
 describe("Should create item stock conversion ",()=>{
    beforeEach(() =>{
    //login before each test
    cy.login("01234444553","123456");
    });

    it("should create a stock conversion using stock transfer feature of old item " , ()=>{
        cy.bundle("Testing for Bundle","2");
        cy.approveUnbundle();
        cy.stockCheck("Winter Pitha");
    });

 
 });