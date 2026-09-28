test("page has two public images", () => {
  const images = document.querySelectorAll("body img");
  assert.equal(images.length >= 2, true, "Add at least two <img> elements");
  Array.from(images).forEach(img => assert.match(img.getAttribute("src") || "", /^https:\/\//, "Use public HTTPS image URLs"));
});

test("both images describe their content", () => {
  const images = document.querySelectorAll("body img");
  assert.equal(images.length >= 2, true, "Add both images before writing alt text");
  Array.from(images).forEach(img => assert.notEqual((img.getAttribute("alt") || "").trim(), "", "Give each image descriptive alt text"));
});

test("an image reserves width and height", () => {
  const sized = document.querySelector('body img[width][height]');
  assert.exists(sized, "Add width and height to an image");
  assert.equal(Number(sized.getAttribute("width")) > 0 && Number(sized.getAttribute("height")) > 0, true, "Use positive pixel dimensions");
});

test("an image links to a page", () => {
  const linked = document.querySelector('body a[href^="https://"] img');
  assert.exists(linked, "Wrap an image in a link to a useful HTTPS page");
});
