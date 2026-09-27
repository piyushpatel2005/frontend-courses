test("latitude and longitude are destructured correctly", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ 40\.7128\ \|\ \-74\.006$/m, "Log CHECK 1: 40.7128 | -74.006 as a separate checkpoint line");
});

test("first and last stops are destructured", () => {
  assert.match(OUTPUT, /^CHECK\ 2:\ Harbor\ \|\ Library$/m, "Log CHECK 2: Harbor | Library as a separate checkpoint line");
});

test("swapPair is defined and works", () => {
  assert.match(OUTPUT, /^CHECK\ 3:\ 2,1\ \|\ b,a$/m, "Log CHECK 3: 2,1 | b,a as a separate checkpoint line");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^Harbor\ to\ Library\ \|\ lat:\ 40\.7128$/m, "Log the route and latitude with console.log()");
});
