const seats = ['A', 'B', 'C', 'D', 'E'];
const filledSeats = [...seats].fill('X', 1, 4);

console.log(JSON.stringify(filledSeats));
