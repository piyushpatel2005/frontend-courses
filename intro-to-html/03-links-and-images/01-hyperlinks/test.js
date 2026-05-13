test("page has an external link", () => {
  var externalLink = document.querySelector('a[href^="http"]');
  assert.exists(externalLink, "Add an <a> with an absolute URL starting with http");
});

test("external link opens in a new tab", () => {
  var newTabLink = document.querySelector('a[target="_blank"]');
  assert.exists(newTabLink, "Add target=\"_blank\" to your external link");
});

test("page has an anchor link to #about", () => {
  var anchorLink = document.querySelector('a[href="#about"]');
  assert.exists(anchorLink, "Add an <a href=\"#about\"> anchor link");
});

test("page has a section with id about", () => {
  var section = document.querySelector("#about");
  assert.exists(section, "Add an element with id=\"about\" for the anchor link to target");
});
