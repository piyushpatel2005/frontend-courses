function hasLabel(control) {
  return !!control && !!control.id && document.querySelectorAll('[id]').length > 0 &&
    Array.from(document.querySelectorAll('[id]')).filter(el => el.id === control.id).length === 1 &&
    Array.from(control.labels || []).some(label => label.control === control && label.textContent.trim());
}
function enabled(control) { return !!control && !control.matches(':disabled'); }
function explicitLabel(control) { return hasLabel(control) && Array.from(control.labels).some(label => label.htmlFor === control.id && label.textContent.trim()); }
test("incident notes", () => {
  const ta = document.querySelector('form textarea#brief');
  assert.equal(enabled(ta) && hasLabel(ta) && !!ta.name.trim(), true, "Add the named, labeled Incident notes textarea");
  assert.equal(ta.rows >= 4, true, "Use at least four rows");
});
test("urgency choices", () => {
  const select = document.querySelector('form select#role');
  assert.equal(enabled(select) && hasLabel(select) && !!select.name.trim(), true, "Add the named, labeled Urgency select");
  const options = Array.from(select.options);
  assert.equal(options.length >= 4 && options.every(o => o.textContent.trim() && o.value.trim()) && new Set(options.map(o => o.value)).size === options.length, true, "Add four distinct, non-empty urgency choices");
});
test("one default urgency", () => {
  assert.equal(document.querySelectorAll('form select option[selected]').length, 1, "Mark exactly one urgency option selected");
});
test("rendezvous suggestions", () => {
  const dl = document.querySelector('form datalist');
  assert.exists(dl, "Add a datalist in the form");
  assert.exists(dl.id.trim(), "Give the datalist an id");
  assert.equal(Array.from(document.querySelectorAll('[id]')).filter(el => el.id === dl.id).length, 1, "Keep the datalist id unique");
  const options = Array.from(dl.options);
  assert.equal(options.length >= 3 && options.every(o => o.value.trim()) && new Set(options.map(o => o.value)).size === options.length, true, "Add three distinct non-empty suggestions");
});
test("connected rendezvous input", () => {
  const input = document.querySelector('form input#base');
  assert.equal(enabled(input) && input.type === 'text' && hasLabel(input) && !!input.name.trim(), true, "Add a named text input connected to the Rendezvous point label");
  assert.exists(input.list, "Match list to a datalist id");
  assert.equal(input.list.tagName, 'DATALIST', "Connect the input to the datalist");
});
