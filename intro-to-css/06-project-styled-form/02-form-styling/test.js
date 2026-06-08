test("form uses grid layout", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.contact-form\s*\{[^}]*display\s*:\s*grid\s*;/i, "Set .contact-form display to grid");
  assert.match(css, /\.contact-form\s*\{[^}]*gap\s*:\s*12px\s*;/i, "Set .contact-form gap to 12px");
});

test("text fields have padding border and radius", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /(input|textarea)\s*[\s\S]*\{[^}]*padding\s*:/i, "Add padding to text fields");
  assert.match(css, /(input|textarea)\s*[\s\S]*\{[^}]*border\s*:/i, "Add border to text fields");
  assert.match(css, /(input|textarea)\s*[\s\S]*\{[^}]*border-radius\s*:/i, "Add border-radius to text fields");
});

test("focus styles exist for form controls", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /input:focus[\s\S]*textarea:focus[\s\S]*select:focus|input:focus,\s*textarea:focus,\s*select:focus/i, "Add focus styles for input, textarea, and select");
});
