test("paragraphs use the requested line height", () => {
  const p = document.querySelector("p");
  const computed = getComputedStyle(p);
  assert.equal(computed.lineHeight, "25.6px", "Set p line-height to 1.6 in style.css");
});

test("note class has the requested background", () => {
  assert.equal(getComputedStyle(document.querySelector(".note")).backgroundColor, "rgb(255, 244, 204)", "Style .note with background-color #fff4cc");
});

test("specimen title has the requested color", () => {
  assert.equal(getComputedStyle(document.querySelector("#specimen-title")).color, "rgb(122, 31, 162)", "Style #specimen-title with color #7a1fa2");
});
