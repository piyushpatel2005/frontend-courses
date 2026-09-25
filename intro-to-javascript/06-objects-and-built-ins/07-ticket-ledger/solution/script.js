const ticketId = 9007199254740993n;
const ticketPrice = Number("19.50");

function calculateTotal(ticketCount, price) {
  return Number(ticketCount) * price;
}

console.log(`Ticket ${ticketId} | Total: ${calculateTotal(3n, ticketPrice)}`);
