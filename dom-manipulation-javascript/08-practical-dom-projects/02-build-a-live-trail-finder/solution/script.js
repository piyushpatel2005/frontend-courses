const query = document.querySelector("#trail-query");
const trails = document.querySelectorAll("#trails li");
const count = document.querySelector("#trail-count");
query.addEventListener("input", () => {
  const term = query.value.trim().toLowerCase();
  let visible = 0;
  for (const trail of trails) {
    trail.hidden = !trail.textContent.toLowerCase().includes(term);
    if (!trail.hidden) visible += 1;
  }
  count.textContent = `${visible} trails found`;
});