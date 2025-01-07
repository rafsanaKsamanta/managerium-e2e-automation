 // Create Purchase Cost Estimation
 describe("Create Purchase Cost Estimation ",()=>{
    
    it("should login then go to Purchase Cost Estimation landing and create Purchase Cost Estimation,after create view the Purchase Cost Estimation & edit Purchase Cost Estimation ",()=>{
        cy.login("01679172828","mgm@Admin123"); 
        cy.createPurchaseCostEstimation("10","2","3","4","5");
        // cy.editPurchaseCostEstimation("2","3","4","5");

    });
});