const ticketId = 9007199254740993n;
console.log(`CHECK 1: ${typeof ticketId} | ${ticketId}`);
const ticketPrice = Number("19.50");
console.log(`CHECK 2: ${ticketPrice}`);

function calculateTotal(ticketCount, price) {
  return Number(ticketCount) * price;
}

console.log(`CHECK 3: ${calculateTotal(3n, 19.5)}`);

console.log(`Ticket ${ticketId} | Total: ${calculateTotal(3n, ticketPrice)}`);
