const trailLink = document.querySelector("#trail-link");
const linkStatus = document.querySelector("#link-status");
const previousDestination = trailLink.getAttribute("href");
trailLink.setAttribute("href", "https://example.org/trails");
trailLink.setAttribute("aria-label", "Explore the local trail map");
trailLink.removeAttribute("data-placeholder");
linkStatus.textContent = `Link moved from ${previousDestination} to ${trailLink.getAttribute("href")}`;
