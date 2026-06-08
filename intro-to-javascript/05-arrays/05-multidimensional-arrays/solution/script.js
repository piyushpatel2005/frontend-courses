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

document.getElementById("output").textContent =
  `Sum: ${matrixSum(grid)} | Diagonal: ${diagonal(grid).join(",")}`;
