test("The external head script uses defer", () => {
  const headScript = document.head.querySelector('script[src="script.js"]');
  assert.exists(headScript, "Keep the script.js reference in the document head");
  assert.equal(headScript.hasAttribute("defer"), true,
    "Add defer to the external script tag in the head");
});

test("The script marks the parsed body ready", () => {
  assert.equal(document.body.dataset.ready, "yes",
    'Set document.body.dataset.ready to "yes" in script.js');
});
