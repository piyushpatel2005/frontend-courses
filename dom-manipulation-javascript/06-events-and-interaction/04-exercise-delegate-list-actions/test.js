test("The handler removes only a matching row inside its list", () => {
  const pantry = document.querySelector("#pantry");
  const saved = [...pantry.childNodes];
  const row = document.createElement("li");
  const button = document.createElement("button");
  button.dataset.remove = "";
  const span = document.createElement("span"); span.textContent = "Remove";
  button.append(span); row.append(button);
  const outside = row.cloneNode(true);
  document.body.append(outside);
  pantry.append(row);
  try {
    window.removePantryItem({target: row, currentTarget: pantry});
    assert.equal(row.parentNode, pantry, "Ignore plain row clicks");
    window.removePantryItem({target: outside.querySelector("span"), currentTarget: pantry});
    assert.equal(outside.isConnected, true, "Ignore buttons outside this list");
    window.removePantryItem({target: span, currentTarget: pantry});
    assert.equal(row.parentNode, null, "Find the button from its nested label");
  } finally { outside.remove(); pantry.replaceChildren(...saved); }
});
test("One parent listener handles existing and newly added buttons", () => {
  const pantry = document.querySelector("#pantry");
  const saved = [...pantry.childNodes];
  const outside = pantry.querySelector("li").cloneNode(true);
  document.body.append(outside);
  try {
    outside.querySelector("span").click();
    assert.equal(outside.isConnected, true, "Do not listen for removal across the whole document");
    const first = pantry.querySelector("li");
    first.querySelector("span").click();
    assert.equal(first.isConnected, false, "Connect the handler to #pantry");
    document.querySelector("#add-item").click();
    const fresh = pantry.lastElementChild;
    fresh.click();
    assert.equal(fresh.parentNode, pantry, "Leave ordinary row clicks alone");
    fresh.querySelector("span").click();
    assert.equal(fresh.isConnected, false, "Handle a button added after registration");
  } finally { outside.remove(); pantry.replaceChildren(...saved); }
});
