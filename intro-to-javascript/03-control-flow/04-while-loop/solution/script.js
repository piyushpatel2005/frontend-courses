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

document.getElementById("output").textContent = `Countdown from 5: ${countdown(5).join(",")}`;
