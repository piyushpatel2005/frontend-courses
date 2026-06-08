test("card has padding", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.card\s*\{[^}]*padding\s*:\s*16px\s*;/i, "Add padding: 16px to .card");
});

test("card has border", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.card\s*\{[^}]*border\s*:\s*2px\s+solid\s+#0ea5e9\s*;/i, "Add border: 2px solid #0ea5e9 to .card");
});

test("card has margin", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.card\s*\{[^}]*margin\s*:\s*20px\s*;/i, "Add margin: 20px to .card");
});
