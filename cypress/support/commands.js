// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {viewAccountingJournal,ApproveFullReturn,viewReturndetails,approveSalesOrder,returndeliverSalesOrder,deliverSalesOrder,
  approveSalesQuotation,orderFromQuotation,editsalesQuotation,createSalesQuotationLine,
  createSalesQuotationGross,createPurchaseReceive,createBankAccount,login} from "../e2e/MGM/Sales/helper";

Cypress.Commands.add("login", (userId, password) => {
  login(userId, password);
})

Cypress.Commands.add("createPurchaseReceive", (quantity,rate) => {
  createPurchaseReceive(quantity,rate);
})
Cypress.Commands.add("createSalesQuotationGross", (quantity,rate,grossDiscount) => {
  createSalesQuotationGross (quantity,rate,grossDiscount);
})
Cypress.Commands.add("createSalesQuotationLine", (quantity1,rate1,lineDiscount1,quantity2,rate2,lineDiscount2,quantity3,rate3,lineDiscount3) => {
  createSalesQuotationLine(quantity1,rate1,lineDiscount1,quantity2,rate2,lineDiscount2,quantity3,rate3,lineDiscount3);
})
Cypress.Commands.add("editsalesQuotation", () => {
  editsalesQuotation();
})
Cypress.Commands.add("orderFromQuotation", () => {
  orderFromQuotation();
})
Cypress.Commands.add("deliverSalesOrder", () => {
  deliverSalesOrder();
})
Cypress.Commands.add("returndeliverSalesOrder", () => {
  returndeliverSalesOrder();
})
Cypress.Commands.add("viewReturndetails", () => {
  viewReturndetails();
})
Cypress.Commands.add("approveSalesQuotation", () => {
  approveSalesQuotation();
})
Cypress.Commands.add("approveSalesOrder", () => {
  approveSalesOrder();
})
Cypress.Commands.add("ApproveFullReturn", () => {
  ApproveFullReturn();
})
Cypress.Commands.add("viewAccountingJournal", (dateToEnter) => {
  viewAccountingJournal(dateToEnter);
})
//ipos commands for test case
// import{iposlogin}from "../e2e/MGM/ipos_helper";

// Cypress.Commands.add("iposlogin",(userId, password)=>{
//   iposlogin(userId, password);
// })
//ipos commands for test case
import{ApproveItemRequest,createItemRequest }from "../e2e/MGM/Inventory/item_request_helper";

Cypress.Commands.add("createItemRequest",(RequestQuantity)=>{
  createItemRequest(RequestQuantity);
})
Cypress.Commands.add("ApproveItemRequest",()=>{
  ApproveItemRequest();
})

 // sales direct delivery
import{PartialdeliverSalesOrder,createSalesOrderExclusive,createSalesOrderInclusive,createDirectSalesInclusive,createDirectSalesExclusive}from "../e2e/MGM/Sales/sales_helper";

Cypress.Commands.add("createDirectSalesExclusive",(quantity,rate,discount,VAT,AIT)=>{
  createDirectSalesExclusive(quantity,rate,discount,VAT,AIT);
})

Cypress.Commands.add("createDirectSalesInclusive",(quantity,rate,discount,VAT,AIT)=>{
  createDirectSalesInclusive(quantity,rate,discount,VAT,AIT);
})
//sales order
Cypress.Commands.add("createSalesOrderExclusive",(quantity,rate,discount,VAT,AIT)=>{
  createSalesOrderExclusive(quantity,rate,discount,VAT,AIT);
})

Cypress.Commands.add("createSalesOrderInclusive",(quantity,rate,discount,VAT,AIT)=>{
  createSalesOrderInclusive(quantity,rate,discount,VAT,AIT);
})
//partial sales delivery
Cypress.Commands.add("PartialdeliverSalesOrder",(deliverQuantity1,deliverQuantity2,deliverQuantity3)=>{
  PartialdeliverSalesOrder(deliverQuantity1,deliverQuantity2,deliverQuantity3);
})


