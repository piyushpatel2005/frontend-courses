test("nav links to three fair stops", () => {
  const nav = document.querySelector("body nav");
  assert.exists(nav, "Add a <nav> for the program stops");
  ["about", "projects", "contact"].forEach(id => {
    const link = nav.querySelector(`a[href="#${id}"]`);
    assert.exists(link, `Link to #${id} inside the nav`);
    assert.notEqual(link.textContent.trim(), "", "Give each link a label");
  });
});

test("each stop has a unique section ID", () => {
  ["about", "projects", "contact"].forEach(id => {
    assert.count(`body section#${id}`, 1, `Add one <section id="${id}">`);
  });
});

test("each stop has a heading", () => {
  ["about", "projects", "contact"].forEach(id => {
    const heading = document.querySelector(`section#${id} h2`);
    assert.exists(heading, `Add an <h2> inside #${id}`);
    assert.notEqual(heading.textContent.trim(), "", `Label #${id}`);
  });
});

test("each stop contains a reusable card", () => {
  ["about", "projects", "contact"].forEach(id => {
    const card = document.querySelector(`section#${id} div.card`);
    assert.exists(card, `Add a .card in #${id}`);
    assert.notEqual(card.textContent.trim(), "", `Write content in the #${id} card`);
  });
});

test("one card carries a second class", () => {
  const cards = document.querySelectorAll("section div.card");
  assert.equal(Array.from(cards).some(card => card.classList.length >= 2), true, "Give a .card a second class");
});
