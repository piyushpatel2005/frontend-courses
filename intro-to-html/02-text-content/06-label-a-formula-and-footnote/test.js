test("formula uses a subscript for the 2", () => {
  const p = document.querySelectorAll("body > p")[0];
  assert.equal(p?.querySelector("sub")?.textContent.trim(), "2", "Put the 2 in H2O inside <sub>");
  assert.equal(p?.textContent.replace(/\s/g, "").includes("H2O"), true, "Keep the formula H2O");
});
test("area unit uses a superscript for the 2", () => {
  const p = document.querySelectorAll("body > p")[1];
  assert.equal(p?.querySelector("sup")?.textContent.trim(), "2", "Put the 2 in m2 inside <sup>");
  assert.equal(p?.textContent.includes("m2"), true, "Keep the area unit m2");
});
test("field note marker uses a superscript", () => {
  const p = document.querySelectorAll("body > p")[2];
  assert.equal(p?.querySelector("sup")?.textContent.trim(), "1", "Put the note marker 1 inside <sup>");
});