import{viewReceivePurchaseOrder,receivePurchaseOrder,approvePurchaseOrder,createPurchaseOrder,DirectSupplierPaymentByCash,DirectSupplierPaymentByBank,viewDevAccountingJournal}from "../e2e/MGM/Purchase/purchase_helper";
//purchase order
Cypress.Commands.add("createPurchaseOrder", (quantity,rate,VAT,quantity1,rate1,VAT1) => {
  createPurchaseOrder(quantity,rate,VAT,quantity1,rate1,VAT1);
})
//approve Purchase Order
Cypress.Commands.add("approvePurchaseOrder", () => {
  approvePurchaseOrder();
})

//Full Recevie item from created purchase order
Cypress.Commands.add("receivePurchaseOrder", () => {
  receivePurchaseOrder();
})
//view Received Purchase order
Cypress.Commands.add("viewReceivePurchaseOrder", () => {
  viewReceivePurchaseOrder();
})
//direct purchase payment by cash
Cypress.Commands.add("DirectSupplierPaymentByCash",()=>{
DirectSupplierPaymentByCash();
})
//direct purchase payment by bank
Cypress.Commands.add("DirectSupplierPaymentByBank",()=>{
  DirectSupplierPaymentByBank();
  })
  //view Dev Accounting Journal
Cypress.Commands.add("viewDevAccountingJournal",(dateToEnter)=>{
  viewDevAccountingJournal(dateToEnter);
  })

