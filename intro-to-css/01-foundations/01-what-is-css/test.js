test("page has style block", () => {
  assert.exists(document.querySelector("head style"), "Add a <style> tag in <head>");
});

test("body background-color is set", () => {
  const css = document.querySelector("head style").textContent;
  assert.match(css, /body\s*\{[^}]*background-color\s*:\s*#f6f8fb\s*;/i, "Set body background-color to #f6f8fb");
});

test("h1 color is set", () => {
  const css = document.querySelector("head style").textContent;
  assert.match(css, /h1\s*\{[^}]*color\s*:\s*#1b4d8c\s*;/i, "Set h1 color to #1b4d8c");
});
