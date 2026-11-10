test("Select delivered parcels", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK delivered: 1500,2000 | original: 3"), true, "Expected checkpoint: CHECK delivered: 1500,2000 | original: 3");
});

test("Convert weights", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK weights: 0.75,1.25"), true, "Expected checkpoint: CHECK weights: 0.75,1.25");
});

test("Sum with empty input", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK sum: 2 | empty: 0"), true, "Expected checkpoint: CHECK sum: 2 | empty: 0");
});

test("Compose helpers", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK composed: 2,3.5 | empty: 0,0"), true, "Expected checkpoint: CHECK composed: 2,3.5 | empty: 0,0");
});

test("Format supplied fields", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK format: Delivered 0 parcels weighing 0 kg | Delivered 3 parcels weighing 4 kg"), true, "Expected checkpoint: CHECK format: Delivered 0 parcels weighing 0 kg | Delivered 3 parcels weighing 4 kg");
});

test("Composed summary", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Delivered 2 parcels weighing 3.5 kg"), true, "Expected checkpoint: Delivered 2 parcels weighing 3.5 kg");
});
