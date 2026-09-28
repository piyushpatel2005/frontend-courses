test("resume introduces Sam in its header", () => {
  assert.count("header", 1, "Add one <header> for the resume");
  const header = document.querySelector("header");
  assert.equal(Boolean(header.querySelector("h1")?.textContent.trim() && header.querySelector("p")?.textContent.trim()), true, "Add Sam’s name and role in the header");
});

test("resume has one main region", () => {
  assert.count("main", 1, "Add one <main> for resume content");
});

test("main has three headed sections in order", () => {
  const sections = Array.from(document.querySelectorAll("main > section"));
  assert.equal(sections.length >= 3, true, "Add three sections inside main");
  const headings = sections.slice(0, 3).map(s => s.querySelector("h2")?.textContent.trim().toLowerCase());
  assert.equal(headings.join("|"), "professional summary|skills|work experience", "Head the sections Summary, Skills, and Work Experience in order");
  assert.equal(Boolean(sections[0].querySelector("p")?.textContent.trim() && sections[2].querySelector("p")?.textContent.trim()), true, "Describe the summary and work experience");
});

test("skills section contains a list", () => {
  const skills = Array.from(document.querySelectorAll("main > section")).find(s => s.querySelector("h2")?.textContent.trim().toLowerCase() === "skills");
  const list = skills?.querySelector("ul");
  assert.exists(list, "Add an unordered list inside the Skills section");
  assert.equal(Array.from(list.querySelectorAll("li")).filter(li => li.textContent.trim()).length >= 3, true, "List at least three distinct skills");
});

test("resume ends with contact details", () => {
  assert.count("footer", 1, "Add one <footer> for contact details");
  assert.equal(Boolean(document.querySelector("footer")?.textContent.trim()), true, "Write contact details in the footer");
});
