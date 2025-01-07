 //Collection from Due list row
 describe(" Sales Collection from due list row order Test Cases ",()=>{
    beforeEach(() =>{
    //login before each test
    cy.login("01679172828","mgm@admin123");
    });

    it ("should go to collection by invoice page and create collection using multiple customers",()=>{
        cy.collectionByinvoice1("10222as","Testing Purpose","100");
    });

  
    
    it("it should approve multiple sale collection",()=>{
       
        cy.approveSalesCollection();
    });
    
 });