 //sales return
 describe(" Should perform sales return actions both partial and full ",()=>{
    beforeEach(() =>{
    //login before each test
    cy.login("01679172828","mgm@admin123");
    });

    it("should create a so with 100 items" , ()=>{
        cy.createSalesOrderExclusive("1","200","10","10");
        cy.approveSalesOrder();
        cy.deliverSalesOrder();
    });

    it ("Should perform full sales return action",()=>{
        cy.salesReturnFull();
        cy.approveSalesReturn();
    
    });


  
    
    // it("it should perform sales return partial",()=>{
       
    //     //cy.approveSalesCollection();
    // });
    
 });