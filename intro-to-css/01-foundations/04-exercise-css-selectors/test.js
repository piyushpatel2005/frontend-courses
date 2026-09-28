test("paragraphs use the requested line height", () => {
  const p = document.querySelector("p");
  const computed = getComputedStyle(p);
  assert.equal(["1.6", "25.6px"].includes(computed.lineHeight), true, "Set p line-height to 1.6 in style.css");
});

test("note class has the requested background", () => {
  assert.equal(getComputedStyle(document.querySelector(".care-tip")).backgroundColor, "rgb(255, 244, 204)", "Style .care-tip with background-color #fff4cc");
});

test("specimen title has the requested color", () => {
  assert.equal(getComputedStyle(document.querySelector("#sea-star-title")).color, "rgb(122, 31, 162)", "Style #sea-star-title with color #7a1fa2");
});
