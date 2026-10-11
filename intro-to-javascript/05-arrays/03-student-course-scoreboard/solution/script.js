// Step 1

const scores = [84,91,76];

// Supplied probe: leave this in place.

try {
  console.log(`Scores: ${JSON.stringify(scores)}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

function courseAverage(values) {
  let total = 0;
  for (const value of values) total += value;
  return total / values.length;
}

// Supplied probe: leave this in place.

try {
  console.log(`Averages: ${courseAverage([84,91,76])},${courseAverage([2,4])},${courseAverage([7])}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

function topScore(values) {
  let top = values[0];
  for (const value of values) { if (value > top) top = value; }
  return top;
}

// Supplied probe: leave this in place.

try {
  console.log(`Tops: ${topScore([3,8,4])},${topScore([-5,-2,-9])},${topScore([7])}`);
} catch (error) {
  console.log("Step 3 pending");
}

// Step 4

console.log(`Average: ${courseAverage(scores)} | Top: ${topScore(scores)}`);
