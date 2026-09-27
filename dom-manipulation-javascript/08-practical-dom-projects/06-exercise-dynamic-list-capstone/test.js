test("blank submit does not navigate or add a task", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-name");
  const before = document.querySelectorAll("#tasks li").length;
  input.value = "   ";
  const event = new Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(event);
  assert.equal(event.defaultPrevented, true, "Prevent form navigation");
  assert.equal(document.querySelectorAll("#tasks li").length, before, "Do not create a blank task");
  assert.equal(document.querySelector("#task-status").textContent.trim().length > 0, true, "Explain what is missing");
});
test("submit adds a removable task as safe text", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-name");
  input.value = "<em>Carry chairs</em>";
  form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  const items = [...document.querySelectorAll("#tasks li")];
  const last = items[items.length - 1];
  try {
    assert.equal(items.length, 2, "Add a second task");
    assert.equal(last.textContent.includes("<em>Carry chairs</em>"), true, "Keep the typed characters literally");
    assert.equal(last.querySelector("em"), null, "Never parse task text as HTML");
    assert.exists(last.querySelector("button"), "Give each new task a Remove button");
  } finally {
    if (items.length > 1) last.remove(); // Restore the starter row even if an assertion fails.
  }
});
test("delegated removal works for old and new tasks", () => {
  const list = document.querySelector("#tasks");
  const original = list.querySelector("li");
  const added = document.createElement("li");
  added.innerHTML = "<span>Set out tables</span> <button type='button'>Remove</button>";
  list.append(added); // Set up a new task independently of the submit handler.
  try {
    added.querySelector("button").click();
    assert.equal(added.isConnected, false, "Remove a task inserted after page load");
    original.querySelector("button").click();
    assert.equal(original.isConnected, false, "Remove the original task too");
  } finally {
    added.remove();
    if (!original.isConnected) list.prepend(original);
  }
});
