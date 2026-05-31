test("resume structure exists", () => {
  const resume = document.querySelector(".resume");
  assert.exists(resume, "Add a .resume wrapper");
  assert.exists(resume.querySelector(".resume-header"), "Add .resume-header section");
  assert.exists(resume.querySelector(".resume-layout"), "Add .resume-layout section");
  assert.isAtLeast(resume.querySelectorAll("section").length, 4, "Add at least 4 resume sections");
});

test("resume uses variables and grid layout", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /:root\s*\{[^}]*--/i, "Define CSS variables in :root");
  assert.match(css, /\.resume-layout\s*\{[^}]*display\s*:\s*grid\s*;/i, "Set .resume-layout display to grid");
  assert.match(css, /\.resume-layout\s*\{[^}]*grid-template-columns\s*:\s*2fr\s+1fr\s*;/i, "Set .resume-layout to 2fr 1fr columns");
});

test("responsive collapse and link hover styles exist", () => {
  const css = document.querySelector("style").textContent;
  assert.match(css, /@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{[\s\S]*\.resume-layout\s*\{[^}]*grid-template-columns\s*:\s*1fr\s*;/i, "Add responsive one-column layout at max-width 768px");
  assert.match(css, /a:hover\s*\{[^}]*color\s*:/i, "Add link hover color style");
});
