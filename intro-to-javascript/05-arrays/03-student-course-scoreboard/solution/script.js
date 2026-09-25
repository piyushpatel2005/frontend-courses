const scores = [84, 91, 76];

function courseAverage(values) {
  let total = 0;
  for (const value of values) total += value;
  return total / values.length;
}

function topScore(values) {
  let top = values[0];
  for (const value of values) {
    if (value > top) top = value;
  }
  return top;
}

console.log(`Average: ${courseAverage(scores)} | Top: ${topScore(scores)}`);
