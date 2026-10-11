test("Personalized pickup notice", () => {
  assert.match(OUTPUT, /^CHECK 1: Hi Lee, your 2 meal kits are ready for pickup\.$/m, "Task 1: expected a separate output line: CHECK 1: Hi Lee, your 2 meal kits are ready for pickup.");
});

test("Joined pickup list and empty input", () => {
  assert.match(OUTPUT, /^CHECK 2: Hi Sal, your 4 rice bags are ready for pickup\. \| Hi Jo, your 2 tea packs are ready for pickup\. \| empty:true$/m, "Task 2: expected a separate output line: CHECK 2: Hi Sal, your 4 rice bags are ready for pickup. | Hi Jo, your 2 tea packs are ready for pickup. | empty:true");
});

test("Separate supplied pickup list", () => {
  assert.match(OUTPUT, /^Hi Nia, your 2 produce boxes are ready for pickup\.\nHi Omar, your 3 bread loaves are ready for pickup\.$/m, "Task 3: expected a separate output line: Hi Nia, your 2 produce boxes are ready for pickup.\nHi Omar, your 3 bread loaves are ready for pickup.");
});
