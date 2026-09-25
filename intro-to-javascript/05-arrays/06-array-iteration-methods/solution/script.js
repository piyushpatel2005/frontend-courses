const numbers = [1, 2, 3];
const labels = [];
numbers.forEach((n) => labels.push(`Number: ${n}`));
const doubledNumbers = numbers.map((n) => n * 2);

console.log(`${labels.join(', ')} | ${JSON.stringify(doubledNumbers)}`);
