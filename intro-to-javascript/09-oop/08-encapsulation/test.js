test("Initialize private array", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK initialized: true"), true, "Expected checkpoint: CHECK initialized: true");
});

test("Read size", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK size: 0"), true, "Expected checkpoint: CHECK size: 0");
});

test("Push items", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK push: 2"), true, "Expected checkpoint: CHECK push: 2");
});

test("Pop and empty rule", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK pop: 20 | remaining: 1 | empty: undefined"), true, "Expected checkpoint: CHECK pop: 20 | remaining: 1 | empty: undefined");
});

test("Peek without removal", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK peek: 15 | size: 2 | empty: undefined"), true, "Expected checkpoint: CHECK peek: 15 | size: 2 | empty: undefined");
});

test("Empty states", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK empty: true,false"), true, "Expected checkpoint: CHECK empty: true,false");
});

test("Stack summary", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Stack size: 2 | top: 20"), true, "Expected checkpoint: Stack size: 2 | top: 20");
});
