// Task 1: Exact BigInt identifier

const ticketId = 9007199254740993n;

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (`${typeof ticketId} | ${ticketId}`));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Converted numeric price

const ticketPrice = Number("19.50");

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${typeof ticketPrice} | ${ticketPrice}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Total for small BigInt counts

function calculateTotal(ticketCount, price) {
  return Number(ticketCount) * price;
}

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + (`${calculateTotal(3n,19.5)} | ${calculateTotal(2n,7.5)} | ${calculateTotal(0n,19.5)}`));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Separate ticket ledger

console.log(`Ticket ${ticketId} | Total: ${calculateTotal(3n, ticketPrice)}`);
