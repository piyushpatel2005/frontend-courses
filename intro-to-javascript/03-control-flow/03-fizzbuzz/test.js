test("fizzBuzz is defined", () => {
  assert.equal(typeof fizzBuzz, "function", "Define fizzBuzz(number)");
});

test("fizzBuzz handles multiples", () => {
  assert.equal(fizzBuzz(3), "Fizz", "3 should return Fizz");
  assert.equal(fizzBuzz(5), "Buzz", "5 should return Buzz");
  assert.equal(fizzBuzz(15), "FizzBuzz", "15 should return FizzBuzz");
});

test("fizzBuzz returns ordinary numbers", () => {
  assert.equal(fizzBuzz(7), 7, "7 should stay 7");
});

test("logs the FizzBuzz checkpoint", () => {
  assert.includes(OUTPUT, "FizzBuzz", "Log fizzBuzz(15)");
});
