test("input updates the greeting repeatedly as safe text", () => {
  const input = document.querySelector("#volunteer");
  const output = document.querySelector("#greeting");
  input.value = "Ada";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(output.textContent.trim(), "Ada", "Show the current name");
  input.value = "<em>Bea</em>";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(output.textContent.trim(), "<em>Bea</em>", "Treat typed characters as text");
  assert.equal(output.querySelector("em"), null, "Do not parse typed markup");
});
test("clearing the field restores the fallback", () => {
  const input = document.querySelector("#volunteer");
  const output = document.querySelector("#greeting");
  input.value = "";
  output.textContent = "Previously shown name"; // Do not depend on the preceding test.
  input.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(output.textContent.trim(), "friend", "Restore friend when empty");
});
