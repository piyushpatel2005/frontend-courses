test("Step 1: message value", () => {
  assert.equal(window.introCheckpoint && window.introCheckpoint.message, "JavaScript rocks!", "Set introMessage to the requested text.");
});

test("Step 2: calculated number", () => {
  assert.equal(window.introCheckpoint && window.introCheckpoint.number, 17, "Calculate introNumber as a number, not quoted text.");
});

test("Step 3: connected script displays both values", () => {
  const out = document.getElementById("output");
  assert.exists(out, "Keep the supplied output paragraph.");
  assert.exists(document.querySelector('script[src="script.js"]'), "Keep the script.js connection in index.html.");
  assert.equal(out.textContent.trim(), "JavaScript rocks! | 17", "Display the message and number separated by |.");
});
