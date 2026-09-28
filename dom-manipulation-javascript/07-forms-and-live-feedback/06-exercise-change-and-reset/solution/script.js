const lightsForm = document.querySelector("#lights-form");
const lights = document.querySelector("#lights");
const summary = document.querySelector("#lights-summary");
function renderLights() {
  summary.textContent = lights.value;
}
lights.addEventListener("change", renderLights);
lightsForm.addEventListener("reset", () => queueMicrotask(renderLights));