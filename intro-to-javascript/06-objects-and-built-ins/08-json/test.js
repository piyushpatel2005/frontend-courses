test("userJson is a JSON string of user", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ \{"name":"Sam","level":5,"active":true\}$/m, "Log CHECK 1: {\"name\":\"Sam\",\"level\":5,\"active\":true} as a separate checkpoint line");
});

test("parsed is an object from apiResponse", () => {
  assert.match(OUTPUT, /^CHECK\ 2:\ ok\ \|\ 42$/m, "Log CHECK 2: ok | 42 as a separate checkpoint line");
});

test("deepClone creates an independent copy", () => {
  assert.match(OUTPUT, /^CHECK 3: 2 \| 2$/m, "Log CHECK 3: 2 | 2 from original and copy");
});

test("changing the copy does not change the original", () => {
  assert.match(OUTPUT, /^CHECK 4: 2 \| 99$/m, "Log CHECK 4: 2 | 99 from original and changed copy");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^Sam is level 5 \| status: ok, count: 42$/m, "Log the mission result on its own line");
});
