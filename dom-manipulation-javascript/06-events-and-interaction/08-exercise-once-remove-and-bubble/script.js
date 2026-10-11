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
  // Task 1: add your code here.
  // Task 2: add your code here.
  // Task 3: add your code here.
  // Task 4: add your code here.
  // Task 5: add your code here.
}
setupWorkshop(document.querySelector("main"));
window.setupWorkshop = setupWorkshop;
