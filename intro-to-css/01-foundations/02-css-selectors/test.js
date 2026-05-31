test("paragraph line-height rule exists", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /p\s*\{[^}]*line-height\s*:\s*1\.6\s*;/i, "Set line-height: 1.6 on p");
});

test("class selector .note exists", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.note\s*\{[^}]*background-color\s*:\s*#fff4cc\s*;/i, "Style .note with #fff4cc background");
});

test("id selector #hero-title exists", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /#hero-title\s*\{[^}]*color\s*:\s*#7a1fa2\s*;/i, "Style #hero-title with #7a1fa2 color");
});
