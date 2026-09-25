test("h1 has inline style", () => {
  const h1 = document.querySelector("h1");
  assert.exists(h1.getAttribute("style"), "Add inline style to h1");
});

test("internal style rule exists", () => {
  const css = document.querySelector("head style").textContent;
  assert.match(css, /p\s*\{[^}]*font-size\s*:\s*18px\s*;/i, "Set p font-size to 18px in style block");
});

test("external stylesheet linked", () => {
  assert.exists(document.querySelector('link[rel="stylesheet"][href="style.css"]'), "Link style.css from head");
});

test("body background-color is set in style.css", () => {
  const bg = getComputedStyle(document.body).backgroundColor;
  assert.equal(bg, "rgb(238, 246, 255)", "Set body background-color to #eef6ff in style.css");
});
