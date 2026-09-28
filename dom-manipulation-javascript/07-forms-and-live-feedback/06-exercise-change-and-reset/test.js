test("change updates the summary every time", () => {
  const lights = document.querySelector("#lights");
  const summary = document.querySelector("#lights-summary");
  for (const choice of ["Cool", "Bright"]) {
    lights.value = choice;
    lights.dispatchEvent(new Event("change", { bubbles: true }));
    assert.equal(summary.textContent.trim(), choice, `Show ${choice} after change`);
  }
});
test("reset restores the displayed state", async () => {
  const form = document.querySelector("#lights-form");
  const lights = document.querySelector("#lights");
  const summary = document.querySelector("#lights-summary");
  lights.value = "Cool";
  summary.textContent = "Cool"; // Set up the prior display without relying on the change listener.
  form.reset();
  await new Promise((resolve) => setTimeout(resolve, 0));
  assert.equal(lights.value, "Warm", "The native reset restores the original option");
  assert.equal(summary.textContent.trim(), "Warm", "Reset the displayed summary too");
});
