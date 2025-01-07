     //Field collection
     describe("Field collection Test Cases ",()=>{
        it("should created a Field collection & view the created Field collection details & deposite the collected bill by cash",()=>{
            cy.login("01234444553","123456");
            // using loop for create multiple field collection in one time
            // for(let i=0; i<5; i++)
            // {
                //create a field collection by multiple customers up to 70 plus
            cy.createFieldCollection("10");
            // }
            cy.wait(2000);
            // deposite created field collection by cash
            cy.collectionReceive();
        });

 
     });