function countdown(n) {
  const result = [];
  while (n >= 1) {
    result.push(n);
    n--;
  }
  return result;
}

function collatz(n) {
  let steps = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    steps++;
  }
  return steps;
}

console.log(`Countdown one: ${countdown(1)}`);
console.log(`Collatz one: ${collatz(1)}`);
console.log(`Countdown three: ${countdown(3)}`);
console.log(`Collatz six: ${collatz(6)}`);
console.log(`Countdown from 5: ${countdown(5)}`);
