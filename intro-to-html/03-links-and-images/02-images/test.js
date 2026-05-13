test("page has at least one img", () => {
  assert.count("img", 2, "Add at least two <img> elements");
});

test("all images have alt attributes", () => {
  var images = document.querySelectorAll("img");
  var allHaveAlt = Array.from(images).every(function(img) {
    return img.hasAttribute("alt");
  });
  assert.exists(allHaveAlt, "Every <img> must have an alt attribute");
});

test("at least one image has width and height", () => {
  var sized = document.querySelector("img[width][height]");
  assert.exists(sized, "Add width and height attributes to at least one <img>");
});

test("at least one image is inside a link", () => {
  var linkedImg = document.querySelector("a img");
  assert.exists(linkedImg, "Wrap one <img> in an <a> tag to make it a clickable link");
});
