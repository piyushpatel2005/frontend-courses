const booked = 12;
const capacity = 12;
const scanText = "12";

const isFull = booked >= capacity;
console.log(`Step 1: ${isFull}`);

const sameValue = scanText === booked;
console.log(`Step 2: ${sameValue}`);

const sameCount = Number(scanText) === booked;
console.log(`Step 3: ${sameCount}`);
