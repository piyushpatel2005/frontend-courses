test("page has a container div", () => {
  assert.count("body > div.container", 1, 'Add one <div class="container"> for the swap list');
});

test("container groups two card divs", () => {
  const cards = document.querySelectorAll("body > div.container > div.card");
  assert.equal(cards.length >= 2, true, 'Add two <div class="card"> elements inside the container');
});

test("each card names its item", () => {
  const cards = document.querySelectorAll("body > div.container > div.card");
  assert.equal(cards.length >= 2, true, "Add both cards first");
  Array.from(cards).forEach(card => {
    const heading = card.querySelector("h2");
    assert.exists(heading, "Give each card an <h2>");
    assert.notEqual(heading.textContent.trim(), "", "Name each item");
  });
});

test("each card describes its item", () => {
  const cards = document.querySelectorAll("body > div.container > div.card");
  assert.equal(cards.length >= 2, true, "Add both cards first");
  Array.from(cards).forEach(card => {
    const paragraph = card.querySelector("p");
    assert.exists(paragraph, "Give each card a <p>");
    assert.notEqual(paragraph.textContent.trim(), "", "Describe each item");
  });
});

test("a card description marks a word inline", () => {
  const span = document.querySelector(".container .card p span.highlight");
  assert.exists(span, 'Wrap a key word in <span class="highlight"> inside a card paragraph');
  assert.notEqual(span.textContent.trim(), "", "Write a key word inside the span");
});
