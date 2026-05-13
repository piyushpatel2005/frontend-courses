test("page has at least 2 details elements", () => {
  var details = document.querySelectorAll("details");
  assert.exists(details.length >= 2, "Add at least 2 <details> elements for your FAQ");
});

test("each details has a summary", () => {
  var details = document.querySelectorAll("details");
  var allHaveSummary = Array.from(details).every(function(d) {
    return d.querySelector("summary") !== null;
  });
  assert.exists(allHaveSummary, "Each <details> needs a <summary> as the clickable toggle");
});

test("one details is open by default", () => {
  var open = document.querySelector("details[open]");
  assert.exists(open, "Add the open attribute to one <details> to expand it by default");
});

test("page has a figure with an image", () => {
  var figure = document.querySelector("figure");
  assert.exists(figure, "Add a <figure> element");
  var img = figure.querySelector("img");
  assert.exists(img, "Put an <img> inside your <figure>");
});

test("figure has a figcaption", () => {
  var caption = document.querySelector("figure figcaption");
  assert.exists(caption, "Add a <figcaption> inside your <figure>");
});
