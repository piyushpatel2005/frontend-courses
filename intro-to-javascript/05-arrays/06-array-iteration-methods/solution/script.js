const numbers = [1,2,3];
const labels = [];

// Step 1

numbers.forEach(n => labels.push(`Number: ${n}`));

// Supplied probe: leave this in place.

try {
  console.log(`Labels: ${labels.join(", ")}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

const doubledNumbers = numbers.map(n => n * 2);

// Supplied probe: leave this in place.

try {
  console.log(`Doubled: ${JSON.stringify(doubledNumbers)} | Source: ${JSON.stringify(numbers)}`);
} catch (error) {
  console.log("Step 2 pending");
}
