const text = el => (el?.textContent || "").trim();
const nonemptyLink = a => Boolean(text(a) && (a.getAttribute("href") || "").trim() && a.getAttribute("href") !== "#");
test("page header introduces the garden", () => {
  assert.equal(document.querySelectorAll("header").length, 1, "Use one header");
  assert.equal(Boolean(text(document.querySelector("body > header > h1"))), true, "Put a garden-name h1 in the page header");
});
test("header navigation has useful links", () => {
  const links = [...document.querySelectorAll("body > header nav a")];
  assert.equal(links.filter(nonemptyLink).length >= 2, true, "Add at least two labeled navigation links with destinations inside header");
});
test("one main follows the header", () => {
  assert.equal(document.querySelectorAll("main").length, 1, "Use one main region");
  const main = document.querySelector("body > main"), header = document.querySelector("body > header");
  assert.equal(Boolean(main && header && header.compareDocumentPosition(main) & Node.DOCUMENT_POSITION_FOLLOWING), true, "Put main after the page header");
});
test("main contains a headed garden update", () => {
  const article = document.querySelector("body > main > article");
  assert.equal(Boolean(text(article?.querySelector(":scope > h2")) && text(article?.querySelector(":scope > p"))), true, "Add a headed article with update text directly inside main");
});
test("article pairs a readable date with datetime", () => {
  const time = document.querySelector('main > article time[datetime="2026-08-15"]');
  assert.equal(text(time), "August 15, 2026", "Use the requested matching visible date and datetime inside the article");
});
test("main has a headed related-links aside", () => {
  assert.equal(document.querySelectorAll("aside").length, 1, "Add one aside");
  const aside = document.querySelector("body > main > aside"), article = document.querySelector("body > main > article");
  assert.equal(Boolean(aside && article && article.compareDocumentPosition(aside) & Node.DOCUMENT_POSITION_FOLLOWING), true, "Place aside after article, inside main");
  assert.equal(Boolean(text(aside?.querySelector("h2")) && [...aside.querySelectorAll("a")].some(nonemptyLink)), true, "Give the aside a heading and a labeled related link");
});
test("page footer follows main with closing information", () => {
  assert.equal(document.querySelectorAll("footer").length, 1, "Use one footer");
  const footer = document.querySelector("body > footer"), main = document.querySelector("body > main");
  assert.equal(Boolean(text(footer) && main && main.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING), true, "Put a footer with closing text after main");
});
