const baseNumbers = [1, 2, 3, 4, 5];
const middleNumbers = baseNumbers.slice(1, 4);
const combinedNumbers = middleNumbers.concat([10, 11]);

document.getElementById("output").textContent = JSON.stringify(combinedNumbers);
