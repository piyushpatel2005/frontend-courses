test("page has at least 3 checkboxes", () => {
  var boxes = document.querySelectorAll('input[type="checkbox"]');
  assert.exists(boxes.length >= 3, "Add at least 3 checkboxes");
});

test("page has at least 3 radio buttons", () => {
  var radios = document.querySelectorAll('input[type="radio"]');
  assert.exists(radios.length >= 3, "Add at least 3 radio buttons");
});

test("radio buttons share the same name", () => {
  var radios = document.querySelectorAll('input[type="radio"]');
  var names = new Set(Array.from(radios).map(function(r) { return r.name; }));
  assert.exists(names.size === 1, "All radio buttons should share the same name attribute to group them");
});

test("one radio button is pre-selected", () => {
  var checked = document.querySelector('input[type="radio"][checked]');
  assert.exists(checked, "Add the checked attribute to one radio button to pre-select it");
});

test("page uses fieldset and legend", () => {
  var fieldsets = document.querySelectorAll("fieldset");
  var legends = document.querySelectorAll("legend");
  assert.exists(fieldsets.length >= 1 && legends.length >= 1, "Wrap your inputs in a <fieldset> with a <legend>");
});
