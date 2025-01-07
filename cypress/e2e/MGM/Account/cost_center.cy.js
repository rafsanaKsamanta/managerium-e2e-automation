 // Create Cost center
 describe("Create cost center ",()=>{
  
    it("should login then go to cost center landing and create some cost center ",()=>{
        cy.login("01679172828","mgm@Admin123");
        // cy.createCostCenter("Era'cost Center");
        // cy.createCostCenter("Era'cost Center 1");
        // cy.createCostCenter("Era'cost Center 2");
        cy.editCostCenter("New Etu cost center");
    });
});