  //login
  export const login = (userId, password) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.viewport(1920, 1080);
    cy.visit("https://mgm.ibos.io/");
        cy.get("#loginMobileNo").eq(0).click({force:true}).type(userId);
        cy.get("#loginPassword").eq(0).click({force:true}).type(password);
        cy.get("form").submit();
        cy.wait(1000);
        cy.get("#branchList > div")
        .click({ force: true })
        .get("#react-select-mgm-option-2")
        .type("{enter}",{force: true});
        cy.wait(2000);
  };
    //create Purchase Cost Estimation
    export const createPurchaseCostEstimation = (Exchange_Rate,Frieght_Rate,CF_Rate,Margin_Rate,CD_Rate,Quantity,PFI_Price,custtomer_price) => {
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
        Cypress.on("uncaught:exception", (err) => {
          /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false;
          }
        });
        cy.viewport(1920, 1080);
        cy.visit("https://mgm.ibos.io/purchase/purchaseAnalytics");
        cy.wait(1000);
        cy.get('.MuiButtonBase-root').eq(1).click({force:true});
        cy.wait(1000);
        //select office
         cy.get("#office > div")
        .click({ force: true })
        .get("#react-select-mgm-option-0")
        .type("{enter}",{force: true});
        cy.wait(1000);
        //select view by 

        //select supplier
        cy.get("#categoryValues > div")
       .click({ force: true })
       .get("#react-select-mgm-option-26")
       .type("{enter}",{force: true});
        cy.wait(1000);
        //add item
        for(let i=0; i<25; i++)
        {
            const selector = `#react-select-mgm-option-${i}`;
            cy.log(`Current selector: ${selector}`);
          
            cy.get("#item > div")
              .click({ force: true })
              .get(selector)
              .type("{enter}", { force: true });
            cy.wait(1000);
            cy.get('.btn').eq(3).click({force:true});
            cy.wait(1000);
        }
        // add Rate Details

        //select currency
        cy.get("#currency > div")
        .click({ force: true })
        .get("#react-select-mgm-option-14")
        .type("{enter}",{force: true});
         cy.wait(1000);
         cy.get('.form-control').eq(1).click({force:true}).type(Exchange_Rate);
         cy.wait(1000);
         cy.get('.form-control').eq(3).click({force:true}).type(Frieght_Rate);
         cy.wait(1000);
         cy.get('.form-control').eq(4).click({force:true}).type(CF_Rate);
         cy.wait(1000);
         cy.get('.form-control').eq(5).click({force:true}).type(Margin_Rate);
         cy.wait(1000);
         cy.get('.form-control').eq(6).click({force:true}).type(CD_Rate);
         cy.wait(1000);

         // add quantity & PFI Price & custtomer_price

        //  cy.get('.form-control').eq(7).click({force:true}).type(Quantity);
        //  cy.wait(1000);
        //  cy.get('.form-control').eq(8).click({force:true}).type(PFI_Price);
        //  cy.wait(1000);
        //  cy.get('.form-control').eq(13).click({force:true}).type(custtomer_price);
        //  cy.wait(1000);

         // submit 
         cy.get("form").submit();
         cy.wait(1000);

      };

      //edit Purchase Cost Estimation

      export const editPurchaseCostEstimation = (Frieght_Rate,CF_Rate,Margin_Rate,CD_Rate,Quantity,PFI_Price,custtomer_price) => {
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
        Cypress.on("uncaught:exception", (err) => {
          /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false;
          }
        });
        cy.viewport(1920, 1080);
        cy.visit("https://mgm.ibos.io/purchase/purchaseAnalytics");
        cy.wait(1000);
        // cy.get('.MuiSvgIcon-root ').eq(29).click({force:true});
        cy.wait(2000);
        // cy.visit("https://mgm.ibos.io/purchase/purchaseAnalytics");
        cy.get('.MuiSvgIcon-root ').eq(30).click({force:true});

         //add item
        //  for(let i=26; i<50; i++)
        //  {
        //      const selector = `#react-select-mgm-option-${i}`;
        //      cy.log(`Current selector: ${selector}`);
           
        //      cy.get("#item > div")
        //        .click({ force: true })
        //        .get(selector)
        //        .type("{enter}", { force: true });
        //      cy.wait(1000);
        //      cy.get('.btn').eq(3).click({force:true});
        //      cy.wait(1000);
        //  }
         
         cy.get('.form-control').eq(3).click({force:true}).type(Frieght_Rate);
         cy.wait(1000);
         cy.get('.form-control').eq(4).click({force:true}).type(CF_Rate);
         cy.wait(1000);
         cy.get('.form-control').eq(5).click({force:true}).type(Margin_Rate);
         cy.wait(1000);
         cy.get('.form-control').eq(6).click({force:true}).type(CD_Rate);
         cy.wait(1000);

         // add quantity & PFI Price

         cy.get('.form-control').eq(7).click({force:true}).type(Quantity);
         cy.wait(1000);
         cy.get('.form-control').eq(8).click({force:true}).type(PFI_Price);
         cy.wait(1000);
         cy.get('.form-control').eq(13).click({force:true}).type(custtomer_price);
         cy.wait(1000);
         cy.get('.form-control').eq(14).click({force:true}).type(Quantity);
         cy.wait(1000);
         cy.get('.form-control').eq(15).click({force:true}).type(PFI_Price);
         cy.wait(1000);
         cy.get('.form-control').eq(20).click({force:true}).type(custtomer_price);
         cy.wait(1000);
        // submit 
         cy.get("form").submit();
        cy.wait(2000);
        cy.get('.MuiSvgIcon-root ').eq(29).click({force:true});
      };