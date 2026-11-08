// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("The current room property changes", () => withPreviewLayout(() => {
  const room = document.getElementById("room-input");
  assert.exists(room, "Keep the room input");
  assert.equal(room.value, "East room", "Set the input's current value property");
  assert.equal(room.getAttribute("value"), "West room", "Keep the original value attribute");
}));

test("The current property is displayed", () => withPreviewLayout(() => {
  assert.equal(document.getElementById("current-room").textContent.trim(), "East room",
    "Show the current value property in #current-room");
}));

test("The original HTML value is displayed", () => withPreviewLayout(() => {
  const room = document.getElementById("room-input");
  assert.equal(document.getElementById("default-room").textContent.trim(), room.getAttribute("value"),
    "Read the original value attribute into #default-room");
  assert.equal(room.getAttribute("value"), "West room", "Keep the HTML default unchanged");
}));

test("The element and its text child have distinct node types", () => withPreviewLayout(() => {
  const label = document.getElementById("room-label");
  assert.exists(label, "Keep the room label");
  assert.equal(label.nodeType, 1, "The room label should be an element");
  assert.equal(label.firstChild.nodeType, 3, "Its first child should be a text node");
  assert.equal(document.getElementById("room-node-types").textContent.trim(),
    `${label.nodeType} / ${label.firstChild.nodeType}`, "Report 1 / 3 in #room-node-types");
}));
