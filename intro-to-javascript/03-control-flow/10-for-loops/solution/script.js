function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// Supplied probes also work before the functions are complete.
console.log(`Sums: ${sumArray([2])},${sumArray([1,2,3,4,5])},${sumArray([10,-5,5])},${sumArray([])}`);
console.log(`Reversals: ${reverseArray([1,2,3])} | ${reverseArray(["a","b","c"])} | [${reverseArray([])}]`);
console.log(`Sum: ${sumArray([1,2,3,4,5])}`);
