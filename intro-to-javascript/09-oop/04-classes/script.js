class BankAccount {
  // TODO: Step 1: Initialize each account with its owner and initialBalance in the constructor.
constructor(owner, initialBalance = 0) {  }
  // TODO: Step 2: Return the current balance from getBalance().
getBalance() {  }
  // TODO: Step 3: Implement deposit(amount) to add positive amounts and leave the balance unchanged otherwise.
deposit(amount) {  }
  // TODO: Step 4: Complete task 4 for withdraw(amount).
withdraw(amount) {  }
  // TODO: Step 5: Complete task 5 for toString().
toString() {  }
}
const account = new BankAccount("Alice",100);
// Supplied transactions for the final description.
account.deposit(50);
account.withdraw(30);


// Supplied checkpoints. Do not replace them with fixed answers.
// TODO: Step 6: Complete task 6 for mission result: .
console.log(`CHECK constructor: ${new BankAccount("Alice",100).owner},${new BankAccount("Alice",100).balance} | default: ${new BankAccount("Jo").balance}`);
console.log(`CHECK balance: ${new BankAccount("Alice",100).getBalance()}`);
const deposits = new BankAccount("Test",0);
deposits.deposit(50); deposits.deposit(-20); deposits.deposit(0);
console.log(`CHECK deposit: ${deposits.getBalance()}`);
const withdrawals = new BankAccount("Test",100);
const results = [30,100,-1,0,70].map(amount => withdrawals.withdraw(amount));
console.log(`CHECK withdraw: ${results.join(",")} | balance: ${withdrawals.getBalance()}`);
console.log(`CHECK description: ${account.toString()} | ${new BankAccount("Jo",20).toString()}`);
