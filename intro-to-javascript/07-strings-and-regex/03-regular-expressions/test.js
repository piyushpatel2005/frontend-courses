test("Basic email shape", () => {
  assert.match(OUTPUT, /^CHECK 1: true,true,false,false,false,false,false,false$/m, "Task 1: expected a separate output line: CHECK 1: true,true,false,false,false,false,false,false");
});

test("Digit sequences and no-match inputs", () => {
  assert.match(OUTPUT, /^CHECK 2: 3,12 \| 007,42 \| none:true\/0 \| empty:0$/m, "Task 2: expected a separate output line: CHECK 2: 3,12 | 007,42 | none:true/0 | empty:0");
});

test("Mask local parts of different lengths", () => {
  assert.match(OUTPUT, /^CHECK 3: a\*\*\*\*@example\.com \| b\*\*@domain\.org \| a@b\.test$/m, "Task 3: expected a separate output line: CHECK 3: a****@example.com | b**@domain.org | a@b.test");
});

test("Separate regex summary", () => {
  assert.match(OUTPUT, /^valid: true \| numbers: 3,12 \| masked: a\*\*\*\*@example\.com$/m, "Task 4: expected a separate output line: valid: true | numbers: 3,12 | masked: a****@example.com");
});
