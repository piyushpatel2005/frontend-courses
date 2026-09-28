test("page has a header element", () => {
  assert.count("header", 1, "Add a <header> element");
});

test("header contains a nav", () => {
  var nav = document.querySelector("header nav");
  assert.exists(nav, "Add a <nav> inside your <header>");
  var links = nav.querySelectorAll("a");
  assert.equal(links.length >= 2, true, "Add at least 2 links inside the <nav>");
});

test("page has a main element", () => {
  assert.count("main", 1, "Add a <main> element for primary content");
});

test("main contains an article", () => {
  var article = document.querySelector("main article");
  assert.exists(article, "Add an <article> inside <main>");
  assert.exists(article.querySelector("h2"), "Give the update a heading");
  assert.equal(Boolean(article.querySelector("p")?.textContent.trim()), true, "Add update text inside the article");
});

test("article has a time element", () => {
  var time = document.querySelector("main article time[datetime]");
  assert.equal(Boolean(time && !Number.isNaN(Date.parse(time.getAttribute("datetime"))) && time.textContent.trim()), true, "Add a dated, readable <time> inside your article");
});

test("page has an aside", () => {
  assert.count("main aside", 1, "Add an <aside> inside main");
  assert.exists(document.querySelector("main aside a[href]"), "Give the aside a related link");
});

test("page has a footer", () => {
  assert.count("footer", 1, "Add a <footer> element");
  assert.equal(Boolean(document.querySelector("footer")?.textContent.trim()), true, "Add closing contact or copyright text");
});
