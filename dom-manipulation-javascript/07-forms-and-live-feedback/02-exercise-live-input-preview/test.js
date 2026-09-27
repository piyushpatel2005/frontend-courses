test("label and preview exist", () => {
  const input = document.querySelector("#volunteer");
  assert.exists(input, "Keep the volunteer field");
  assert.equal(input.labels.length > 0, true, "Give the input a connected label");
  assert.exists(document.querySelector("#greeting"), "Keep the greeting preview");
});
test("input events update the preview repeatedly and safely", () => {
  const input = document.querySelector("#volunteer");
  const output = document.querySelector("#greeting");
  input.value = "Ada";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(output.textContent.trim(), "Ada", "Use the current input value");
  input.value = "<em>Bea</em>";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(output.textContent.trim(), "<em>Bea</em>", "Treat input as text, not markup");
  assert.equal(output.querySelector("em"), null, "Do not insert typed HTML");
});
test("clearing the field restores the fallback", () => {
  const input = document.querySelector("#volunteer");
  input.value = "";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(document.querySelector("#greeting").textContent.trim(), "friend", "Restore friend when empty");
});
