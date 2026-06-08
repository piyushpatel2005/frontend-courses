const seats = ['A', 'B', 'C', 'D', 'E'];
const filledSeats = [...seats].fill('X', 1, 4);

document.getElementById("output").textContent = JSON.stringify(filledSeats);
