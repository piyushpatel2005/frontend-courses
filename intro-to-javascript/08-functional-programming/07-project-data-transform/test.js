test("Positive stock", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK stock: Laptop,Desk Chair,Bookshelf,Webcam,Monitor"), true, "Expected checkpoint: CHECK stock: Laptop,Desk Chair,Bookshelf,Webcam,Monitor");
});

test("Expensive sorted names", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK expensive: Laptop,Monitor"), true, "Expected checkpoint: CHECK expensive: Laptop,Monitor");
});

test("Inventory value", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK value: 24914 | empty: 0"), true, "Expected checkpoint: CHECK value: 24914 | empty: 0");
});

test("Grouped records", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK categories: Laptop,Headphones,Webcam,Monitor | Desk Chair,Bookshelf"), true, "Expected checkpoint: CHECK categories: Laptop,Headphones,Webcam,Monitor | Desk Chair,Bookshelf");
});

test("Stock summary", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("5 items in stock"), true, "Expected checkpoint: 5 items in stock");
});

test("Products summary", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Top products: Laptop, Monitor"), true, "Expected checkpoint: Top products: Laptop, Monitor");
});

test("Value summary", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Total value: $24,914"), true, "Expected checkpoint: Total value: $24,914");
});
