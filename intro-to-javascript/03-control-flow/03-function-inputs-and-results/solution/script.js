
function supplyCost(count, unitCost, delivery) { return count * unitCost + delivery; }
console.log(`Step 1: ${supplyCost(2, 7, 3)},${supplyCost(0, 7, 3)},${supplyCost(3, 4, 0)}`);

const orderCost = supplyCost(4, 5, 2);
console.log(`Step 2: ${orderCost}`);
