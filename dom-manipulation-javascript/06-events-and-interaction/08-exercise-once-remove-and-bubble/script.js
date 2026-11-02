// root is the supplied workshop <main>; all selectors stay inside it.
function setupWorkshop(root) {
  let welcomes = 0;
  let bells = 0;
  const welcome = root.querySelector("#welcome");
  const bell = root.querySelector("#bell");
  const output = root.querySelector("#actions");
  function ringBell() {
    bells += 1;
    root.querySelector("#bell-count").textContent = "Bells: " + bells;
  }
  // These label updates are supplied; you control which clicks reach the panel.
  root.querySelector("#standard").addEventListener("click", () => {
    output.textContent += "Standard ";
  });
  root.querySelector("#private").addEventListener("click", () => {
    output.textContent += "Private ";
  });
  // TODO: Step 1: complete the corresponding task here.
  // TODO: Step 2: complete the corresponding task here.
  // TODO: Step 3: complete the corresponding task here.
  // TODO: Step 4: complete the corresponding task here.
  // TODO: Step 5: complete the corresponding task here.
}
setupWorkshop(document.querySelector("main"));
window.setupWorkshop = setupWorkshop;
