// Step 1

const colors = ["red", "green", "blue"];

// Supplied probe: leave this in place.

try {
  console.log(`Colors: ${JSON.stringify(colors)}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

console.log(`${colors[0]} | ${colors[colors.length - 1]}`);
