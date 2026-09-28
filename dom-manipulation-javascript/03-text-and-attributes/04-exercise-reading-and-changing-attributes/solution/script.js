const clubLink = document.querySelector("#club-link");
const destination = document.querySelector("#destination");
const previousHref = clubLink.getAttribute("href");
clubLink.setAttribute("href", "https://example.org/reading-club");
clubLink.setAttribute("aria-label", "View the reading club schedule");
clubLink.removeAttribute("data-draft");
destination.textContent = `Previous destination: ${previousHref}`;
