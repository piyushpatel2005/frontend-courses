test("Step 1: Both", () => {
  assert.match(OUTPUT, /^Both:\ FizzBuzz,FizzBuzz$/m, "Expected the complete Console line: Both: FizzBuzz,FizzBuzz");
});

test("Step 2: Threes", () => {
  assert.match(OUTPUT, /^Threes:\ Fizz,Fizz$/m, "Expected the complete Console line: Threes: Fizz,Fizz");
});

test("Step 3: Fives", () => {
  assert.match(OUTPUT, /^Fives:\ Buzz,Buzz$/m, "Expected the complete Console line: Fives: Buzz,Buzz");
});

test("Step 4: Ordinary", () => {
  assert.match(OUTPUT, /^Ordinary:\ 2,7$/m, "Expected the complete Console line: Ordinary: 2,7");
});
