// Task 1: Exact BigInt identifier

// TODO: Step 1: Set ticketId to the BigInt value 9007199254740993n.
const ticketId = 0n;

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (`${typeof ticketId} | ${ticketId}`));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Converted numeric price

// TODO: Step 2: Set ticketPrice by converting the text "19.50" with Number().
const ticketPrice = 0;

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${typeof ticketPrice} | ${ticketPrice}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Total for small BigInt counts

// TODO: Step 3: Complete task 3 for calculateTotal(ticketCount, price).
function calculateTotal(ticketCount, price) {
  // Convert the count and multiply.
}

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + (`${calculateTotal(3n,19.5)} | ${calculateTotal(2n,7.5)} | ${calculateTotal(0n,19.5)}`));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Separate ticket ledger

// Log the ledger here.

// TODO: Step 4: Complete task 4 for ticketId.
