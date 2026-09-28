test("signal source has an h3 below the first h2", () => {
  const h3 = document.querySelector("body h3");
  assert.exists(h3, "Add a <h3> signal source");
  assert.notEqual(h3.textContent.trim(), "", "Name the signal source");
  assert.equal(h3.previousElementSibling?.tagName, "H2", "Put <h3> below the first <h2>");
});

test("location has an h4 after h3", () => {
  const h4 = document.querySelector("body h4");
  assert.exists(h4, "Add a <h4> location");
  assert.notEqual(h4.textContent.trim(), "", "Name the location");
  assert.equal(h4.previousElementSibling?.tagName, "H3", "Put <h4> below <h3>");
});

test("access route has an h5 after h4", () => {
  const h5 = document.querySelector("body h5");
  assert.exists(h5, "Add a <h5> access route");
  assert.notEqual(h5.textContent.trim(), "", "Name the access route");
  assert.equal(h5.previousElementSibling?.tagName, "H4", "Put <h5> below <h4>");
});

test("final check has an h6 after h5", () => {
  const h6 = document.querySelector("body h6");
  assert.exists(h6, "Add a <h6> final check");
  assert.notEqual(h6.textContent.trim(), "", "Write the final check");
  assert.equal(h6.previousElementSibling?.tagName, "H5", "Put <h6> below <h5>");
});

test("source-only comment introduces the detail headings", () => {
  const heading = document.querySelector("body h3");
  assert.exists(heading, "Add the detail headings first");
  // Whitespace between the comment and the heading is normal in formatted HTML.
  let node = heading.previousSibling;
  while (node && node.nodeType === 3 && !node.textContent.trim()) node = node.previousSibling;
  assert.equal(node?.nodeType, 8, "Add a comment directly above the <h3>");
  assert.notEqual(node.textContent.trim(), "", "Explain the detail headings in the comment");
});
