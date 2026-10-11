test("Initialize account", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK constructor: Alice,100 | default: 0"), true, "Expected checkpoint: CHECK constructor: Alice,100 | default: 0");
});

test("Read balance", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK balance: 100"), true, "Expected checkpoint: CHECK balance: 100");
});

test("Deposit rule", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK deposit: 50"), true, "Expected checkpoint: CHECK deposit: 50");
});

test("Withdrawal rule", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK withdraw: true,false,false,false,true | balance: 0"), true, "Expected checkpoint: CHECK withdraw: true,false,false,false,true | balance: 0");
});

test("Describe accounts", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK description: BankAccount(owner: Alice, balance: $120) | BankAccount(owner: Jo, balance: $20)"), true, "Expected checkpoint: CHECK description: BankAccount(owner: Alice, balance: $120) | BankAccount(owner: Jo, balance: $20)");
});

test("Standalone account", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("mission result: BankAccount(owner: Alice, balance: $120)"), true, "Expected checkpoint: mission result: BankAccount(owner: Alice, balance: $120)");
});
