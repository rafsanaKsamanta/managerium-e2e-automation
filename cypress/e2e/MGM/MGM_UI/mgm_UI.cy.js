describe("MGM UI all routes,links Test Cases ",()=>{
    it("should be login  with valid info & go through to the purchase module route to route",()=>{
        cy.login("01928374657","123456");
        cy.wait(1000);
        cy.PurchaseUI();
        cy.wait(2000);
        cy.SalesUI();
        cy.wait(2000);
        cy.AccountUI();
        cy.wait(2000);
        cy.InventoryUI();
        cy.HrUI();


        });

});
   