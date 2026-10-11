// Step 1

const total = [5,10,15].reduce((sum,value) => sum+value,0);

// Supplied probe: leave this in place.

try {
  console.log(`Total: ${total}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

const hasAdult = [12,17,21].some(age => age >= 18);

// Supplied probe: leave this in place.

try {
  console.log(`Adult: ${hasAdult}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

const allPositive = [1,2,3].every(n => n > 0);

// Supplied probe: leave this in place.

try {
  console.log(`Positive: ${allPositive}`);
} catch (error) {
  console.log("Step 3 pending");
}

// Step 4

console.log(`${total} | ${hasAdult} | ${allPositive}`);
