// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
// Each test gets fresh controls and closure state, not a previous test's clicks.
function freshWorkshop(check) {
  const root = document.querySelector("main").cloneNode(true);
  window.setupWorkshop(root);
  try { check(root); } finally { root.remove(); }
}
test("Welcome runs once", () => withPreviewLayout(() => freshWorkshop(root => {
  const button = root.querySelector("#welcome");
  button.click(); button.click(); button.click();
  assert.equal(root.querySelector("#welcome-count").textContent, "Welcomes: 1");
})));
test("Bell runs exactly once per activation", () => withPreviewLayout(() => freshWorkshop(root => {
  const bell = root.querySelector("#bell");
  bell.click();
  assert.equal(root.querySelector("#bell-count").textContent, "Bells: 1");
  bell.click();
  assert.equal(root.querySelector("#bell-count").textContent, "Bells: 2");
})));
test("Mute removes the working Bell listener", () => withPreviewLayout(() => freshWorkshop(root => {
  const bell = root.querySelector("#bell");
  bell.click();
  assert.equal(root.querySelector("#bell-count").textContent, "Bells: 1", "Bell must work before muting");
  root.querySelector("#mute").click();
  bell.click(); bell.click();
  assert.equal(root.querySelector("#bell-count").textContent, "Bells: 1");
})));
test("Standard reaches the panel once", () => withPreviewLayout(() => freshWorkshop(root => {
  root.querySelector("#standard").click();
  assert.equal(root.querySelector("#actions").textContent.trim(), "Actions: Standard Panel");
})));
test("Private stops only its own click, without canceling its default", () => withPreviewLayout(() => freshWorkshop(root => {
  let reached = 0;
  root.querySelector("#controls").addEventListener("click", () => reached++);
  const privateClick = new MouseEvent("click", {bubbles: true, cancelable: true});
  root.querySelector("#private").dispatchEvent(privateClick);
  assert.equal(reached, 0, "Stop Private before the parent listener");
  assert.equal(privateClick.defaultPrevented, false, "Propagation is not a default action");
  assert.equal(root.querySelector("#actions").textContent.trim(), "Actions: Private");
  root.querySelector("#standard").click();
  assert.equal(reached, 1, "Standard should still bubble");
})));
