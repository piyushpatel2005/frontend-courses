test("Step 1: name: Mia (string)", () => {
  assert.match(OUTPUT, /^name:\ Mia\ \(string\)$/m, "Log name: Mia (string) as a complete Console line");
});

test("Step 2: age: 14 (number)", () => {
  assert.match(OUTPUT, /^age:\ 14\ \(number\)$/m, "Log age: 14 (number) as a complete Console line");
});

test("Step 3: student: true (boolean)", () => {
  assert.match(OUTPUT, /^student:\ true\ \(boolean\)$/m, "Log student: true (boolean) as a complete Console line");
});

test("Step 4: Mia:string | 14:number | true:boolean", () => {
  assert.match(OUTPUT, /^Mia:string\ \|\ 14:number\ \|\ true:boolean$/m, "Log Mia:string | 14:number | true:boolean as a complete Console line");
});
