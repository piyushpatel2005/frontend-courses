const numbers = [3,1,4,2];

// Step 1

const sortedNumbers = numbers.slice().sort((a,b) => a-b);

// Supplied probe: leave this in place.

try {
  console.log(`Sorted: ${JSON.stringify(sortedNumbers)} | Source: ${JSON.stringify(numbers)}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

const reversedNumbers = sortedNumbers.slice().reverse();

// Supplied probe: leave this in place.

try {
  console.log(`Reversed: ${JSON.stringify(reversedNumbers)} | Sorted: ${JSON.stringify(sortedNumbers)}`);
} catch (error) {
  console.log("Step 2 pending");
}
