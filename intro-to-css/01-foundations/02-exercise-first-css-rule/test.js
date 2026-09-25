test("page links style.css", () => {
  assert.exists(document.querySelector('link[rel="stylesheet"][href="style.css"]'), "Link style.css from the page head");
});

test("body has the requested background color", () => {
  assert.equal(getComputedStyle(document.body).backgroundColor, "rgb(246, 248, 251)", "Set body background-color to #f6f8fb in style.css");
});

test("heading has the requested color", () => {
  assert.equal(getComputedStyle(document.querySelector("h1")).color, "rgb(27, 77, 140)", "Set h1 color to #1b4d8c in style.css");
});
