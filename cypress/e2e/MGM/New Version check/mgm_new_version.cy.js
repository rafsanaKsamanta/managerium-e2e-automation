 //
 describe(" loginto the new version & visit all module once ",()=>{
    beforeEach(() =>{
        //login before each test
        cy.login("01679172828","mgm@admin123");
        cy.wait(1000);
        });

        it("should go to the purchase module & visit all feature & click different buttons ",()=>{
            cy.PurchaseUI();
            cy.wait(2000);
        });
// local purchase order
        it("should go to the purchase module & create a purchase order then approved it, after approving  the PO received it from Approved PO then view details, After view all details give payment by cash then view accounting journal",()=>{
            cy.createPurchaseOrder("100","50","500","50","10","20");
            cy.wait(2000);
            cy.approvePurchaseOrder();
            cy.wait(2000);
            cy.receivePurchaseOrder();
            cy.wait(2000);
            cy.viewReceivePurchaseOrder();
            cy.wait(2000);
            cy.DirectSupplierPaymentByCash();
            cy.wait(2000);
            //date type pick
            const dateToEnter = '2023-11-29';
            cy.viewDevAccountingJournal(dateToEnter);
        });
// foreign purchase order
        it("should go to the purchase module & create a foreign purchase order then approved it, after approving  the PO create shipping details & add different charges then received it from Approved PO & view details, After view all details give payment by cash then view accounting journal",()=>{
            
        });

        it("should go to the sales module & visit all feature & click different buttons ",()=>{
          cy.SalesUI();
          cy.wait(2000);
        });

        it(" create an exclusive sales order,then approved the order, go to sales delivery from approved SO deliver the order then see SO delivery details, then see accounting journal for the sales",()=>{
            
            cy.createSalesOrderExclusive("1","200","10","10","5");
            cy.wait(2000);
            cy.approveSalesOrder();
            cy.wait(2000);
            cy.deliverSalesOrder();
            cy.wait(2000);
            //date type pick
            const dateToEnter = '2023-10-08';
            cy.viewAccountingJournal(dateToEnter);
            cy.wait(2000);
          });

        it("should go to the Account module & visit all feature & click different buttons ",()=>{
            cy.AccountUI();
            cy.wait(2000);
        });

        it("should go to the Inventory module & visit all feature & click different buttons ",()=>{
            cy.InventoryUI();
            cy.wait(2000);
        });
});
