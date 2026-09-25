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

test("logs the mission result", () => {
  assert.includes(OUTPUT, "Alex | posts: 3 | unread: 2", "Log the mission result with console.log()");
});
