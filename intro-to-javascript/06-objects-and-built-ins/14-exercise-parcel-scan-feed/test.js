test("Parse JSON scan arrays", () => {
  assert.match(OUTPUT, /^CHECK 1: true \| Dock,T1 \| empty:0$/m, "Task 1: expected a separate output line: CHECK 1: true | Dock,T1 | empty:0");
});

test("Count every scan in a Map", () => {
  assert.match(OUTPUT, /^CHECK 2: true \| Dock=2 Gate=1 \| empty:true\/0$/m, "Task 2: expected a separate output line: CHECK 2: true | Dock=2 Gate=1 | empty:true/0");
});

test("Distinct tracking IDs in a Set", () => {
  assert.match(OUTPUT, /^CHECK 3: true \| T1,T2 \| empty:true\/0$/m, "Task 3: expected a separate output line: CHECK 3: true | T1,T2 | empty:true/0");
});

test("Summary combines helpers including empty data", () => {
  assert.match(OUTPUT, /^CHECK 4: Dock=2 \| unique=1 \| empty:true\/true\/0\/0$/m, "Task 4: expected a separate output line: CHECK 4: Dock=2 | unique=1 | empty:true/true/0/0");
});

test("Separate parcel report", () => {
  assert.match(OUTPUT, /^North: 2 \| South: 2 \| unique: 3$/m, "Task 5: expected a separate output line: North: 2 | South: 2 | unique: 3");
});
