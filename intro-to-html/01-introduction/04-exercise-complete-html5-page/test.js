test("page has a title tag", () => {
  const title = document.querySelector("title");
  assert.exists(title, "Add a <title> inside <head>");
  assert.notEqual(title.textContent.trim(), "", "Give the <title> some text");
});

test("page has doctype", () => {
  assert.exists(document.doctype, "Add <!DOCTYPE html> as the very first line");
  assert.equal(document.doctype.name, "html", "Doctype must be html");
});

test("page has html root with lang", () => {
  const html = document.documentElement;
  assert.exists(html, "Add <html lang=\"en\"> as root element");
  assert.equal(html.getAttribute("lang"), "en", "Set lang=\"en\" on <html>");
});

test("body has a main heading", () => {
  assert.count("h1", 1, "Add an <h1> inside <body>");
});

test("body has a paragraph", () => {
  assert.count("p", 1, "Add a <p> with some text inside <body>");
});

test("page has a comment above the heading", () => {
  const comments = Array.from(document.body.childNodes).filter((n) => n.nodeType === 8);
  assert.isAtLeast(comments.length, 1, "Add an HTML comment above the <h1>");
});