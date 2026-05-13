test("page has a header element", () => {
  assert.count("header", 1, "Add a <header> element");
});

test("header contains a nav", () => {
  var nav = document.querySelector("header nav");
  assert.exists(nav, "Add a <nav> inside your <header>");
  var links = nav.querySelectorAll("a");
  assert.exists(links.length >= 2, "Add at least 2 links inside the <nav>");
});

test("page has a main element", () => {
  assert.count("main", 1, "Add a <main> element for primary content");
});

test("main contains an article", () => {
  var article = document.querySelector("main article");
  assert.exists(article, "Add an <article> inside <main>");
});

test("article has a time element", () => {
  var time = document.querySelector("article time[datetime]");
  assert.exists(time, "Add a <time datetime=\"...\"> element inside your <article>");
});

test("page has an aside", () => {
  assert.count("aside", 1, "Add an <aside> with related links");
});

test("page has a footer", () => {
  assert.count("footer", 1, "Add a <footer> element");
});
