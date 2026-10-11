test("Trimmed two-line guest sign", () => {
  assert.match(OUTPUT, /^CHECK 1: Guest: Lee \| Seat: C4 \/ Guest: Jo Lee \| Seat: A1$/m, "Task 1: expected a separate output line: CHECK 1: Guest: Lee | Seat: C4 / Guest: Jo Lee | Seat: A1");
});

test("Separate supplied guest sign", () => {
  assert.match(OUTPUT, /^Guest: Nia\nSeat: B12$/m, "Task 2: expected a separate output line: Guest: Nia\nSeat: B12");
});
