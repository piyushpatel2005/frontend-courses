test("Step 1: Low", () => {
  assert.match(OUTPUT, new RegExp("^Low:\\ \\[\\[\"Tea\",2\\],\\[\"Napkins\",4\\]\\]\\ \\|\\ \\[\\[\"Empty\",0\\]\\]$", "m"), "Step 1: expected Low: [[\"Tea\",2],[\"Napkins\",4]] | [[\"Empty\",0]]");
});

test("Step 2: Order", () => {
  assert.match(OUTPUT, new RegExp("^Order:\\ \\[\\[\"Low\",2\\],\\[\"Medium\",12\\]\\]\\ \\|\\ Input:\\ \\[\\[\"Medium\",12\\],\\[\"Low\",2\\]\\]$", "m"), "Step 2: expected Order: [[\"Low\",2],[\"Medium\",12]] | Input: [[\"Medium\",12],[\"Low\",2]]");
});

test("Step 3: Names", () => {
  assert.match(OUTPUT, new RegExp("^Names:\\ \\[\"Low\",\"Medium\"\\]\\ \\|\\ \\[\\]$", "m"), "Step 3: expected Names: [\"Low\",\"Medium\"] | []");
});

test("Step 4: Missing", () => {
  assert.match(OUTPUT, new RegExp("^Missing:\\ 4,0,4$", "m"), "Step 4: expected Missing: 4,0,4");
});

test("Step 5: Plan", () => {
  assert.match(OUTPUT, new RegExp("^Plan:\\ \\[\\[\"Low\",\"Medium\"\\],4\\]\\ \\|\\ Full:\\ \\[\\[\\],0\\]\\ \\|\\ Empty:\\ \\[\\[\\],0\\]\\ \\|\\ Input:\\ \\[\\[\"Medium\",3\\],\\[\"Low\",1\\]\\]$", "m"), "Step 5: expected Plan: [[\"Low\",\"Medium\"],4] | Full: [[],0] | Empty: [[],0] | Input: [[\"Medium\",3],[\"Low\",1]]");
});

test("Step 6: Tea, Napkins | 6", () => {
  assert.match(OUTPUT, new RegExp("^Tea,\\ Napkins\\ \\|\\ 6$", "m"), "Step 6: expected Tea, Napkins | 6");
});
