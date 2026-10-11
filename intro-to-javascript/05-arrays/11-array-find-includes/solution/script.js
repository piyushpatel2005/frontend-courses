const prices = [15,40,75,20];

// Step 1

const firstLargePrice = prices.find(price => price > 50);

// Supplied probe: leave this in place.

try {
  console.log(`First above 50: ${firstLargePrice}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

const hasForty = prices.includes(40);

// Supplied probe: leave this in place.

try {
  console.log(`Has forty: ${hasForty}`);
} catch (error) {
  console.log("Step 2 pending");
}
