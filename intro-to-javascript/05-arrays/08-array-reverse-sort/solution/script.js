const numbers = [3, 1, 4, 2];
const sortedNumbers = [...numbers].sort((a, b) => a - b);
const reversedNumbers = [...sortedNumbers].reverse();

document.getElementById("output").textContent = `${JSON.stringify(sortedNumbers)} | ${JSON.stringify(reversedNumbers)}`;
