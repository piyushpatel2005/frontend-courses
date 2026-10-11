test("Trim and uppercase labels", () => {
  assert.match(OUTPUT, /^CHECK 1: B-07 \| C-12 \| B -07$/m, "Task 1: expected a separate output line: CHECK 1: B-07 | C-12 | B -07");
});

test("Rows, bay boundaries, and whole input", () => {
  assert.match(OUTPUT, /^CHECK 2: true,true,true,true \| false,false,false,false,false,false,false,false$/m, "Task 2: expected a separate output line: CHECK 2: true,true,true,true | false,false,false,false,false,false,false,false");
});

test("Separate label comparison", () => {
  assert.match(OUTPUT, /^B-07: true \| D-07: false$/m, "Task 3: expected a separate output line: B-07: true | D-07: false");
});
