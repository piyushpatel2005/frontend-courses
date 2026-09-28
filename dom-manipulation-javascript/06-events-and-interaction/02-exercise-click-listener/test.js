test("showHours is a named function that updates the status", () => {
  assert.equal(typeof showHours, "function", "Define the named showHours function");
  assert.equal(document.querySelector("#hours").textContent, "Hours not checked", "Keep the initial status until activated");
  showHours();
  assert.equal(document.querySelector("#hours").textContent, "Open until 6 pm", "showHours should update #hours");
});
test("Button activation updates the hours", () => {
  const hours = document.querySelector("#hours");
  hours.textContent = "Hours not checked";
  document.querySelector("#hours-button").click();
  assert.equal(hours.textContent, "Open until 6 pm", "Register showHours with addEventListener on the button");
});
