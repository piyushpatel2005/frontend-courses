test("page has at least 2 details elements", () => {
  var details = document.querySelectorAll("details");
  assert.equal(details.length >= 2, true, "Add at least 2 <details> elements for your FAQ");
  Array.from(details).forEach(d => assert.equal(Boolean(d.querySelector("p")?.textContent.trim()), true, "Each FAQ needs answer text"));
});

test("each details has a summary", () => {
  var details = document.querySelectorAll("details");
  var allHaveSummary = Array.from(details).every(function(d) {
    return d.querySelector("summary") !== null;
  });
  assert.equal(details.length >= 2 && allHaveSummary && Array.from(details).every(d => Boolean(d.querySelector("summary")?.textContent.trim())), true, "Give each FAQ a nonempty summary");
});

test("one details is open by default", () => {
  var open = document.querySelector("details[open]");
  assert.exists(open, "Add the open attribute to one <details> to expand it by default");
  assert.count("details[open]", 1, "Only one FAQ should start expanded");
});

test("page has a figure with an image", () => {
  var figure = document.querySelector("figure");
  assert.exists(figure, "Add a <figure> element");
  var img = figure.querySelector("img");
  assert.exists(img, "Put an <img> inside your <figure>");
  assert.equal(Boolean(img.getAttribute("src")?.trim() && img.getAttribute("alt")?.trim()), true, "Give the image a source and descriptive alt text");
});

test("figure has a figcaption", () => {
  var caption = document.querySelector("figure figcaption");
  assert.equal(Boolean(caption && caption.textContent.trim()), true, "Add a nonempty <figcaption> inside your <figure>");
});
