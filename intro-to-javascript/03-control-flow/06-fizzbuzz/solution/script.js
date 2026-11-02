function fizzBuzz(number) {
  if (number % 15 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number;
}

console.log(`Both: ${fizzBuzz(15)},${fizzBuzz(30)}`);
console.log(`Threes: ${fizzBuzz(3)},${fizzBuzz(9)}`);
console.log(`Fives: ${fizzBuzz(5)},${fizzBuzz(10)}`);
console.log(`Ordinary: ${fizzBuzz(2)},${fizzBuzz(7)}`);
