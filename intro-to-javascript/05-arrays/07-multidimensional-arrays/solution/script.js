const grid = [[1,2,3],[4,5,6],[7,8,9]];

// Step 1

function matrixSum(matrix) {
  let sum = 0;
  for (const row of matrix) { for (const value of row) sum += value; }
  return sum;
}

// Supplied probe: leave this in place.

try {
  console.log(`Sums: ${matrixSum(grid)},${matrixSum([[1,2],[3]])},${matrixSum([])}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

function diagonal(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) result.push(matrix[i][i]);
  return result;
}

// Supplied probe: leave this in place.

try {
  console.log(`Diagonals: ${String(diagonal(grid))} | ${String(diagonal([[4,2],[3,8]]))} | ${JSON.stringify(diagonal([]))}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

console.log(`Sum: ${matrixSum(grid)} | Diagonal: ${diagonal(grid).join(",")}`);
