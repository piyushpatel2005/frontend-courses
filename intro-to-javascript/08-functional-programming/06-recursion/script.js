function power(base, exp) {
  // Add a base case, then a smaller recursive call.
}
function flatten(arr) {
  return [];
}
// Log the combined result here.

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK power: ${[[2,10],[3,3],[5,0],[2,1]].map(([base, exp]) => power(base, exp)).join(",")}`);
console.log(`CHECK flatten: ${flatten([1,[2,[3,[4,5]]]]).join(",")} | empty: ${flatten([]).length}`);
console.log(`CHECK other flatten: ${flatten([[9],[],[8,[7]]]).join(",")}`);
