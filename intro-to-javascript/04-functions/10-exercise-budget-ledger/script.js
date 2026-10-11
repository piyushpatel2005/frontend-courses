// Step 1

function makeBudget(startingBalance) {}

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

// Complete this step here.
