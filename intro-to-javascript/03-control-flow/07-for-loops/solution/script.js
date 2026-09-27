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

console.log(`Sum one: ${sumArray([2])}`);
console.log(`Reverse one: ${reverseArray(["x"])}`);
console.log(`Sums: ${[sumArray([1,2,3,4,5]),sumArray([10,-5,5]),sumArray([])].join(",")}`);
console.log(`Reversals: ${reverseArray([1,2,3])} | ${reverseArray(["a","b","c"])}`);
console.log(`Sum: ${sumArray([1,2,3,4,5])}`);
