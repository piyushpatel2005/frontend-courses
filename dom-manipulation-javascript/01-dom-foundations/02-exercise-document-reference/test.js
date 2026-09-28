test("The body records the language from the document element", () => {
  assert.equal(document.body.dataset.language, document.documentElement.lang,
    "Read document.documentElement.lang and assign it to document.body.dataset.language");
  assert.equal(document.body.dataset.language, "en", "The badge needs the page language, en");
});
