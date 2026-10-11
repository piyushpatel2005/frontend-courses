test("Lookup includes zero and missing keys", () => {
  assert.match(OUTPUT, /^CHECK 1: 0 \| 4 \| null \| null$/m, "Task 1: expected a separate output line: CHECK 1: 0 | 4 | null | null");
});

test("Below-minimum names in entry order", () => {
  assert.match(OUTPUT, /^CHECK 2: morning,night \| boundary:b \| empty:0$/m, "Task 2: expected a separate output line: CHECK 2: morning,night | boundary:b | empty:0");
});

test("Combined audit leaves its input unchanged", () => {
  assert.match(OUTPUT, /^CHECK 3: 0 \| morning,night \| missing:null \| unchanged:true$/m, "Task 3: expected a separate output line: CHECK 3: 0 | morning,night | missing:null | unchanged:true");
});

test("Separate shift report", () => {
  assert.match(OUTPUT, /^2 \| checkIn, cleanup$/m, "Task 4: expected a separate output line: 2 | checkIn, cleanup");
});
