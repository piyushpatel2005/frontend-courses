const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function matrixSum(matrix) {
  let sum = 0;
  for (const row of matrix) {
    for (const val of row) {
      sum += val;
    }
  }
  return sum;
}

function diagonal(matrix) {
  return matrix.map((row, i) => row[i]);
}

console.log(`CHECK 1: ${matrixSum(grid)} | ${matrixSum([[1, 1], [1, 1]])}`);
console.log(`CHECK 2: ${diagonal(grid).join(",")} | ${diagonal([[4, 2], [3, 8]]).join(",")}`);

console.log(`Sum: ${matrixSum(grid)} | Diagonal: ${diagonal(grid).join(",")}`);
