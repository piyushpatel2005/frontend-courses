test("page displays a less-than comparison", () => {
  var text = document.body.textContent;
  assert.exists(text.indexOf("<") !== -1, "Display a < character using the &lt; entity");
});

test("page displays a copyright symbol", () => {
  var text = document.body.textContent;
  assert.exists(text.indexOf("©") !== -1, "Display the © symbol using &copy;");
});

test("page displays an ampersand", () => {
  var text = document.body.textContent;
  assert.exists(text.indexOf("&") !== -1, "Display a literal & using &amp;");
});
