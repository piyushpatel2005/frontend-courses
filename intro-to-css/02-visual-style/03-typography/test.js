test("body font family is set", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /body\s*\{[^}]*font-family\s*:\s*Georgia\s*,\s*serif\s*;/i, "Set body font-family to Georgia, serif");
});

test("paragraph and heading typography rules exist", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /p\s*\{[^}]*line-height\s*:\s*1\.8\s*;/i, "Set p line-height to 1.8");
  assert.match(css, /h1\s*\{[^}]*letter-spacing\s*:\s*1px\s*;/i, "Set h1 letter-spacing to 1px");
});
