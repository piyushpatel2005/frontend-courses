// Step 1

// TODO: Step 1: Complete makeBudget(startingBalance) so it returns a spending function.
function makeBudget(startingBalance) {
  // TODO: Step 2: Add a guard before subtraction: if amount > balance, return null without changing balance.
}

// Supplied probe: leave this in place.

try {
  const budget = makeBudget(20);
  console.log(`Successive: ${budget(3)},${budget(7)},${budget(10)}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2: add the rejection guard inside spend above, before subtraction.

// Supplied probe: leave this in place.

try {
  const capped = makeBudget(10);
  console.log(`Overdraw: ${capped(11)},${capped(4)},${capped(6)},${capped(1)}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

// TODO: Step 3: Complete task 3 for Independent: 8,19.
