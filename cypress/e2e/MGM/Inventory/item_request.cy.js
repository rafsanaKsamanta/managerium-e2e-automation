  //create item request 
  describe(" create item request  ",()=>{
    it("should created a create item request from normal user, then view the created request,view request summary & details also",()=>{
        cy.login("01928374657","123456");
        cy.createItemRequest("2");
    });
   // approve item request
    it("should be login into master account & approved the request",()=>{
        cy.login("01679172828","mgm@Admin");
        cy.ApproveItemRequest();
    });


});