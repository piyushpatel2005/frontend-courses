test("one video offers native controls", () => {
  assert.equal(document.querySelectorAll("video").length, 1, "Add one video player");
  assert.equal(document.querySelector("video").hasAttribute("controls"), true, "Add controls to the video");
});
test("MP4 source belongs to the video", () => {
  assert.exists(document.querySelector('video:not([src]) > source[src="hall-welcome.mp4"][type="video/mp4"]'), "Put the MP4 source directly inside video; do not put src on video itself");
});
test("WebM source belongs to the video", () => {
  assert.exists(document.querySelector('video:not([src]) > source[src="hall-welcome.webm"][type="video/webm"]'), "Put the WebM source directly inside the same video");
});
test("video has the hall poster", () => {
  assert.equal(document.querySelector("video")?.getAttribute("poster"), "hall-welcome.jpg", "Set poster on the video, not on a source");
});
test("English captions track belongs to the video", () => {
  assert.exists(document.querySelector('video > track[kind="captions"][src="hall-welcome-en.vtt"][srclang="en"][label="English"]'), "Add the named English captions track directly inside video");
});
