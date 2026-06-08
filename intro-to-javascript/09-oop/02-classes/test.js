test("BankAccount can be instantiated", () => {
  const acc = new BankAccount("Alice", 100);
  assert.ok(acc instanceof BankAccount, "BankAccount should be a class");
  assert.equal(acc.getBalance(), 100, "Initial balance should be 100");
});

test("deposit adds to balance", () => {
  const acc = new BankAccount("Test", 0);
  acc.deposit(50);
  assert.equal(acc.getBalance(), 50, "After deposit(50), balance should be 50");
});

test("deposit ignores negative amounts", () => {
  const acc = new BankAccount("Test", 100);
  acc.deposit(-20);
  assert.equal(acc.getBalance(), 100, "Negative deposit should be ignored");
});

test("withdraw reduces balance and returns true", () => {
  const acc = new BankAccount("Test", 100);
  const result = acc.withdraw(30);
  assert.equal(result, true, "withdraw should return true on success");
  assert.equal(acc.getBalance(), 70, "Balance should be 70 after withdraw(30)");
});

test("withdraw fails on insufficient funds and returns false", () => {
  const acc = new BankAccount("Test", 50);
  const result = acc.withdraw(100);
  assert.equal(result, false, "withdraw should return false on insufficient funds");
  assert.equal(acc.getBalance(), 50, "Balance should be unchanged");
});

test("toString returns formatted string", () => {
  const acc = new BankAccount("Alice", 100);
  acc.deposit(50);
  acc.withdraw(30);
  assert.equal(acc.toString(), "BankAccount(owner: Alice, balance: $120)",
    'toString should return "BankAccount(owner: Alice, balance: $120)"');
});

test("#output shows account state", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "BankAccount(owner: Alice, balance: $120)",
    "Should display Alice account after deposit 50 and withdraw 30");
});
