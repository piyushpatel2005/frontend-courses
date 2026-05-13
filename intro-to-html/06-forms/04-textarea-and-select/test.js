test("page has a textarea with at least 4 rows", () => {
  var ta = document.querySelector("textarea");
  assert.exists(ta, "Add a <textarea> element");
  assert.exists(parseInt(ta.getAttribute("rows") || ta.rows) >= 4, "Set rows=\"4\" or more on your <textarea>");
});

test("page has a select with at least 4 options", () => {
  var select = document.querySelector("select");
  assert.exists(select, "Add a <select> element");
  var options = select.querySelectorAll("option");
  assert.exists(options.length >= 4, "Add at least 4 <option> elements inside your <select>");
});

test("one option is pre-selected", () => {
  var selected = document.querySelector("option[selected]");
  assert.exists(selected, "Add the selected attribute to one <option> to pre-select it");
});

test("page has a datalist with suggestions", () => {
  var dl = document.querySelector("datalist");
  assert.exists(dl, "Add a <datalist> element");
  var opts = dl.querySelectorAll("option");
  assert.exists(opts.length >= 3, "Add at least 3 <option> suggestions inside your <datalist>");
});
