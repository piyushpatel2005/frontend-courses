// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
// Restore the exact form/display state even when an assertion fails.
async function withRestoredState(check) {
  const elements = [...document.querySelectorAll("input, select, [role='status'], strong, button")];
  const saved = elements.map(el => ({el, value:el.value, checked:el.checked,
    invalid:el.getAttribute("aria-invalid"), children:[...el.childNodes]}));
  const focus = document.activeElement;
  try { await check(); } finally {
    for (const {el,value,checked,invalid,children} of saved) {
      if (value !== undefined) el.value = value;
      if (checked !== undefined) el.checked = checked;
      if (invalid === null) el.removeAttribute("aria-invalid"); else el.setAttribute("aria-invalid", invalid);
      if (el.matches("[role='status'], strong")) el.replaceChildren(...children);
    }
    if (focus?.isConnected) focus.focus();
  }
}
function submitGarden() {
  const event = new Event("submit", {bubbles: true, cancelable: true});
  document.querySelector("#garden-form").dispatchEvent(event);
  return event;
}
test("Submit prevents navigation with or without a name", () => withPreviewLayout(() => withRestoredState(async () => {
  for (const name of ["Ari", "  "]) {
    document.querySelector("#guest").value = name;
    assert.equal(submitGarden().defaultPrevented, true);
  }
})));
test("Each request reads current successful help controls", () => withPreviewLayout(() => withRestoredState(async () => {
  const form = document.querySelector("#garden-form");
  const status = document.querySelector("#garden-status");
  document.querySelector("#guest").value = "Ari";
  const boxes = [...form.querySelectorAll('[name="help"]')];
  const saved = boxes.map(box => ({box, checked:box.checked, disabled:box.disabled}));
  const extra = document.createElement("input");
  extra.type = "checkbox"; extra.name = "help"; extra.value = "Mulch";
  form.append(extra);
  try {
    for (const selections of [[], ["Watering"], ["Compost"], ["Watering", "Compost"]]) {
      boxes.forEach(box => { box.checked = selections.includes(box.value); box.disabled = false; });
      extra.checked = false;
      submitGarden();
      for (const box of boxes) assert.equal(status.textContent.includes(box.value), selections.includes(box.value));
      if (!selections.length) assert.includes(status.textContent.toLowerCase(), "no help selected");
    }
    boxes.forEach(box => { box.checked = true; box.disabled = true; });
    extra.checked = true;
    submitGarden();
    assert.includes(status.textContent, "Mulch", "Read current named controls rather than fixed labels");
    for (const box of boxes) assert.equal(status.textContent.includes(box.value), false, "Omit disabled controls");
  } finally {
    extra.remove();
    saved.forEach(({box,checked,disabled}) => {box.checked=checked;box.disabled=disabled;});
  }
})));
test("The report begins with the trimmed, literal guest name", () => withPreviewLayout(() => withRestoredState(async () => {
  const status = document.querySelector("#garden-status");
  for (const name of ["Ari", "<em>Jo</em>"]) {
    document.querySelector("#guest").value = "  " + name + "  ";
    submitGarden();
    assert.equal(status.textContent.startsWith(name + " requested "), true);
    assert.equal(status.children.length, 0, "Names must not become HTML");
  }
})));
test("Blank names replace the old request with an error", () => withPreviewLayout(() => withRestoredState(async () => {
  const status = document.querySelector("#garden-status");
  for (const blank of ["", "   "]) {
    document.querySelector("#guest").value = blank;
    status.textContent = "Prior request";
    submitGarden();
    assert.includes(status.textContent.toLowerCase(), "enter your name");
    assert.equal(status.textContent.includes("requested"), false);
  }
})));
