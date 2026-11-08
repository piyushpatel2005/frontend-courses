// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
test("The external head script uses defer", () => withPreviewLayout(() => {
  const headScript = document.head.querySelector("#page-script");
  assert.exists(headScript, "Keep the script.js reference in the document head");
  assert.equal(headScript.hasAttribute("defer"), true,
    "Add defer to the external script tag in the head");
}));

test("The script marks the parsed body ready", () => withPreviewLayout(() => {
  assert.equal(document.body.dataset.ready, "yes",
    'Set document.body.dataset.ready to "yes" in script.js');
}));