import{createBankAccount1,createBankAccount2,createBankAccount3,createBankAccount4,createBankAccount5,createBankAccount6,createBankAccount7,createBankAccount8}from "../e2e/MGM/Account/bank_helper";
Cypress.Commands.add("createBankAccount1", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount1(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount2", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount2(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount3", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount3(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount4", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount4(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount5", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount5(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount6", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount6(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount7", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount7(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount8", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount8(accountName,bankAccountNumber,bankShortName);
})
//mgm UI Commands
import{PurchaseUI,SalesUI,AccountUI,InventoryUI,HrUI}from "../e2e/MGM/MGM_UI/Mgm_UI_Helper";
Cypress.Commands.add("PurchaseUI",()=>{
  PurchaseUI();
})
Cypress.Commands.add("SalesUI",()=>{
  SalesUI();
})
Cypress.Commands.add("AccountUI",()=>{
  AccountUI();
})
Cypress.Commands.add("InventoryUI",()=>{
  InventoryUI();
})
Cypress.Commands.add("HrUI",()=>{
  HrUI();
})

//account Expence/Advance
import{paymentAdvance,approveAdvance,createAdvance}from "../e2e/MGM/Account/account_helper";

Cypress.Commands.add("createAdvance",(amount)=>{
 createAdvance(amount);
})
Cypress.Commands.add("approveAdvance",()=>{
  approveAdvance();
 })
 Cypress.Commands.add("paymentAdvance",()=>{
  paymentAdvance();
 })

 //Cost center
import{editCostCenter,createCostCenter}from "../e2e/MGM/Account/cost_center_helper";


Cypress.Commands.add("createCostCenter",(CostCenterName)=>{
  createCostCenter(CostCenterName);
 })
 Cypress.Commands.add("editCostCenter",(CostCenterName)=>{
  editCostCenter(CostCenterName);
 })

//Purchase Cost Estimation
import{editPurchaseCostEstimation,createPurchaseCostEstimation}from "../e2e/MGM/Purchase/purchase_cost_estimation_helper";


Cypress.Commands.add("createPurchaseCostEstimation",(Exchange_Rate,Frieght_Rate,CF_Rate,Margin_Rate,CD_Rate,Quantity,PFI_Price,custtomer_price)=>{
  createPurchaseCostEstimation(Exchange_Rate,Frieght_Rate,CF_Rate,Margin_Rate,CD_Rate,Quantity,PFI_Price,custtomer_price);
 })
 
 Cypress.Commands.add("editPurchaseCostEstimation",(Frieght_Rate,CF_Rate,Margin_Rate,CD_Rate,Quantity,PFI_Price,custtomer_price)=>{
  editPurchaseCostEstimation(Frieght_Rate,CF_Rate,Margin_Rate,CD_Rate,Quantity,PFI_Price,custtomer_price);
 })

import{createShippingAndCloseIndentingPO,approveIndentingPO,createIndentingPurchaseOrder}from "../e2e/MGM/Purchase/IndentingPO/IndentingPO_helper";
Cypress.Commands.add("createIndentingPurchaseOrder",(quantity,supplier_rate,customer_rate)=>{
  createIndentingPurchaseOrder(quantity,supplier_rate,customer_rate);
 })
 Cypress.Commands.add("approveIndentingPO",()=>{
  approveIndentingPO();
 })
 Cypress.Commands.add("createShippingAndCloseIndentingPO",()=>{
  createShippingAndCloseIndentingPO();
 })
 import{approveVoucher,createVoucher}from "../e2e/MGM/Account/Accounting Journal/voucher_helper";
 Cypress.Commands.add("createVoucher",(amount)=>{
  createVoucher(amount);
 })
 Cypress.Commands.add("approveVoucher",()=>{
  approveVoucher();
 })
import{checkSalesAnalyticsReports}from"../e2e/MGM/Sales/Sales Analytics & Reports/helperSAR.js";
Cypress.Commands.add("checkSalesAnalyticsReports",(dateToEnter)=>{
  checkSalesAnalyticsReports(dateToEnter);
 })
 import{checkStockHistoryReport}from"../e2e/MGM/Inventory/Inventory report/check_Stock_history_report_helper.js";
 Cypress.Commands.add("checkStockHistoryReport",()=>{
  checkStockHistoryReport();
 })

 import{DuelistRowCollection}from"../e2e/MGM/Sales/Sales Collection/duelist_row_collection_helper.js";
 Cypress.Commands.add("DuelistRowCollection",(moneyreceiptno,remarks,received_amount,collection,discount)=>{
  DuelistRowCollection(moneyreceiptno,remarks,received_amount,collection,discount);
 })
//purchase receive
 import{PurchaseReceive}from"../e2e/MGM/Purchase/Purchase Receive/receive100items_helper.js";
 Cypress.Commands.add("PurchaseReceive",()=>{
  PurchaseReceive();
 })

 //100 item local purchase order
 import{createPurchaseOrderWith100Item,viewPurchaseOrderWith100Item}from"../e2e/MGM/add100itemplus/100item_helper.js";
 Cypress.Commands.add("createPurchaseOrderWith100Item",(quantity,rate)=>{
  createPurchaseOrderWith100Item(quantity,rate);
 })
 Cypress.Commands.add("viewPurchaseOrderWith100Item",()=>{
  viewPurchaseOrderWith100Item();
 })


 import{PurchaseReturn100}from"../e2e/MGM/Purchase/Purchase Return/purhcase_return100_helper.js";
 Cypress.Commands.add("PurchaseReturn100",()=>{
 PurchaseReturn100();
 })


 //----- Samanta ------//
//collection by invoice sales collection
 import{collectionByinvoice1}from"../e2e/MGM/Sales/Sales Collection/collection_byinvoice_helper.js";
 Cypress.Commands.add("collectionByinvoice1",(moneyreceiptno,remarks,collection_amount)=>{
  collectionByinvoice1(moneyreceiptno,remarks,collection_amount);
 })

 //sales collection approval
 import{approveSalesCollection}from"../e2e/MGM/Sales/Sales Collection/collection_byinvoice_helper.js";
 Cypress.Commands.add("approveSalesCollection",()=>{
  approveSalesCollection();
 })


 //sales return full quantity
 import{salesReturnFull}from"../e2e/MGM/Sales/Sales Return/sales_return_helper.js";
 Cypress.Commands.add("salesReturnFull",()=>{
  salesReturnFull();
 })
 
 //sales return full quantity
 import{approveSalesReturn}from"../e2e/MGM/Sales/Sales Return/sales_return_helper.js";
 Cypress.Commands.add("approveSalesReturn",()=>{
  approveSalesReturn();
 })


 //stock tranfer with old item 

  import{stockTransferOldItem}from"../e2e/MGM/Inventory/Item Stock Conversion/stock_transfer_olditm_helper.js";
  Cypress.Commands.add("stockTransferOldItem",(remarks,trnsQty,revised_sales_price)=>{
    stockTransferOldItem(remarks,trnsQty,revised_sales_price);
  })
  //stock conversion approval
  import{approveStockConversion}from"../e2e/MGM/Inventory/Item Stock Conversion/stock_transfer_olditm_helper.js";
  Cypress.Commands.add("approveStockConversion",()=>{
    approveStockConversion();
  })
  //stock transfer with new item
  import{stockTransferNewItem}from"../e2e/MGM/Inventory/Item Stock Conversion/stock_transfer_newitem_helper.js";
  Cypress.Commands.add("stockTransferNewItem",(remarks,trnsQty,item_name)=>{
    stockTransferNewItem(remarks,trnsQty,item_name);
  })

  //stock conversion unbundle
  import{unbundle}from"../e2e/MGM/Inventory/Item Stock Conversion/unbundle_helper.js";
  Cypress.Commands.add("unbundle",(remarks,trnsQty,avg_rate)=>{
    unbundle(remarks,trnsQty,avg_rate);
  })
  //stock conversion unbundle approval
  import{approveUnbundle}from"../e2e/MGM/Inventory/Item Stock Conversion/unbundle_helper.js";
  Cypress.Commands.add("approveUnbundle",()=>{
    approveUnbundle();
  })


//unbunle stock check
import{stockCheck}from"../e2e/MGM/Inventory/Item Stock Conversion/unbundle_helper.js";
  Cypress.Commands.add("stockCheck",(itemName)=>{
    stockCheck(itemName);
  })

  // Bundle Item Conversion
  import{bundle}from"../e2e/MGM/Inventory/Item Stock Conversion/bundle_helper.js";
  Cypress.Commands.add("bundle",(remarks,trnsQty)=>{
    bundle(remarks,trnsQty);
  })

  //BOM create
  import{bomsCreate}from"../e2e/MGM/Production_Sam/boms_create_helper.js";
  Cypress.Commands.add("bomsCreate",(BomName,LotSize,MaterialName1,MaterialQty,wastage,MaterialName2)=>{
    bomsCreate(BomName,LotSize,MaterialName1,MaterialQty,wastage,MaterialName2);
  })
  //check Accounitng journal
  import{CheckJournal}from"../e2e/MGM/Account/account_helper.js";
  Cypress.Commands.add("CheckJournal",()=>{
    CheckJournal();
  })
  //Create expense
  import{createExpense}from"../e2e/MGM/Account/Accounting Journal/Expense/expense_helper.js";
  Cypress.Commands.add("createExpense",(remarks,amount)=>{
    createExpense(remarks,amount);
  });
  // approve expense
  import{approveExpense}from"../e2e/MGM/Account/Accounting Journal/Expense/expense_helper.js";
  Cypress.Commands.add("approveExpense",()=>{
    approveExpense();
  });
  // payment expense
  import{paymentExpense}from"../e2e/MGM/Account/Accounting Journal/Expense/expense_helper.js";
  Cypress.Commands.add("paymentExpense",()=>{
    paymentExpense();
  });
  //assertion practice
  import{assertion}from"../e2e/MGM/Account/Accounting Journal/Expense/assertion_helper.js";
  Cypress.Commands.add("assertion",()=>{
    assertion();
  });

  //purchase Requisition
  import{purchaserequisition}from"../e2e/MGM/PurchaseFullProcess/requisitiontopayment_helper.js";
  Cypress.Commands.add("purchaserequisition",(remarks,req_quantity,rate)=>{
    purchaserequisition(remarks,req_quantity,rate);
  });
  //approve purchase requisition
  import{approverequisition}from"../e2e/MGM/PurchaseFullProcess/requisitiontopayment_helper.js";
  Cypress.Commands.add("approverequisiion",()=>{
    approverequisition();
  });