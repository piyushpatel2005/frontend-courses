test("page has anchor links for all three sections", () => {
  var links = ["#about", "#projects", "#contact"];
  links.forEach(function(href) {
    var el = document.querySelector('a[href="' + href + '"]');
    assert.exists(el, "Add an anchor link pointing to " + href);
  });
});

test("page has sections with correct ids", () => {
  var ids = ["about", "projects", "contact"];
  ids.forEach(function(id) {
    var el = document.getElementById(id);
    assert.exists(el, "Add a section with id=\"" + id + "\"");
  });
});

test("page has at least 3 card divs", () => {
  var cards = document.querySelectorAll(".card");
  assert.exists(cards.length >= 3, "Add at least one .card inside each section");
});

test("at least one element has two classes", () => {
  var all = document.querySelectorAll("[class]");
  var multiClass = Array.from(all).some(function(el) {
    return el.className.trim().split(/\s+/).length >= 2;
  });
  assert.exists(multiClass, "Add an element with two classes e.g. class=\"card highlight\"");
});
