test("Shows the visitor caption exactly", () => {
  const caption = document.querySelector("#caption");
  assert.exists(caption, "Keep the #caption paragraph");
  assert.equal(caption.textContent, "A sketch of <clouds>", "Write visitorCaption into #caption");
  assert.equal(caption.children.length, 0, "Do not parse visitor input into HTML elements");
  assert.equal(caption.innerHTML, "A sketch of &lt;clouds&gt;", "Use textContent to escape the angle brackets");
});
