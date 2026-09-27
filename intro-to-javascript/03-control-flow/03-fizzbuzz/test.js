test("Step 1: Ordinary 2: 2", () => {
  assert.match(OUTPUT, /^Ordinary\ 2:\ 2$/m, "Log Ordinary 2: 2 as a complete Console line");
});

test("Step 2: Multiples: Fizz,Buzz,FizzBuzz", () => {
  assert.match(OUTPUT, /^Multiples:\ Fizz,Buzz,FizzBuzz$/m, "Log Multiples: Fizz,Buzz,FizzBuzz as a complete Console line");
});

test("Step 3: Ordinary 7: 7", () => {
  assert.match(OUTPUT, /^Ordinary\ 7:\ 7$/m, "Log Ordinary 7: 7 as a complete Console line");
});

test("Step 4: FizzBuzz", () => {
  assert.match(OUTPUT, /^FizzBuzz$/m, "Log FizzBuzz as a complete Console line");
});
