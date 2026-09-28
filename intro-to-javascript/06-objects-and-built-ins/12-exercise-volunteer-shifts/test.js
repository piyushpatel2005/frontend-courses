test("looks up a dynamic key including zero and missing", () => {
  assert.match(OUTPUT, /^CHECK 1: 0 \| null$/m, "Log CHECK 1 for present zero and absent key");
});
test("finds understaffed shifts in entry order", () => {
  assert.match(OUTPUT, /^CHECK 2: morning,night$/m, "Log CHECK 2 from lowShiftNames");
});
test("combines availability and low shifts", () => {
  assert.match(OUTPUT, /^CHECK 3: 0 \| morning,night$/m, "Log CHECK 3 from auditShifts");
});
test("does not modify the shift input", () => {
  assert.match(OUTPUT, /^CHECK 4: unchanged:true$/m, "Log CHECK 4 after comparing the sample input");
});

test("logs the volunteer shift audit", () => {
  assert.match(OUTPUT, /^2 \| checkIn, cleanup$/m, "Log the result from shiftSlots on its own line");
});
