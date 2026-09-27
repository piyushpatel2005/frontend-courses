test("board has accessible form and starter task", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-name");
  const status = document.querySelector("#task-status");
  assert.exists(form, "Keep the task form");
  assert.exists(input, "Keep the task input");
  assert.equal(input.labels.length > 0, true, "Label the task input");
  assert.equal(input.getAttribute("aria-describedby"), status.id, "Associate status with the field");
  assert.equal(status.getAttribute("role"), "status", "Use a status region");
  assert.exists(document.querySelector("#tasks li button"), "Keep the starter Remove button");
});
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
  assert.equal(items.length, 2, "Add a second task");
  assert.equal(last.textContent.includes("<em>Carry chairs</em>"), true, "Keep the typed characters literally");
  assert.equal(last.querySelector("em"), null, "Never parse task text as HTML");
  assert.exists(last.querySelector("button"), "Give each new task a Remove button");
});
test("delegated removal works for old and new tasks", () => {
  const list = document.querySelector("#tasks");
  const newButton = list.lastElementChild.querySelector("button");
  newButton.click();
  assert.equal(list.children.length, 1, "Remove the task created after page load");
  list.firstElementChild.querySelector("button").click();
  assert.equal(list.children.length, 0, "Remove the original task too");
});
