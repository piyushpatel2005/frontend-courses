function fizzBuzz(number) {
  if (number % 15 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number;
}

console.log(`Ordinary 2: ${fizzBuzz(2)}`);
console.log(`Multiples: ${[3,5,15].map(fizzBuzz).join(",")}`);
console.log(`Ordinary 7: ${fizzBuzz(7)}`);
console.log(fizzBuzz(15));
