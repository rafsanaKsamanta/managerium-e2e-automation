 //
 describe(" Check sales analytics reports ",()=>{
    beforeEach(() =>{
        //login before each test
        cy.login("01679172828","mgm@admin123");
        cy.wait(1000);
        });


        // check Sales Analytics & Reports 
        it("should go to the Sales Analytics & Reports & view all report types has data or not ",()=>{
          const dateToEnter = '2023-11-29';
          cy.checkSalesAnalyticsReports(dateToEnter);

        });
    });