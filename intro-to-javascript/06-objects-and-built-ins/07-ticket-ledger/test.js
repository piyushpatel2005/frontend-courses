test("ticketId stores an exact BigInt", () => {
  assert.match(OUTPUT, /^CHECK 1: bigint \| 9007199254740993$/m, "Log CHECK 1 from ticketId");
});
test("ticketPrice converts text to a Number", () => {
  assert.match(OUTPUT, /^CHECK 2: 19\.5$/m, "Log CHECK 2 from ticketPrice");
});

test("calculateTotal converts the ticket count deliberately", () => {
  assert.match(OUTPUT, /^CHECK 3: 58\.5$/m, "Log CHECK 3 from calculateTotal");
});

test("logs the ticket ledger", () => {
  assert.match(OUTPUT, /^Ticket 9007199254740993 \| Total: 58\.5$/m, "Log the ledger on its own line");
});
