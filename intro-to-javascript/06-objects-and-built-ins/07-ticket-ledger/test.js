test("ticketId and ticketPrice use the intended numeric types", () => {
  assert.equal(typeof ticketId, "bigint", "Create ticketId as a BigInt");
  assert.equal(ticketId, 9007199254740993n, "Use the required ticket ID");
  assert.equal(ticketPrice, 19.5, "Convert the text price with Number()");
});

test("calculateTotal converts the ticket count deliberately", () => {
  assert.equal(typeof calculateTotal, "function", "Define calculateTotal(ticketCount, price)");
  assert.equal(calculateTotal(3n, 19.5), 58.5);
});

test("logs the ticket ledger", () => {
  assert.includes(OUTPUT, "Ticket 9007199254740993 | Total: 58.5", "Log the exact ledger summary");
});
