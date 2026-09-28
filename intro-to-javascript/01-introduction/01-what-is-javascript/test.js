test("Step 1: message checkpoint", () => {
  assert.match(OUTPUT, /^message: JavaScript rocks!$/m, "Log the message from introMessage");
});

test("Step 2: number checkpoint", () => {
  assert.match(OUTPUT, /^number: 17$/m, "Log the calculated introNumber");
});

test("Step 3: connected script displays both values", () => {
  const out = document.getElementById("output");
  assert.exists(out, "Keep the output paragraph");
  assert.exists(document.querySelector('script[src="script.js"]'), "Connect index.html to script.js");
  assert.equal(out.textContent.trim(), "JavaScript rocks! | 17", "Show both values in #output");
});
