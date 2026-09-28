// TODO: Implement BankAccount class
class BankAccount {
    constructor(owner, initialBalance = 0) {

    }

    deposit(amount) {

    }

    withdraw(amount) {

    }

    getBalance() {

    }

    toString() {

    }
}

// These probes run in task order; implement the class above, then add the final mission log.
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
// Log mission result on a separate line here.
