/* first attempt
function createInvoice(services) {
  let invoice = {};
  let phoneBill = 3000;
  let internetBill = 5500;
  
  if (services) {
    phoneBill = services.phone || 3000;
    internetBill = services.internet || 5500;
  }

  invoice.phone = phoneBill;
  invoice.internet = internetBill;
  invoice.total = function() {
    return Number.parseInt(this.phone, 10) + Number.parseInt(this.internet, 10); 
  };

  return invoice;
 
}
*/

// given answer
function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total: function() {
      return Number.parseInt(this.phone, 10) + Number.parseInt(this.internet, 10); 
    },
  };
}


function invoiceTotal(invoices) {
  let total = 0;
  
  for (let i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}



let inv = createInvoice();
console.log(inv.total())  // 8500

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));  // 31000