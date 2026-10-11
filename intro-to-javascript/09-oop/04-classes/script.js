class BankAccount {
  constructor(owner, initialBalance = 0) {  }
  getBalance() {  }
  deposit(amount) {  }
  withdraw(amount) {  }
  toString() {  }
}
const account = new BankAccount("Alice",100);
// Supplied transactions for the final description.
account.deposit(50);
account.withdraw(30);


// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK constructor: ${new BankAccount("Alice",100).owner},${new BankAccount("Alice",100).balance} | default: ${new BankAccount("Jo").balance}`);
console.log(`CHECK balance: ${new BankAccount("Alice",100).getBalance()}`);
const deposits = new BankAccount("Test",0);
deposits.deposit(50); deposits.deposit(-20); deposits.deposit(0);
console.log(`CHECK deposit: ${deposits.getBalance()}`);
const withdrawals = new BankAccount("Test",100);
const results = [30,100,-1,0,70].map(amount => withdrawals.withdraw(amount));
console.log(`CHECK withdraw: ${results.join(",")} | balance: ${withdrawals.getBalance()}`);
console.log(`CHECK description: ${account.toString()} | ${new BankAccount("Jo",20).toString()}`);
