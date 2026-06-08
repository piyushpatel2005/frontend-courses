test("form has at least 2 interest checkboxes", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  assert.isAtLeast(checkboxes.length, 2, "Add at least 2 checkboxes for interests");
});

test("form has radio group for contact method", () => {
  const radios = document.querySelectorAll('input[type="radio"]');
  assert.isAtLeast(radios.length, 2, "Add at least 2 radio options for preferred contact method");
});

test("consent checkbox is required", () => {
  const requiredConsent = document.querySelector('input[type="checkbox"][required]');
  assert.exists(requiredConsent, "Add a required consent checkbox");
});

test("radio buttons share the same name group", () => {
  const radios = Array.from(document.querySelectorAll('input[type="radio"]'));
  const uniqueNames = new Set(radios.map((r) => r.name).filter(Boolean));
  assert.equal(uniqueNames.size, 1, "Radio buttons should share one name attribute");
});

test("submit button is inside form", () => {
  const form = document.querySelector("form");
  assert.exists(form, "Form must exist");
  const submit = form ? form.querySelector('button[type="submit"], input[type="submit"]') : null;
  assert.exists(submit, "Add submit control");
});

test("each checkbox and radio has a text label", () => {
  const controls = Array.from(document.querySelectorAll('input[type="checkbox"], input[type="radio"]'));
  const allLabeled = controls.every((el) => {
    if (!el.id) return false;
    return document.querySelector('label[for="' + el.id + '"]') !== null;
  });
  assert.isTrue(allLabeled, "Ensure each radio/checkbox has a text label");
});
