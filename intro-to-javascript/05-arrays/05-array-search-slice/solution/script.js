const baseNumbers = [1, 2, 3, 4, 5];
const middleNumbers = baseNumbers.slice(1, 4);
const combinedNumbers = middleNumbers.concat([10, 11]);

console.log(`CHECK 1: ${JSON.stringify(middleNumbers)}`);

console.log(JSON.stringify(combinedNumbers));
