 //Collection from Due list row
 describe(" Sales Collection from due list row order Test Cases ",()=>{
    beforeEach(() =>{
    //login before each test
    cy.login("01679172828","mgm@admin123");
    });


    for(let i=0 ;i <=2;i++){

     it("should create a sales order",()=>{
      //
     });
     it("should go to Sales Collection due list and click action button and do sales collection ",()=>{
         cy.DuelistRowCollection("12338111","Testing Purpose", "8000");
     });}

      
 });