class BankAccount {
  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) return false;
    this.balance -= amount;
    return true;
  }

  getBalance() {
    return this.balance;
  }

  toString() {
    return `BankAccount(owner: ${this.owner}, balance: $${this.balance})`;
  }
}

const account = new BankAccount("Alice", 100);
console.log(`account owner: ${account.owner}`);
console.log(`initial balance: ${account.getBalance()}`);
const depositCheck = new BankAccount("Test", 0);
depositCheck.deposit(50);
console.log(`deposit balance: ${depositCheck.getBalance()}`);
const negativeCheck = new BankAccount("Test", 100);
negativeCheck.deposit(-20);
console.log(`negative deposit balance: ${negativeCheck.getBalance()}`);
const withdrawCheck = new BankAccount("Test", 100);
const withdrawal = withdrawCheck.withdraw(30);
console.log(`withdraw success: ${withdrawal}, balance: ${withdrawCheck.getBalance()}`);
const deniedCheck = new BankAccount("Test", 50);
const denied = deniedCheck.withdraw(100);
console.log(`withdraw denied: ${denied}, balance: ${deniedCheck.getBalance()}`);
const invalidCheck = new BankAccount("Test", 50);
console.log(`invalid withdrawal: ${invalidCheck.withdraw(-1)}, balance: ${invalidCheck.getBalance()}`);
account.deposit(50);
account.withdraw(30);
console.log(`account description: ${account.toString()}`);
console.log(`mission result: ${account.toString()}`);
