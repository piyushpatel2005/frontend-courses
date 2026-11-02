test("Exact BigInt identifier", () => {
  assert.match(OUTPUT, /^CHECK 1: bigint \| 9007199254740993$/m, "Task 1: expected a separate output line: CHECK 1: bigint | 9007199254740993");
});

test("Converted numeric price", () => {
  assert.match(OUTPUT, /^CHECK 2: number \| 19\.5$/m, "Task 2: expected a separate output line: CHECK 2: number | 19.5");
});

test("Total for small BigInt counts", () => {
  assert.match(OUTPUT, /^CHECK 3: 58\.5 \| 15 \| 0$/m, "Task 3: expected a separate output line: CHECK 3: 58.5 | 15 | 0");
});

test("Separate ticket ledger", () => {
  assert.match(OUTPUT, /^Ticket 9007199254740993 \| Total: 58\.5$/m, "Task 4: expected a separate output line: Ticket 9007199254740993 | Total: 58.5");
});
