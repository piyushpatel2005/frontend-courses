test("matrixSum is defined", () => {
  assert.equal(typeof matrixSum, "function", "Define a function named matrixSum");
});

test("matrixSum returns correct total", () => {
  assert.equal(matrixSum([[1,2,3],[4,5,6],[7,8,9]]), 45, "Sum of 1-9 should be 45");
  assert.equal(matrixSum([[1,1],[1,1]]), 4, "2x2 matrix of 1s should sum to 4");
});

test("diagonal is defined", () => {
  assert.equal(typeof diagonal, "function", "Define a function named diagonal");
});

test("diagonal returns main diagonal elements", () => {
  assert.deepEqual(diagonal([[1,2,3],[4,5,6],[7,8,9]]), [1, 5, 9],
    "Diagonal of 3x3 grid should be [1, 5, 9]");
  assert.deepEqual(diagonal([[4,2],[3,8]]), [4, 8],
    "Diagonal of 2x2 should be [4, 8]");
});

test("#output shows correct result", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Sum: 45 | Diagonal: 1,5,9",
    '#output should show "Sum: 45 | Diagonal: 1,5,9"');
});
