function showReady() {
  document.querySelector("#startup-status").textContent = "Reading room ready.";
}
function startPage(doc, initialize) {
  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
}
startPage(document, showReady);
