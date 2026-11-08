async function buildCueBulletin() {
  const desks = [
    Promise.resolve("sound"),
    Promise.resolve("lights"),
    Promise.reject(new Error("signage offline")),
  ];
  const outcomes = await Promise.allSettled(desks);
  const ready = outcomes.filter(item => item.status === "fulfilled").map(item => item.value);
  const missed = outcomes.length - ready.length;
  console.log(`Ready: ${ready.join(", ")} | missed: ${missed}`);
}
buildCueBulletin();
