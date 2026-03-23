// // Import ES Modules
// import createInvoiceLabel,{caluclateTotal,taxRate} from "./p5.mjs";// here createInvoiceLabel is default export and caluclateTotal,taxRate are name export
// const subtotal = 4000;
// const total = caluclateTotal(subtotal);
// const label = createInvoiceLabel("INV-2026-001");

// console.log("Invoice label: ",label);

import createInvoiceLabel, { calculateTotal, taxRate } from "./P5.mjs";

const subtotal = 4000;
const total = calculateTotal(subtotal);
const label = createInvoiceLabel("INV-2026-001");

console.log("Invoice label:", label);
console.log("Total:", total);

