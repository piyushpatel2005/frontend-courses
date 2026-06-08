test("resume structure exists", () => {
  const resume = document.querySelector(".resume");
  assert.exists(resume, "Add a .resume wrapper");
  assert.exists(resume.querySelector(".resume-header"), "Add .resume-header section");
  assert.exists(resume.querySelector(".resume-layout"), "Add .resume-layout section");
  assert.isAtLeast(resume.querySelectorAll("section").length, 4, "Add at least 4 resume sections");
});

test("resume defines root variables", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /:root\s*\{[^}]*--/i, "Define CSS variables in :root");
});

test("resume styles header hierarchy", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.resume-header\s*\{[^}]*font-size|\.resume-header\s+h1\s*\{[^}]*font-size/i, "Style header typography hierarchy");
});

test("resume uses desktop grid layout", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /\.resume-layout\s*\{[^}]*display\s*:\s*grid\s*;/i, "Set .resume-layout display to grid");
  assert.match(css, /\.resume-layout\s*\{[^}]*grid-template-columns\s*:\s*2fr\s+1fr\s*;/i, "Set .resume-layout to 2fr 1fr columns");
});
