class BankAccount {
  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) return false;
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
account.deposit(50);
account.withdraw(30);
document.getElementById("output").textContent = account.toString();
