 //Inventory item stock conversion
 describe("Should create item stock conversion ",()=>{
    beforeEach(() =>{
    //login before each test
    cy.login("01679172828","123456");
    });

    it("should create a stock conversion using stock transfer feature of old item " , ()=>{
        cy.stockTransferOldItem("Testing for Stock Transfer using old items","1","120");
        cy.approveStockConversion();
    });

    // it ("Should perform full sales return action",()=>{
    //     cy.salesReturnFull();
    //     cy.approveSalesReturn();
    
    // });


  
    
    
 });