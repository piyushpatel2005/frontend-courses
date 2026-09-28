test("Compost joins the existing help choices", () => {
  const boxes = [...document.querySelectorAll('#garden-form input[type="checkbox"][name="help"]')];
  assert.equal(boxes.length, 2, "Provide two help choices");
  assert.equal(boxes.map((box) => box.value).sort().join(","), "Compost,Watering", "Use both named values");
  assert.equal(boxes.every((box) => box.labels.length > 0), true, "Label each checkbox");
});
test("status announces updates politely", () => {
  const status = document.querySelector("#garden-status");
  assert.equal(status.getAttribute("role"), "status", "Use a status role");
  assert.equal(status.getAttribute("aria-live"), "polite", "Announce changes politely");
});
test("submit prevents navigation", () => {
  const form = document.querySelector("#garden-form");
  document.querySelector("#guest").value = "Ari";
  const event = new Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(event);
  assert.equal(event.defaultPrevented, true, "Prevent form navigation");
});
test("submit reports current help choices and none", () => {
  const form = document.querySelector("#garden-form");
  const guest = document.querySelector("#guest");
  const status = document.querySelector("#garden-status");
  guest.value = "Ari";
  const boxes = [...form.querySelectorAll('input[name="help"]')];
  boxes.forEach((box) => { box.checked = box.value === "Watering"; });
  const submit = () => { const event = new Event("submit", { bubbles: true, cancelable: true }); form.dispatchEvent(event); return event; };
  submit();
  assert.equal(status.textContent.includes("Watering"), true, "Show the checked value");
  assert.equal(status.textContent.includes("Compost"), false, "Omit unchecked values");
  boxes.forEach((box) => { box.checked = false; });
  submit();
  assert.equal(status.textContent.toLowerCase().includes("no help"), true, "Explain an empty selection");
});
test("guest name is trimmed and inserted as text", () => {
  const form = document.querySelector("#garden-form");
  const guest = document.querySelector("#guest");
  const status = document.querySelector("#garden-status");
  guest.value = "  <em>Jo</em>  ";
  form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  assert.equal(status.textContent.startsWith("<em>Jo</em>"), true, "Include the trimmed name");
  assert.equal(status.querySelector("em"), null, "Never parse names as markup");
});
test("blank guest name is rejected", () => {
  const form = document.querySelector("#garden-form");
  const guest = document.querySelector("#guest");
  const status = document.querySelector("#garden-status");
  guest.value = "   ";
  status.textContent = "Prior request"; // Set up stale feedback without another test.
  form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  assert.equal(status.textContent.includes("Prior request"), false, "Replace stale request feedback");
  assert.equal(status.textContent.toLowerCase().includes("enter your name"), true, "Explain the missing name");
});
