let invoices = {
  unpaid: [],
  paid: [],

  add: function(client, moneyOwe) {
    this.unpaid.push({
      name: client, 
      amount: moneyOwe,
    });
  },

  totalDue: function() {
    return this.unpaid.reduce((sum, inv) => {
      return sum + inv.amount;
    }, 0)
  },

  
  totalPaid: function() {
    return this.paid.reduce((sum, inv) => {
      return sum + inv.amount;
    }, 0)
  },


  payInvoice: function(client) {
    let updatedUnpaid = [];

    this.unpaid.forEach(inv => {
      if (inv.name === client) {
        this.paid.push(inv);
      } else {
        updatedUnpaid.push(inv);
      }
    });

    this.unpaid = updatedUnpaid;
  },


}




//console.log(invoices.unpaid);
invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.unpaid);
invoices.payInvoice('Slough Digital');
invoices.payInvoice('Due North Development');
console.log(invoices.totalDue());
console.log(invoices.totalPaid());
//console.log(invoices.totalDue());