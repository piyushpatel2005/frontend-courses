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
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    steps++;
  }
  return steps;
}

console.log(`Countdowns: ${countdown(3)} | ${countdown(1)} | [${countdown(0)}]`);
console.log(`Collatz steps: ${collatz(1)},${collatz(2)},${collatz(6)}`);
console.log(`Countdown from 5: ${countdown(5)}`);
