  //create sales direct delivery Branch Wise 
  describe("It will login into the web & go to create item as your need quantity ",()=>{
    it("should create items successfully",()=>{
        cy.MgmLiveMgm("01234444554","123456");
        cy.wait(2000);
        cy.CreateItem();
       
        
    })
});