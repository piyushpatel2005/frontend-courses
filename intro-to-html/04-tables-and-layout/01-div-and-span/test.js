test("page has a container div", () => {
  var container = document.querySelector("div.container");
  assert.exists(container, "Add a <div class=\"container\"> to wrap your content");
});

test("page has at least two card divs", () => {
  var cards = document.querySelectorAll("div.card");
  assert.exists(cards.length >= 2, "Add at least two <div class=\"card\"> elements");
});

test("each card has a heading and paragraph", () => {
  var cards = document.querySelectorAll("div.card");
  var allHaveContent = Array.from(cards).every(function(card) {
    return card.querySelector("h2") && card.querySelector("p");
  });
  assert.exists(allHaveContent, "Each .card should contain an <h2> and a <p>");
});

test("page uses a span element", () => {
  assert.count("span", 1, "Add a <span> to highlight a word inside a paragraph");
});
