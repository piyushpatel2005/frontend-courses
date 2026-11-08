// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("The helper returns an independent, detached deep clone", () => withPreviewLayout(() => {
  const list = document.querySelector("#exhibits");
  const saved = [...list.childNodes];
  const original = list.querySelector(".exhibit");
  const title = original.querySelector(".exhibit-name");
  const note = original.querySelector("span");
  const oldTitle = title.textContent;
  const oldNote = note.textContent;
  try {
    note.textContent = "Temporary collection note";
    for (const name of ["Woven basket", "<em>River & Reed</em>"]) {
      const copy = window.makeExhibit(name);
      assert.equal(copy?.tagName, "LI", "Return the cloned exhibit card");
      assert.notEqual(copy, original, "Do not rename or move the sample");
      assert.equal(copy.parentNode, null, "Return the copy before insertion");
      assert.equal(copy.classList.contains("exhibit"), true);
      assert.equal(copy.querySelector(".exhibit-name")?.textContent, name);
      assert.equal(copy.querySelector(".exhibit-name")?.children.length, 0, "Keep the name literal");
      assert.equal(copy.querySelector("span")?.textContent, "Temporary collection note", "Copy the current nested note");
      assert.equal(title.textContent, oldTitle, "Leave the sample title unchanged");
      assert.equal(copy.querySelectorAll("[id]").length, 0, "Do not introduce duplicate IDs");
    }
  } finally {
    title.textContent = oldTitle;
    note.textContent = oldNote;
    list.replaceChildren(...saved);
  }
}));
test("The insertion helper transfers a fragment's two children", () => withPreviewLayout(() => {
  const list = document.querySelector("#exhibits");
  const saved = [...list.childNodes];
  const original = list.querySelector(".exhibit");
  const append = Element.prototype.append;
  const appendChild = Node.prototype.appendChild;
  let fragment = null;
  function observe(parent, nodes) {
    if (parent === list) {
      const candidate = nodes.find(node => node?.nodeType === 11);
      if (candidate) fragment = candidate;
    }
  }
  try {
    list.replaceChildren(original);
    Element.prototype.append = function (...nodes) {
      observe(this, nodes);
      return append.apply(this, nodes);
    };
    Node.prototype.appendChild = function (node) {
      observe(this, [node]);
      return appendChild.call(this, node);
    };
    window.addExhibits();
    const cards = [...list.children];
    assert.equal(cards.length, 3, "Append exactly two copies");
    assert.equal(cards.map(card => card.querySelector(".exhibit-name")?.textContent).join("|"), "Clay vessel|Woven basket|Glass bead");
    assert.exists(fragment, "Insert the prepared DocumentFragment into the list");
    assert.equal(fragment.childNodes.length, 0, "Its children should move out of the fragment");
    for (const card of cards) assert.equal(card.querySelector("span")?.textContent, "Collection item");
  } finally {
    Element.prototype.append = append;
    Node.prototype.appendChild = appendChild;
    list.replaceChildren(...saved);
  }
}));
