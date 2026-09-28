test("nav has a Wikipedia link", () => {
  const link = document.querySelector('nav a[href="https://www.wikipedia.org"]');
  assert.exists(link, "Add the Wikipedia link inside <nav>");
  assert.notEqual(link.textContent.trim(), "", "Give the link readable text");
});

test("external nav link safely opens a new tab", () => {
  const link = document.querySelector('nav a[href="https://www.wikipedia.org"]');
  assert.exists(link, "Add the external nav link first");
  assert.equal(link.target, "_blank", 'Set target="_blank" on the external link');
  assert.equal(link.relList.contains("noopener") && link.relList.contains("noreferrer"), true, 'Add rel="noopener noreferrer" to that link');
});

test("nav has an anchor link to #about", () => {
  const link = document.querySelector('nav a[href="#about"]');
  assert.exists(link, "Add a #about link inside <nav>");
  assert.notEqual(link.textContent.trim(), "", "Give the about link readable text");
});

test("about section follows the nav", () => {
  assert.exists(document.querySelector("nav ~ section#about"), 'Add <section id="about"> below <nav>');
});

test("about section has a heading", () => {
  const section = document.querySelector("nav ~ section#about");
  assert.exists(section, "Add the about section first");
  const heading = section.querySelector("h2");
  assert.exists(heading, "Add an <h2> inside the about section");
  assert.notEqual(heading.textContent.trim(), "", "Name the about section");
});

test("about section describes the repair café", () => {
  const section = document.querySelector("nav ~ section#about");
  assert.exists(section, "Add the about section first");
  const paragraph = section.querySelector("p");
  assert.exists(paragraph, "Add a <p> inside the about section");
  assert.notEqual(paragraph.textContent.trim(), "", "Describe the repair café");
});
