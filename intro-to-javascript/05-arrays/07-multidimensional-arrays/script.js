const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// TODO 1: Implement matrixSum(matrix)
function matrixSum(matrix) {

}

// TODO 2: Implement diagonal(matrix) - returns main diagonal elements
function diagonal(matrix) {

}

console.log("");

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`CHECK 1: ${matrixSum(grid)} | ${matrixSum([[1,1],[1,1]])}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 2: ${diagonal(grid).join(",")} | ${diagonal([[4,2],[3,8]]).join(",")}`); } catch (error) { console.log("CHECK pending"); }
