const baseNumbers = [1,2,3,4,5];

// Step 1

const middleNumbers = baseNumbers.slice(1,4);

// Supplied probe: leave this in place.

try {
  console.log(`Middle: ${JSON.stringify(middleNumbers)} | Source: ${JSON.stringify(baseNumbers)}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

const combinedNumbers = middleNumbers.concat([10,11]);

// Supplied probe: leave this in place.

try {
  console.log(`Combined: ${JSON.stringify(combinedNumbers)} | Middle: ${JSON.stringify(middleNumbers)}`);
} catch (error) {
  console.log("Step 2 pending");
}
