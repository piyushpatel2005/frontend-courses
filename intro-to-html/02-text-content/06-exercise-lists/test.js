test("page has an ordered list", () => {
  assert.count("ol", 1, "Add an <ol> for step-by-step items");
});

test("ordered list has at least 3 items", () => {
  var items = document.querySelector("body ol")?.querySelectorAll(":scope > li") || [];
  assert.equal(items.length >= 3, true, "Add at least 3 <li> items inside your <ol>");
  Array.from(items).forEach(item => assert.notEqual(item.textContent.trim(), "", "Write text in every list item"));
});

test("page has an unordered list", () => {
  assert.count("ul", 1, "Add a <ul> for bullet-point items");
});

test("unordered list has at least 3 items", () => {
  var items = document.querySelector("body ul")?.querySelectorAll(":scope > li") || [];
  assert.equal(items.length >= 3, true, "Add at least 3 <li> items inside your <ul>");
  Array.from(items).forEach(item => assert.notEqual(item.textContent.trim(), "", "Write text in every list item"));
});

test("page has a description list", () => {
  assert.count("dl", 1, "Add a <dl> for term-definition pairs");
});

test("description list has at least 2 terms", () => {
  var terms = document.querySelector("body dl")?.querySelectorAll(":scope > dt") || [];
  assert.equal(terms.length >= 2, true, "Add at least 2 <dt> terms inside your <dl>");
  Array.from(terms).forEach(term => {
    assert.notEqual(term.textContent.trim(), "", "Name each term");
    assert.equal(term.nextElementSibling?.tagName, "DD", "Follow each <dt> with a <dd> definition");
    assert.notEqual(term.nextElementSibling.textContent.trim(), "", "Write a definition for each term");
  });
});
