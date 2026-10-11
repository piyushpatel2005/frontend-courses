const text = el => (el?.textContent || "").trim();
const nonemptyLink = a => Boolean(text(a) && (a.getAttribute("href") || "").trim() && a.getAttribute("href") !== "#");
const sections = () => [...document.querySelectorAll("body > main > section")];
const heading = s => text(s?.querySelector(":scope > h2")).toLowerCase();
test("header introduces Sam and the role", () => {
  assert.equal(document.querySelectorAll("header").length, 1, "Use one page header");
  const header = document.querySelector("body > header");
  assert.equal(text(header?.querySelector(":scope > h1")), "Sam Rivera", "Put Sam Rivera in the header h1");
  const name = header?.querySelector("h1"), role = header?.querySelector(":scope > p");
  assert.equal(Boolean(text(role) === "Volunteer Coordinator" && name.compareDocumentPosition(role) & Node.DOCUMENT_POSITION_FOLLOWING), true, "Put Volunteer Coordinator in a paragraph beneath the name");
});
test("one main follows the header", () => {
  assert.equal(document.querySelectorAll("main").length, 1, "Use one main region");
  const main = document.querySelector("body > main"), header = document.querySelector("body > header");
  assert.equal(Boolean(main && header && header.compareDocumentPosition(main) & Node.DOCUMENT_POSITION_FOLLOWING), true, "Put main after header at page level");
});
test("first section introduces Sam's work", () => {
  const section = sections()[0];
  assert.equal(heading(section), "professional summary", "Head the first main section Professional Summary");
  assert.equal(Boolean(text(section?.querySelector(":scope > p"))), true, "Describe Sam's work in that section");
});
test("second section is headed Skills", () => {
  assert.equal(heading(sections()[1]), "skills", "Add the Skills section after Professional Summary");
});
test("skills are separate unordered list items", () => {
  const skills = sections().find(s => heading(s) === "skills");
  const items = [...(skills?.querySelectorAll(":scope > ul > li") || [])].map(el => text(el).toLowerCase()).filter(Boolean);
  assert.equal(new Set(items).size >= 3, true, "List at least three different nonempty skills in a ul inside Skills");
});
test("third section describes work experience", () => {
  const section = sections()[2];
  assert.equal(heading(section), "work experience", "Add Work Experience after Skills");
  assert.equal(Boolean(text(section?.querySelector(":scope > p"))), true, "Describe the experience inside its section");
});
test("footer follows main with Sam's contact address", () => {
  assert.equal(document.querySelectorAll("footer").length, 1, "Use one footer");
  const footer = document.querySelector("body > footer"), main = document.querySelector("body > main");
  assert.equal(Boolean(text(footer).includes("sam.rivera@example.com") && main && main.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING), true, "Put Sam's contact address in a page footer after main");
});
