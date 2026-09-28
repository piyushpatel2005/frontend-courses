const pantry = [["Tea", 2], ["Cups", 8], ["Napkins", 4], ["Fruit", 10]];

function lowStock(stock, target) {
  return stock.filter((pair) => pair[1] < target);
}
console.log(`CHECK 1: ${lowStock(pantry, 6).map(([name]) => name).join(",")}`);

function orderLowStock(low) {
  return low.slice().sort((a, b) => a[1] - b[1]);
}
const probe = [["Medium", 3], ["Low", 1]];
const ordered = orderLowStock(probe);
console.log(`CHECK 2: ${ordered.map(([name]) => name).join(",")}`);

function refillNames(ordered) {
  return ordered.map((pair) => pair[0]);
}
console.log(`CHECK 3: ${refillNames(ordered).join(",")}`);

function missingUnits(ordered, target) {
  return ordered.reduce((total, pair) => total + target - pair[1], 0);
}
console.log(`CHECK 4: ${missingUnits(ordered, 4)}`);

function planRefills(stock, target) {
  const ordered = orderLowStock(lowStock(stock, target));
  return [refillNames(ordered), missingUnits(ordered, target)];
}
const [probeNames, probeMissing] = planRefills(probe, 4);
console.log(`CHECK 5: ${probeNames.join(",")} | ${probeMissing}`);
console.log(`CHECK 6: ${JSON.stringify(planRefills([["Full", 6]], 6))}`);
const before = JSON.stringify(probe);
planRefills(probe, 4);
console.log(`CHECK 7: unchanged:${JSON.stringify(probe) === before}`);

const [names, missingTotal] = planRefills(pantry, 6);
console.log(`${names.join(", ")} | ${missingTotal}`);
