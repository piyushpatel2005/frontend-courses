// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("blank submit reports the missing title without adding a task", () => withPreviewLayout(async () => {
  await new Promise(resolve => requestAnimationFrame(resolve));
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-name");
  const status = document.querySelector("#task-status");
  const before = document.querySelectorAll("#tasks li").length;
  for (const value of ["", "   "]) {
    input.value = value;
    status.textContent = "";
    const event = new Event("submit", { bubbles: true, cancelable: true });
    form.dispatchEvent(event);
    assert.equal(event.defaultPrevented, true);
    assert.equal(document.querySelectorAll("#tasks li").length, before);
    assert.equal(status.textContent.trim().length > 0, true, "Explain the missing title");
  }
}));
test("helper builds a detached safe task with a named button", () => withPreviewLayout(() => {
  for (const title of ["<em>Carry chairs</em>", "Sweep path"]) {
    const item = createTask(title);
    assert.exists(item, "Return the prepared row");
    assert.equal(item.tagName, "LI");
    assert.equal(item.isConnected, false, "Do not insert inside the builder");
    assert.equal(item.querySelector("span").textContent, title);
    assert.equal(item.querySelector("em"), null);
    const button = item.querySelector("button");
    assert.exists(button);
    assert.equal(button.type, "button");
    assert.includes(button.getAttribute("aria-label") || button.textContent, title);
  }
}));
test("valid submit inserts a task without replacing existing rows", () => withPreviewLayout(() => {
  const list = document.querySelector("#tasks");
  const original = [...list.children];
  try {
    document.querySelector("#task-name").value = "  <b>Carry chairs</b>  ";
    document.querySelector("#task-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    assert.equal(list.children.length, original.length + 1);
    assert.equal(original.every(row => row.isConnected), true);
    assert.equal(list.lastElementChild.querySelector("span").textContent, "<b>Carry chairs</b>");
    assert.equal(list.lastElementChild.querySelector("b"), null);
  } finally { list.replaceChildren(...original); }
}));
function withTask(check) {
  const list = document.querySelector("#tasks");
  const original = [...list.children];
  const item = document.createElement("li");
  item.innerHTML = '<span>Temporary fixture</span> <button type="button"><strong>Remove</strong></button>';
  list.append(item);
  try { check(item, original); }
  finally { list.replaceChildren(...original); }
}
test("delegation removes future and original rows through nested clicks", () => withPreviewLayout(() => withTask((item, original) => {
  item.querySelector("strong").click();
  assert.equal(item.isConnected, false);
  original[0].querySelector("button").click();
  assert.equal(original[0].isConnected, false);
})));
test("removal announces the clicked task", () => withPreviewLayout(() => withTask(item => {
  const status = document.querySelector("#task-status");
  status.textContent = "";
  item.querySelector("strong").click();
  assert.includes(status.textContent, "Temporary fixture");
})));
test("removal returns focus to the task field", () => withPreviewLayout(() => withTask(item => {
  item.querySelector("button").focus();
  item.querySelector("strong").click();
  assert.equal(document.activeElement, document.querySelector("#task-name"));
})));
