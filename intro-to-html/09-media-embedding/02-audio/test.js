test("one audio player offers native controls", () => {
  assert.equal(document.querySelectorAll("audio").length, 1, "Add one audio player");
  assert.equal(document.querySelector("audio").hasAttribute("controls"), true, "Add controls to audio");
});
test("MP3 source belongs to audio", () => {
  assert.exists(document.querySelector('audio:not([src]) > source[src="orientation.mp3"][type="audio/mpeg"]'), "Nest the MP3 source in audio and use audio/mpeg; leave src off audio itself");
});
test("OGG source belongs to audio", () => {
  assert.exists(document.querySelector('audio:not([src]) > source[src="orientation.ogg"][type="audio/ogg"]'), "Nest the OGG source in audio");
});
test("transcript link reaches readable content outside audio", () => {
  const link = Array.from(document.querySelectorAll('a[href="#orientation-transcript"]')).find(a => !a.closest("audio") && a.textContent.trim() === "Read the orientation transcript");
  assert.exists(link, "Add the labeled transcript link outside audio");
  const target = document.getElementById("orientation-transcript");
  assert.equal(Boolean(target?.querySelector("p")?.textContent.trim() && !target.closest("audio")), true, "Keep the supplied transcript outside the player");
});
