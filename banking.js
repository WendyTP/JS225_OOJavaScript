
function makeBank() {
  let accountNumber = 101;
  let accounts = [];
  return {

    openAccount() {
      let newAccount = makeAccount(accountNumber);
      accounts.push(newAccount);

      accountNumber += 1;
      return newAccount;
    },

    transfer(debtor, creditor, amount) {
      debtor.withdraw(amount);
      creditor.deposit(amount);
      return amount;
    }
  };
}

function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  return {
  balance() {
    return balance;
  },

  transactions() {
    return transactions;
  },

  number() {
    return number;
  },

  deposit(amount) {
    balance += amount;
    transactions.push({type: 'deposit', amount: amount,});
    return amount;
  },

  withdraw(amount) {
    if (balance < amount) {
      amount = balance;
    }

    balance -= amount;
    transactions.push({type: 'withdraw', amount: amount,});
    return amount;
  },

  };
}
let bank = makeBank();
let source = bank.openAccount();
console.log(source.balance());  // 0
let otherAccount = bank.openAccount();
console.log(otherAccount.number());  // 102
console.log(source.transactions()); // []
console.log(bank.accounts)   // undefined
//console.log();
/*
console.log(source.deposit(10));  // 10
let destination = bank.openAccount();
console.log(bank.transfer(source, destination, 7)); // 7
console.log(source.balance());  // 3
console.log(destination.balance());  // 7 

let account = bank.openAccount();
console.log(account.number());   // 101
//console.log(bank);
//console.log(account);
let secondAccount = bank.openAccount();
console.log(secondAccount.number()) // 102;

console.log(account.number());   // 101
console.log(account.balance()); // 0
console.log(account.deposit(12));  // 12
console.log(account.balance()); // 12
console.log(account.transactions()) // [ { type: 'deposit', amount: 12 } ]

console.log(account.deposit(10)); // 10
console.log(account.balance());  // 22
console.log(account.withdraw(5));  // 5
console.log(account.balance());  // 17
console.log(account.transactions());  
//[{ type: 'deposit', amount: 12 },{ type: 'deposit', amount: 10 },{ type: 'withdraw', amount: 5 }]

console.log(account.withdraw(20));  // 17
console.log(account.balance())  // 0
*/