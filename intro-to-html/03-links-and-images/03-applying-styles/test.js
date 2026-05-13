test("h1 has an inline style", () => {
  var h1 = document.querySelector("h1");
  assert.exists(h1 && h1.getAttribute("style"), "Add a style attribute directly on your <h1>");
});

test("page has a style block in head", () => {
  var styleBlock = document.querySelector("head style");
  assert.exists(styleBlock, "Add a <style> block inside <head>");
});

test("page links an external stylesheet", () => {
  var link = document.querySelector('link[rel="stylesheet"]');
  assert.exists(link, "Add a <link rel=\"stylesheet\" href=\"style.css\" /> in <head>");
});
