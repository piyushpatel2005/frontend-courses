test("page displays a less-than comparison", () => {
  const text = document.body.textContent;
  assert.exists(text.includes("<"), "Display a < character using the &lt; entity");
});

test("page displays a copyright symbol", () => {
  const text = document.body.textContent;
  assert.exists(text.includes("©"), "Display the © symbol using &copy;");
});

test("page displays an ampersand", () => {
  const text = document.body.textContent;
  assert.exists(text.includes("&"), "Display a literal & using &amp;");
});

test("page uses a non-breaking space", () => {
  const html = document.body.innerHTML;
  assert.exists(html.includes("&nbsp;"), "Use &nbsp; to keep two words together");
});
