function createInvoice(services = {}) {
  let paymentAmount = 0;

  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,

    total: function() {
      return Number.parseInt(this.phone, 10) + Number.parseInt(this.internet, 10); 
    },

    addPayments: function(...payments) {
      paymentAmount += payments.flat().reduce((sum, payment) => {
        return sum + payment.total();
      }, 0)
    },

    amountDue: function() {
      return this.total() - paymentAmount;
    },
  };
}



function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,

    total: function() {
      if (services.amount) {
        return parseInt(services.amount, 10);
      } else {
        return parseInt(this.phone, 10) + parseInt(this.internet, 10);
      }
    },
  };
}



let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayments(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0