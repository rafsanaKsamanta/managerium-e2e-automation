 //BOM create for finished goods
 describe("Should create bom for finished goods ",()=>{
    beforeEach(() =>{
    //login before each test
    cy.login("01679172828","mgm@admin123");
    });

    it("should create a bom using raw and semi finished materials " , ()=>{
        cy.bomsCreate("Test BOM - x2","5","Bottle Tube 250ml","2","2.5","Bottle Cap 250ml");
        //cy.approveUnbundle();
        //cy.stockCheck("Winter Pitha");
    });

 
 });