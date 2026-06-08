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
document.getElementById("output").textContent =
  `First negative: ${firstNegative(nums)} | Positives: ${positiveOnly(nums).join(",")}`;
