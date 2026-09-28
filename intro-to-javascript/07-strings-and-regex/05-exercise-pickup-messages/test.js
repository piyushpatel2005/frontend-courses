test("Personalized pickup notice", () => {
  assert.match(OUTPUT, /^CHECK pickup: Hi Lee, your 1 meal kits are ready for pickup\.$/m, "Expected this standalone Console line: CHECK pickup: Hi Lee, your 1 meal kits are ready for pickup.");
});

test("Pickup list including empty input", () => {
  assert.match(OUTPUT, /^CHECK list: Hi Sal, your 4 rice bags are ready for pickup\. \| Hi Jo, your 2 tea packs are ready for pickup\. \| empty: yes$/m, "Expected this standalone Console line: CHECK list: Hi Sal, your 4 rice bags are ready for pickup. | Hi Jo, your 2 tea packs are ready for pickup. | empty: yes");
});

test("Separate supplied pickup notices", () => {
  assert.match(OUTPUT, /^Hi Nia, your 2 produce boxes are ready for pickup\.\nHi Omar, your 3 bread loaves are ready for pickup\.$/m, "Expected this standalone Console line: Hi Nia, your 2 produce boxes are ready for pickup.\nHi Omar, your 3 bread loaves are ready for pickup.");
});
