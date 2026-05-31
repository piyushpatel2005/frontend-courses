test("form contains interactive choice controls", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const radios = document.querySelectorAll('input[type="radio"]');
  assert.isAtLeast(checkboxes.length, 3, "Add at least 3 checkboxes including consent");
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

test("user interaction: select options and submit", () => {
  const form = document.querySelector("form");
  const checkbox = document.querySelector('input[type="checkbox"]');
  const radio = document.querySelector('input[type="radio"]');
  const submit = document.querySelector('button[type="submit"], input[type="submit"]');

  assert.exists(form, "Form must exist");
  assert.exists(checkbox, "Add at least one checkbox");
  assert.exists(radio, "Add at least one radio input");
  assert.exists(submit, "Add submit control");

  checkbox.click();
  radio.click();
  assert.isTrue(checkbox.checked, "Checkbox should be selectable");
  assert.isTrue(radio.checked, "Radio option should be selectable");

  let submitted = false;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitted = true;
  });
  submit.click();
  assert.isTrue(submitted, "Form should submit when user clicks submit");
});
