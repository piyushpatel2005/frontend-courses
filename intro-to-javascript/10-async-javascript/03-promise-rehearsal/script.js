// Offline timer fixture: no request leaves this preview.
function waitForCue(ms, cue) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cue === "") reject(new Error("Missing cue"));
      else resolve(cue);
    }, ms);
  });
}
async function readCue() {
  const cue = await waitForCue(5, "sound check");
  return cue.toUpperCase();
}
readCue()
  .then(cue => console.log(`Rehearsal: ${cue}`))
  .catch(error => console.log(`Rehearsal failed: ${error.message}`));
console.log("Rehearsal requested");
