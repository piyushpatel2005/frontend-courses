const seats = ["A","B","C","D","E"];

// Step 1

const filledSeats = seats.slice().fill("X",1,4);

// Supplied probe: leave this in place.

try {
  console.log(`Filled: ${JSON.stringify(filledSeats)} | Source: ${JSON.stringify(seats)}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

console.log(JSON.stringify(filledSeats));
