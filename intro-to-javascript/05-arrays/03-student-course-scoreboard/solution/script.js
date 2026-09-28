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

console.log(`CHECK 1: ${JSON.stringify(scores)}`);
console.log(`CHECK 2: ${courseAverage([84, 91, 76])}`);
console.log(`CHECK 3: ${topScore([3, 8, 4])}`);

console.log(`Average: ${courseAverage(scores)} | Top: ${topScore(scores)}`);
