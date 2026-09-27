function firstNegative(numbers) {
  let found = null;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      found = numbers[i];
      break;
    }
  }
  return found;
}

function positiveOnly(numbers) {
  const result = [];
  for (const n of numbers) {
    if (n <= 0) continue;
    result.push(n);
  }
  return result;
}

const nums = [-5, 3, -2, 8, -1];

console.log(`First from -5,3: ${firstNegative([-5,3])}`);
console.log(`Positive one: ${positiveOnly([0,-1,5])}`);
console.log(`First cases: ${firstNegative([3,8,-2,-1])},${firstNegative([1,2,3])}`);
console.log(`Positive cases: ${positiveOnly([-5,3,-2,8,-1])} | ${positiveOnly([-1,-2]).join(",") || "empty"}`);
console.log(`First negative: ${firstNegative(nums)} | Positives: ${positiveOnly(nums)}`);
