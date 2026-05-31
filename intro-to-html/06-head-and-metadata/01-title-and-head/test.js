test("page has a descriptive title", () => {
  var title = document.querySelector("title");
  assert.exists(title && title.textContent.trim().length > 5, "Add a <title> with a meaningful description (more than 5 chars)");
});

test("page has a viewport meta tag", () => {
  var viewport = document.querySelector('meta[name="viewport"]');
  assert.exists(viewport, "Add <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />");
});

test("page has a description meta tag", () => {
  var desc = document.querySelector('meta[name="description"]');
  assert.exists(desc, "Add <meta name=\"description\" content=\"...\" />");
});

test("page links a stylesheet", () => {
  var link = document.querySelector('link[rel="stylesheet"]');
  assert.exists(link, "Add a <link rel=\"stylesheet\" href=\"style.css\" /> tag in <head>");
});
