test("loadDashboard requests the user first", async () => {
  assert.equal(globalThis.loadDashboard?.constructor.name, "AsyncFunction", "Define an async function");
  const original = globalThis.fetchUser;
  try {
    globalThis.fetchUser = async () => ({ id: 42, name: "Guest" });
    const data = await globalThis.loadDashboard();
    assert.equal(data.userName, "Guest", "Use the fetched user");
  } finally { globalThis.fetchUser = original; }
});
test("starts both dependent requests together", async () => {
  const posts = globalThis.fetchPosts;
  const notifications = globalThis.fetchNotifications;
  const user = globalThis.fetchUser;
  const started = [];
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  try {
    globalThis.fetchUser = async () => ({ id: 42, name: "Guest" });
    globalThis.fetchPosts = async id => { started.push(`posts:${id}`); await gate; return []; };
    globalThis.fetchNotifications = async id => { started.push(`notifications:${id}`); await gate; return []; };
    const pending = globalThis.loadDashboard();
    await Promise.resolve();
    await Promise.resolve();
    assert.equal(started.join(" | "), "posts:42 | notifications:42", "Start both requests with the fetched ID before either completes");
    release();
    await pending;
  } finally {
    release();
    globalThis.fetchUser = user;
    globalThis.fetchPosts = posts;
    globalThis.fetchNotifications = notifications;
  }
});
test("counts posts and unread notifications", async () => {
  const data = await globalThis.loadDashboard();
  assert.equal(data.userName, "Alex", "Use the fetched user's name");
  assert.equal(data.postCount, 3, "Count fetched posts");
  assert.equal(data.unreadCount, 2, "Count only unread notifications");
});
test("dashboard falls back on a rejected request", async () => {
  const originalUser = globalThis.fetchUser;
  const originalPosts = globalThis.fetchPosts;
  const originalNotifications = globalThis.fetchNotifications;
  const fallback = JSON.stringify({ userName: "Unknown", postCount: 0, unreadCount: 0 });
  try {
    globalThis.fetchUser = async () => { throw new Error("User unavailable"); };
    assert.equal(JSON.stringify(await globalThis.loadDashboard()), fallback, "Handle a failed user request");
    globalThis.fetchUser = originalUser;
    globalThis.fetchPosts = async () => { throw new Error("Posts unavailable"); };
    assert.equal(JSON.stringify(await globalThis.loadDashboard()), fallback, "Handle a failed posts request");
    globalThis.fetchPosts = originalPosts;
    globalThis.fetchNotifications = async () => { throw new Error("Notifications unavailable"); };
    assert.equal(JSON.stringify(await globalThis.loadDashboard()), fallback, "Handle a failed notifications request");
  } finally {
    globalThis.fetchUser = originalUser;
    globalThis.fetchPosts = originalPosts;
    globalThis.fetchNotifications = originalNotifications;
  }
});
test("logs the awaited dashboard", async () => {
  const lines = [];
  const original = console.log;
  console.log = (...args) => { lines.push(args.join(" ")); original(...args); };
  try {
    await globalThis.reportDashboard();
    assert.includes(lines.join("\n"), "Alex | posts: 3 | unread: 2", "Log the loaded dashboard");
  } finally { console.log = original; }
});
