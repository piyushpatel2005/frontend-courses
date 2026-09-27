function waitForCue(ms, cue) {
  return new Promise(resolve => setTimeout(() => resolve(cue), ms));
}
async function readCue() {
  const cue = await waitForCue(5, "sound check");
  return cue.toUpperCase();
}
readCue().then(cue => console.log(`Rehearsal: ${cue}`));
