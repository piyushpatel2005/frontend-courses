test("The named handler updates the hours when called", () => {
  const hours = document.querySelector("#hours");
  const saved = hours.textContent;
  try {
    hours.textContent = "Not yet called";
    window.showHours();
    assert.equal(hours.textContent, "Open until 6 pm", "Update #hours inside showHours");
  } finally { hours.textContent = saved; }
});
test("Button activation, not setup, updates the hours", () => {
  const hours = document.querySelector("#hours");
  const saved = hours.textContent;
  try {
    assert.equal(hours.textContent, "Hours not checked", "Register without calling the handler");
    document.querySelector("h1").click();
    assert.equal(hours.textContent, "Hours not checked", "Listen on the button, not the whole page");
    document.querySelector("#hours-button").click();
    assert.equal(hours.textContent, "Open until 6 pm");
  } finally { hours.textContent = saved; }
});
