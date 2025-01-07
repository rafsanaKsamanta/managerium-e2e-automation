     //Exclusive  sales direct delivery
     describe("Direct sales Test Cases ",()=>{
        it("should created a Exclusive direct sales & view the created sales details",()=>{
            // cy.login("01928374657","123456");
            // cy.createDirectSalesExclusive("1","200","10","10","5");
        });

     //Inclusive  sales direct delivery
        it("should created a Inclusive direct sales & view the created sales details",()=>{
            cy.login("01928374657","123456");
            cy.createDirectSalesInclusive("1","200","10","10","5");
        });
        });