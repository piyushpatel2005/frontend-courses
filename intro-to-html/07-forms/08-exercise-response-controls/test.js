test("page has a textarea with at least 4 rows", () => {
  var ta = document.querySelector("textarea");
  assert.exists(ta, "Add a <textarea> element");
  assert.equal(parseInt(ta.getAttribute("rows") || ta.rows) >= 4, true, "Set rows=\"4\" or more on your <textarea>");
});

test("page has a select with at least 4 options", () => {
  var select = document.querySelector("select");
  assert.exists(select, "Add a <select> element");
  var options = select.querySelectorAll("option");
  assert.equal(options.length >= 4, true, "Add at least 4 <option> elements inside your <select>");
});

test("one option is pre-selected", () => {
  var selected = document.querySelector("form select option[selected]");
  assert.exists(selected, "Preselect one choice in the select menu with selected");
});

test("page has a datalist with suggestions", () => {
  var dl = document.querySelector("datalist");
  assert.exists(dl, "Add a <datalist> element");
  var opts = dl.querySelectorAll("option");
  assert.equal(opts.length >= 3, true, "Add at least 3 <option> suggestions inside your <datalist>");
});

test("base suggestions are connected to a labeled field", () => {
  const dl = document.querySelector("form datalist[id]");
  assert.exists(dl, "Create the suggestions list first");
  const input = Array.from(document.querySelectorAll('form input[list]')).find(i => i.getAttribute("list") === dl.id);
  assert.exists(input, "Connect a text input to the datalist with list=id");
  assert.equal(input.id !== "" && Array.from(document.querySelectorAll("form label[for]")).some(label => label.htmlFor === input.id && label.textContent.trim()), true, "Label the suggested base field");
});
