test("The number reader distinguishes valid seats from invalid answers", () => {
  const input = document.querySelector("#seats");
  const old = input.value;
  try {
    for (const [value, expected] of [["", null], ["0", null], ["1.5", null], ["13", null], ["1", 1], ["2", 2], ["12", 12]]) {
      input.value = value;
      assert.equal(readQuantity(), expected, "Read the current number, including a blank answer");
    }
  } finally { input.value = old; }
});
test("The summary follows the current numeric or invalid value", () => {
  const input = document.querySelector("#seats");
  const status = document.querySelector("#seat-status");
  const old = input.value, text = status.textContent;
  try {
    for (const [value, expected] of [["", "Choose a whole number from 1 to 12."], ["13", "Choose a whole number from 1 to 12."], ["2", "2 seats requested."], ["12", "12 seats requested."]]) {
      input.value = value;
      status.textContent = "Previous answer";
      input.dispatchEvent(new Event("input", {bubbles: true}));
      assert.text(status, expected);
      assert.equal(status.children.length, 0);
    }
  } finally { input.value = old; status.textContent = text; }
});
