// Step 1

function makeCounter() {
  // Return a function with its own remembered count.
}

// Supplied probe: leave this in place.

try {
  const first = makeCounter();
  const second = makeCounter();
  console.log(`Counter calls: ${first()},${first()},${second()},${first()}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

// Complete this step here.
