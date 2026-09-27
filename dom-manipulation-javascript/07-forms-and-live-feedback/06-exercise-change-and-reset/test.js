test("form contains a labelled select, reset button and summary", () => {
  const form = document.querySelector("#lights-form");
  const lights = document.querySelector("#lights");
  assert.exists(form, "Keep the lights form");
  assert.exists(lights, "Keep the lighting select");
  assert.equal(lights.labels.length > 0, true, "Connect a label to the select");
  assert.equal(lights.options[lights.selectedIndex].value, "Warm", "Warm is the initial choice");
  assert.exists(form.querySelector('[type="reset"]'), "Add a reset button");
  assert.exists(document.querySelector("#lights-summary"), "Keep the lighting summary");
});
test("change updates the summary every time", () => {
  const lights = document.querySelector("#lights");
  const summary = document.querySelector("#lights-summary");
  for (const choice of ["Cool", "Bright"]) {
    lights.value = choice;
    lights.dispatchEvent(new Event("change", { bubbles: true }));
    assert.equal(summary.textContent.trim(), choice, `Show ${choice} after change`);
  }
});
test("reset restores both control and displayed state", async () => {
  const form = document.querySelector("#lights-form");
  const lights = document.querySelector("#lights");
  lights.value = "Cool";
  lights.dispatchEvent(new Event("change", { bubbles: true }));
  form.reset();
  await new Promise((resolve) => setTimeout(resolve, 0));
  assert.equal(lights.value, "Warm", "Reset should restore the original option");
  assert.equal(document.querySelector("#lights-summary").textContent.trim(), "Warm", "Reset the displayed summary too");
});
