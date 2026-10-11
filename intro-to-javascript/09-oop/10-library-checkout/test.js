test("Store title", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK title: River Atlas"), true, "Expected checkpoint: CHECK title: River Atlas");
});

test("Initial availability", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK available: true"), true, "Expected checkpoint: CHECK available: true");
});

test("Book author", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK author: N. Vale | inherits: true"), true, "Expected checkpoint: CHECK author: N. Vale | inherits: true");
});

test("Checkout transition", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK checkout: true,false | repeat: false,false"), true, "Expected checkpoint: CHECK checkout: true,false | repeat: false,false");
});

test("Return transition", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK return: true,true | repeat: false,true"), true, "Expected checkpoint: CHECK return: true,true | repeat: false,true");
});

test("Description in both states", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK loan description: River Atlas by N. Vale \u2014 on loan"), true, "Expected checkpoint: CHECK loan description: River Atlas by N. Vale \u2014 on loan");
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK description: River Atlas by N. Vale \u2014 available"), true, "Expected checkpoint: CHECK description: River Atlas by N. Vale \u2014 available");
});
