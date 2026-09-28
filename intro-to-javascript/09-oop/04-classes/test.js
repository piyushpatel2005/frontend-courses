test('constructor stores the owner', () => {
  assert.includes(OUTPUT, 'account owner: Alice', 'Log the owner from the new account');
});

test('balance getter reads the starting balance', () => {
  assert.includes(OUTPUT, 'initial balance: 100', 'Log the initial balance');
});

test('positive deposits', () => {
  assert.includes(OUTPUT, 'deposit balance: 50', "Expected the labeled Console checkpoint: deposit balance: 50");
});

test('negative deposits ignored', () => {
  assert.includes(OUTPUT, 'negative deposit balance: 100', "Expected the labeled Console checkpoint: negative deposit balance: 100");
});

test('successful withdrawal', () => {
  assert.includes(OUTPUT, 'withdraw success: true, balance: 70', "Expected the labeled Console checkpoint: withdraw success: true, balance: 70");
});

test('insufficient funds', () => {
  assert.includes(OUTPUT, 'withdraw denied: false, balance: 50', 'Deny an overdraw without changing the balance');
});

test('nonpositive withdrawal', () => {
  assert.includes(OUTPUT, 'invalid withdrawal: false, balance: 50', 'Reject a negative withdrawal without changing the balance');
});

test('formatted account description', () => {
  assert.match(OUTPUT, /^account description: BankAccount\(owner: Alice, balance: \$120\)$/m, 'Log the formatted account description on its own line');
});

test('mission result logged', () => {
  assert.match(OUTPUT, /^mission result: BankAccount\(owner: Alice, balance: \$120\)$/m, 'Log the mission result on its own line');
});

