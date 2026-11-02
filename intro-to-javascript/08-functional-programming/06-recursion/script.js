// TODO: Step 1: Complete task 1 for power(base, exp).
function power(base, exp) {
  // Add a base case, then a smaller recursive call.
}
// TODO: Step 2: Implement recursive flatten(arr) for finite nested arrays; an empty input returns [].
function flatten(arr) {
  return [];
}
// Log the combined result here.

// Supplied checkpoints. Do not replace them with fixed answers.
// TODO: Step 3: Log 2^10 = 1024 | flatten: 1,2,3,4,5 using calls to your functions.
console.log(`CHECK power: ${[[2,10],[3,3],[5,0],[2,1]].map(([base, exp]) => power(base, exp)).join(",")}`);
console.log(`CHECK flatten: ${flatten([1,[2,[3,[4,5]]]]).join(",")} | empty: ${flatten([]).length}`);
console.log(`CHECK other flatten: ${flatten([[9],[],[8,[7]]]).join(",")}`);
