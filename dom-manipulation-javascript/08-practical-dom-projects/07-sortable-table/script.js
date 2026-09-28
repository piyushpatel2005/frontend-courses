const button = document.querySelector("#sort-sessions");
const heading = document.querySelector("#session-heading");
const body = document.querySelector("#sessions");
button.addEventListener("click", () => {
  const direction = heading.getAttribute("aria-sort") === "ascending" ? "descending" : "ascending";
  const rows = Array.from(body.rows);
  rows.sort((a, b) => {
    const first = a.cells[0].textContent.trim();
    const second = b.cells[0].textContent.trim();
    return direction === "ascending" ? first.localeCompare(second) : second.localeCompare(first);
  });
  body.replaceChildren(...rows);
  heading.setAttribute("aria-sort", direction);
});
