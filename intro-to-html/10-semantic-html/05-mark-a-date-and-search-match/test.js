test("event date is machine-readable", () => {
  const p = document.querySelector("main > p:first-of-type");
  const time = p?.querySelector("time");
  assert.exists(time, "Wrap the date in the first paragraph with <time>");
  assert.equal(time.getAttribute("datetime"), "2027-05-08", "Use datetime=\"2027-05-08\"");
  assert.equal(time.textContent.trim(), "May 8, 2027", "Keep the date readable in the page");
});
test("only the searched word is highlighted", () => {
  const p = document.querySelector("main > p:nth-of-type(2)");
  const mark = p?.querySelector("mark");
  assert.exists(mark, "Highlight the searched word in the second paragraph with <mark>");
  assert.equal(mark.textContent.trim().toLowerCase(), "books", "Highlight only the word books");
  assert.equal(p.textContent.includes("Bring your favorite") && p.textContent.includes("to share"), true, "Keep the rest of the sentence readable");
});
