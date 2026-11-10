function labeled(control) {
  return Array.from(control.labels || []).some(label => label.control === control && label.textContent.trim());
}
function choices(type) { return Array.from(document.querySelectorAll(`form input[type="${type}"]`)).filter(el => !el.matches(':disabled')); }
function distinctValues(items) { return items.every(el => el.getAttribute('value')?.trim()) && new Set(items.map(el => el.value)).size === items.length; }
test("supply choices", () => {
  const inputs = choices('checkbox');
  assert.equal(inputs.length >= 3 && inputs.every(i => i.name === 'supplies' && labeled(i)) && distinctValues(inputs), true, "Add three named, labeled supplies with distinct values");
});
test("delivery choices", () => {
  const inputs = choices('radio');
  assert.equal(inputs.length >= 3 && inputs.every(labeled) && distinctValues(inputs), true, "Add three labeled delivery windows with distinct values");
});
test("one delivery group", () => {
  const inputs = choices('radio');
  assert.equal(inputs.length >= 3 && !!inputs[0].name.trim() && inputs.every(i => i.name === inputs[0].name && i.form === inputs[0].form), true, "Give delivery radios one shared non-empty name");
  const before = inputs.map(i => i.checked);
  try { inputs[0].checked = true; inputs[1].checked = true; assert.equal(inputs[0].checked, false, "Only one window can stay selected"); }
  finally { inputs.forEach((i,n) => { i.checked = before[n]; }); }
});
test("one default window", () => {
  assert.equal(choices('radio').filter(i => i.hasAttribute('checked')).length, 1, "Mark exactly one window checked");
});
test("supplies fieldset", () => {
  const inputs = choices('checkbox');
  const group = inputs[0]?.closest('fieldset');
  assert.equal(inputs.length >= 3 && !!group && inputs.every(i => i.closest('fieldset') === group), true, "Put supplies in their own fieldset");
  assert.equal(group.firstElementChild?.tagName, 'LEGEND', "Put the legend first in the fieldset");
  assert.exists(group.firstElementChild.textContent.trim(), "Describe the group in its legend");
  assert.equal(group.querySelector('input[type="radio"]'), null, "Keep the two choice groups separate");
});
test("delivery windows fieldset", () => {
  const inputs = choices('radio');
  const group = inputs[0]?.closest('fieldset');
  assert.equal(inputs.length >= 3 && !!group && inputs.every(i => i.closest('fieldset') === group), true, "Put delivery windows in their own fieldset");
  assert.equal(group.firstElementChild?.tagName, 'LEGEND', "Put the legend first in the fieldset");
  assert.exists(group.firstElementChild.textContent.trim(), "Describe the group in its legend");
  assert.equal(group.querySelector('input[type="checkbox"]'), null, "Keep the two choice groups separate");
});
