function firstNegative(numbers) {
  let found = null;
  for (const number of numbers) {
    if (number < 0) {
      found = number;
      break;
    }
  }
  return found;
}

function positiveOnly(numbers) {
  const result = [];
  for (const number of numbers) {
    if (number <= 0) continue;
    result.push(number);
  }
  return result;
}

console.log(`First cases: ${firstNegative([3,8,-2,-1])},${firstNegative([1,2,3])},${firstNegative([])}`);
console.log(`Positive cases: ${positiveOnly([-5,3,0,-2,8,-1])} | [${positiveOnly([-1,-2])}] | [${positiveOnly([])}]`);
const nums = [-5,3,-2,8,-1];
console.log(`First negative: ${firstNegative(nums)} | Positives: ${positiveOnly(nums)}`);
