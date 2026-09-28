const cueOrder = [];
cueOrder.push("Lights");
setTimeout(() => {
  cueOrder.push("Cue: curtain");
  console.log(cueOrder.join(" | "));
}, 0);
cueOrder.push("Music");
