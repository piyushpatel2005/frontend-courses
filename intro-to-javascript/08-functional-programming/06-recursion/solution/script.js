function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

function flatten(arr) {
  return arr.reduce((flat, item) =>
    Array.isArray(item) ? flat.concat(flatten(item)) : flat.concat(item),
  []);
}

console.log(`CHECK power: ${[[2,10],[3,3],[5,0],[2,1]].map(([base, exp]) => power(base, exp)).join(",")}`);
console.log(`CHECK flatten: ${flatten([1,[2,[3,[4,5]]]]).join(",")} | empty: ${flatten([]).length}`);
console.log(`2^10 = ${power(2, 10)} | flatten: ${flatten([1, [2, [3, [4, 5]]]]).join(",")}`);
