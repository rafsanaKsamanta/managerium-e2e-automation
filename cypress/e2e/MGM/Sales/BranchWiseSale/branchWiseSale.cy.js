   //create sales direct delivery Branch Wise 
   describe("It will login into the web & 1st it will sales from 1 branch then it will change the branch & again do sales  ",()=>{
    it("should created a  direct sales in Managerium Branch",()=>{
        cy.MgmLiveMgm("01234444554","123456");
        cy.wait(2000);
        for(let i=0; i<5; i++)
        {
        cy.CreateDirectSalesinManageriumBranch("2","200");
        cy.wait(2000);
        }
    });
    it("should created a  direct sales in SQA Branch",()=>{
        
        cy.wait(2000);
        cy.MgmLiveSqa("01234444554","123456");
        for(let i=0; i<5; i++)
        {
        cy.CreateDirectSalesinSqaBranch("4","200");
        cy.wait(2000);
        }
    });

    });