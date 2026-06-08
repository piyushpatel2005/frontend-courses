test("inStockItems excludes out-of-stock items", () => {
  assert.equal(inStockItems.length, 5, "5 items have stock > 0");
  assert.ok(inStockItems.every(i => i.stock > 0), "All inStockItems should have stock > 0");
  assert.ok(!inStockItems.some(i => i.name === "Headphones"), "Headphones (stock 0) should be excluded");
});

test("expensiveItems contains correct names sorted by price desc", () => {
  assert.deepEqual(expensiveItems, ["Laptop", "Monitor"],
    "Items with price >= 300 sorted descending: Laptop (999), Monitor (549)");
});

test("totalValue calculates correctly", () => {
  assert.equal(typeof totalValue, "function", "Define totalValue");
  const tv = totalValue(inventory);
  // 999*15 + 299*8 + 149*0 + 189*12 + 79*25 + 549*6
  // = 14985 + 2392 + 0 + 2268 + 1975 + 3294 = 24914
  assert.equal(tv, 24914, "Total inventory value should be 24914");
});

test("byCategory groups correctly", () => {
  assert.equal(typeof byCategory, "function", "Define byCategory");
  const grouped = byCategory(inventory);
  assert.ok("Electronics" in grouped, "Should have Electronics key");
  assert.ok("Furniture" in grouped, "Should have Furniture key");
  assert.equal(grouped.Electronics.length, 4, "4 Electronics items");
  assert.equal(grouped.Furniture.length, 2, "2 Furniture items");
});

test("#in-stock-count shows correct count", () => {
  var el = document.getElementById("in-stock-count");
  assert.exists(el, "Keep <p id=\"in-stock-count\">");
  assert.equal(el.textContent.trim(), "5 items in stock");
});

test("#top-products shows expensive items", () => {
  var el = document.getElementById("top-products");
  assert.exists(el, "Keep <p id=\"top-products\">");
  assert.equal(el.textContent.trim(), "Top products: Laptop, Monitor");
});

test("#total-value shows formatted value", () => {
  var el = document.getElementById("total-value");
  assert.exists(el, "Keep <p id=\"total-value\">");
  assert.equal(el.textContent.trim(), "Total value: $24,914");
});
