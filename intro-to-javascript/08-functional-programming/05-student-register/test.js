test("Student records", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK students: Ari,JavaScript,true | Bea,CSS,false | Chen,JavaScript,true"), true, "Expected checkpoint: CHECK students: Ari,JavaScript,true | Bea,CSS,false | Chen,JavaScript,true");
});

test("Reusable active register", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK register: Ari: JavaScript | Chen: JavaScript"), true, "Expected checkpoint: CHECK register: Ari: JavaScript | Chen: JavaScript");
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK other register: Jo: Art"), true, "Expected checkpoint: CHECK other register: Jo: Art");
});

test("Standalone register", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Ari: JavaScript | Chen: JavaScript"), true, "Expected checkpoint: Ari: JavaScript | Chen: JavaScript");
});
