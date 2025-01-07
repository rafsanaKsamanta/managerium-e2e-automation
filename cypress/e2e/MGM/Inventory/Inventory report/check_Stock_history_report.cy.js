 //
 describe(" Check stock summary report from Inventory report",()=>{
    beforeEach(() =>{
        //login before each test
        cy.login("01679172828","mgm@admin123");
        cy.wait(1000);
        });


        // check Sales Analytics & Reports 
        it("should go to the Inventory report then select stock history report view with office & wearhouse only ",()=>{
          cy.checkStockHistoryReport();
        });
    });