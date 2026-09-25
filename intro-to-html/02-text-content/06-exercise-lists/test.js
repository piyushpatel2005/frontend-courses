test("page has an ordered list", () => {
  assert.count("ol", 1, "Add an <ol> for step-by-step items");
});

test("ordered list has at least 3 items", () => {
  var items = document.querySelectorAll("ol li");
  assert.exists(items.length >= 3, "Add at least 3 <li> items inside your <ol>");
});

test("page has an unordered list", () => {
  assert.count("ul", 1, "Add a <ul> for bullet-point items");
});

test("unordered list has at least 3 items", () => {
  var items = document.querySelectorAll("ul li");
  assert.exists(items.length >= 3, "Add at least 3 <li> items inside your <ul>");
});

test("page has a description list", () => {
  assert.count("dl", 1, "Add a <dl> for term-definition pairs");
});

test("description list has at least 2 terms", () => {
  var terms = document.querySelectorAll("dl dt");
  assert.exists(terms.length >= 2, "Add at least 2 <dt> terms inside your <dl>");
});
