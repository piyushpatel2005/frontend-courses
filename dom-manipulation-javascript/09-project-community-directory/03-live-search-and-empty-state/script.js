const routeQuery = document.querySelector("#route-query");
const routes = document.querySelectorAll("#routes li");
const routeCount = document.querySelector("#route-count");
const noRoutes = document.querySelector("#no-routes");
routeQuery.addEventListener("input", () => {
  const term = routeQuery.value.trim().toLowerCase();
  let shown = 0;
  routes.forEach((route) => {
    route.hidden = !route.dataset.keywords.toLowerCase().includes(term);
    if (!route.hidden) shown += 1;
  });
  routeCount.textContent = `${shown} ${shown === 1 ? "route" : "routes"} shown`;
  noRoutes.hidden = shown !== 0;
});
