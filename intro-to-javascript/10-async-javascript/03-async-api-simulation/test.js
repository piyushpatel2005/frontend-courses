test("loadDashboard is defined", () => {
  assert.equal(typeof loadDashboard, "function", "Define loadDashboard as async function");
});

test("loadDashboard returns expected dashboard data", async () => {
  const data = await loadDashboard();
  assert.equal(data.userName, "Alex", "userName should be Alex");
  assert.equal(data.postCount, 3, "postCount should be 3");
  assert.equal(data.unreadCount, 2, "unreadCount should be 2");
});

test("loadDashboard handles failure fallback", async () => {
  const originalFetchUser = fetchUser;
  fetchUser = async () => { throw new Error("Network error"); };

  const data = await loadDashboard();
  assert.equal(data.userName, "Unknown", "Fallback userName should be Unknown");
  assert.equal(data.postCount, 0, "Fallback postCount should be 0");
  assert.equal(data.unreadCount, 0, "Fallback unreadCount should be 0");

  fetchUser = originalFetchUser;
});

test("#output shows formatted dashboard", () => {
  const out = document.getElementById("output");
  assert.exists(out, "Keep <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Alex | posts: 3 | unread: 2",
    '#output should show "Alex | posts: 3 | unread: 2"');
});
