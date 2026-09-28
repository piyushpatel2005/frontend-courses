test("Trimmed two-line guest sign", () => {
  assert.match(OUTPUT, /^CHECK sign: Guest: Lee \| Seat: C4$/m, "Expected this standalone Console line: CHECK sign: Guest: Lee | Seat: C4");
});

test("Separate supplied guest sign", () => {
  assert.match(OUTPUT, /^Guest: Nia\nSeat: B12$/m, "Expected this standalone Console line: Guest: Nia\nSeat: B12");
});
