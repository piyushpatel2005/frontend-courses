// TODO 1: Recursive power(base, exp)
function power(base, exp) {

}

// TODO 2: Recursive flatten(arr)
function flatten(arr) {

}

console.log(`CHECK power: ${[[2,10],[3,3],[5,0],[2,1]].map(([base, exp]) => power(base, exp)).join(",")}`);
console.log(`CHECK flatten: ${flatten([1,[2,[3,[4,5]]]])?.join(",")} | empty: ${flatten([])?.length}`);
// Log the combined result separately.
