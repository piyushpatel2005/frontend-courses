test("outdated weekday is struck through", () => {
  const p = document.querySelectorAll("body > p")[0];
  assert.equal(p?.querySelector("s")?.textContent.trim(), "Tuesday", "Mark only Tuesday with <s>");
  assert.equal(p?.textContent.includes("Wednesday"), true, "Keep the replacement weekday visible");
});
test("removed draft instruction is marked as deletion", () => {
  const p = document.querySelectorAll("body > p")[1];
  assert.equal(p?.querySelector("del")?.textContent.trim(), "Bring two tools.", "Wrap the removed instruction in <del>");
});
test("new draft instruction is marked as insertion", () => {
  const p = document.querySelectorAll("body > p")[1];
  assert.equal(p?.querySelector("ins")?.textContent.trim(), "Bring one tool.", "Wrap the new instruction in <ins>");
});
