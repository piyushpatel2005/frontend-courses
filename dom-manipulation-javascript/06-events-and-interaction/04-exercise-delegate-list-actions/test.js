test("Existing row remove button works through a nested target", () => {
  const pantry = document.querySelector("#pantry");
  assert.exists(pantry);
  const label = pantry.querySelector("button[data-remove] span");
  assert.exists(label, "Keep the nested Remove label");
  label.click();
  assert.equal(pantry.children.length, 0, "Remove Rice when its nested button label is clicked");
});
test("New row button also works, while text clicks do nothing", () => {
  const pantry = document.querySelector("#pantry");
  document.querySelector("#add-item").click();
  const item = [...pantry.children].find(li => li.textContent.includes("Beans"));
  assert.exists(item, "Keep the provided Add item listener");
  item.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  assert.equal(item.isConnected, true, "A click on a row's plain text must not remove it");
  item.querySelector("button[data-remove] span").click();
  assert.equal(item.isConnected, false, "The parent listener must also handle new rows");
});
