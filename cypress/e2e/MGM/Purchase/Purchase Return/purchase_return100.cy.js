//Purchase receive with 100 items
describe(" Purchase receive with 100 items ",()=>{
    beforeEach(() =>{
    //login before each test
    cy.login("01679172828","mgm@admin123");
    });
    
     it("should create PO with 100 items and receive po with 100 items ",()=>{
       cy.createPurchaseOrderWith100Item("200","1");
       cy.wait(1000);
       // cy.viewPurchaseOrderWith100Item();
       cy.approvePurchaseOrder();
     });
 
     it("should receive PO of 100 items",() =>{
       cy.PurchaseReceive();
     });
     //for (let i = 0 ; i <= 2 ; i++){
     it ("should return all quantity of item",()=>{
        cy.PurchaseReturn100();
     });//}
 
     
 });