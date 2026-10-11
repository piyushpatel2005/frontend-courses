function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}
function flatten(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) result = result.concat(flatten(item));
    else result.push(item);
  }
  return result;
}
console.log(`2^10 = ${power(2, 10)} | flatten: ${flatten([1,[2,[3,[4,5]]]]).join(",")}`);

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK power: ${[[2,10],[3,3],[5,0],[2,1]].map(([base, exp]) => power(base, exp)).join(",")}`);
console.log(`CHECK flatten: ${flatten([1,[2,[3,[4,5]]]]).join(",")} | empty: ${flatten([]).length}`);
console.log(`CHECK other flatten: ${flatten([[9],[],[8,[7]]]).join(",")}`);
