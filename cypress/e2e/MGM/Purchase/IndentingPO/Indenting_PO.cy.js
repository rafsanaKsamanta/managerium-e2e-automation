 //Foreign Purchase order 
 describe(" Indenting Purchase order Test Cases ",()=>{
   beforeEach(() =>{
   //login before each test
   cy.login("01679172828","mgm@admin123");
   });
   
    it("should go to Indenting purchase order & create a IPO ",()=>{
        cy.createIndentingPurchaseOrder("2","10","20");
    });
    it(" after create approve the IPO ",()=>{
        cy.approveIndentingPO();
    });
    it(" then go to create shipping details & close the IPO ",()=>{
        cy.createShippingAndCloseIndentingPO();
    });
    it(" then view accounting journal ",()=>{
        //date type pick
        const dateToEnter = '2023-10-01';
        cy.viewDevAccountingJournal(dateToEnter);
    });

});