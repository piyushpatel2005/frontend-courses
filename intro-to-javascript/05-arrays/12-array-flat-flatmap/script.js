const nested = [[1,2],[3,4]];
const phrases = ["hello world","js"];

// Step 1

const flatNumbers = [];

// Supplied probe: leave this in place.

try {
  console.log(`Flat: ${JSON.stringify(flatNumbers)}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

const splitWords = [];

// Supplied probe: leave this in place.

try {
  console.log(`Words: ${JSON.stringify(splitWords)}`);
} catch (error) {
  console.log("Step 2 pending");
}
