test("three practice choices", () => {
  assert.equal(document.querySelectorAll('form input[type="checkbox"]').length >= 3, true, "Add three practice checkboxes");
});

test("three training windows", () => {
  assert.equal(document.querySelectorAll('form input[type="radio"]').length >= 3, true, "Add three training-window radios");
});

test("single named radio group", () => {
  const radios = Array.from(document.querySelectorAll('form input[type="radio"]'));
  assert.equal(radios.length >= 3, true, "Add training windows first");
  assert.equal(radios[0].name !== "" && radios.every(r => r.name === radios[0].name), true, "Give every radio the same non-empty name");
});

test("one default training window", () => {
  assert.equal(document.querySelectorAll('form input[type="radio"][checked]').length, 1, "Mark exactly one radio as checked");
});

test("each choice set has a legend", () => {
  const groups = Array.from(document.querySelectorAll("form fieldset"));
  const kinds = ['checkbox', 'radio'];
  assert.equal(kinds.every(kind => groups.some(group => group.querySelector('legend')?.textContent.trim() && group.querySelectorAll(`input[type="${kind}"]`).length >= 3)), true, "Put each choice set in a fieldset with a meaningful legend");
});
