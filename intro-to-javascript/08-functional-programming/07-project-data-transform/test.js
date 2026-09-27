test("Positive-stock items", () => {
  assert.match(OUTPUT, /^CHECK stock: Laptop,Desk Chair,Bookshelf,Webcam,Monitor$/m, "Expected this standalone Console line: CHECK stock: Laptop,Desk Chair,Bookshelf,Webcam,Monitor");
});

test("Expensive sorted names", () => {
  assert.match(OUTPUT, /^CHECK expensive: Laptop,Monitor$/m, "Expected this standalone Console line: CHECK expensive: Laptop,Monitor");
});

test("Inventory total value", () => {
  assert.match(OUTPUT, /^CHECK value: 24914$/m, "Expected this standalone Console line: CHECK value: 24914");
});

test("Category grouping", () => {
  assert.match(OUTPUT, /^CHECK categories: Electronics=4 \| Furniture=2$/m, "Expected this standalone Console line: CHECK categories: Electronics=4 | Furniture=2");
});

test("Standalone stock count", () => {
  assert.match(OUTPUT, /^5 items in stock$/m, "Expected this standalone Console line: 5 items in stock");
});

test("Standalone top products", () => {
  assert.match(OUTPUT, /^Top products: Laptop, Monitor$/m, "Expected this standalone Console line: Top products: Laptop, Monitor");
});

test("Standalone inventory value", () => {
  assert.match(OUTPUT, /^Total value: \$24,914$/m, "Expected this standalone Console line: Total value: $24,914");
});
