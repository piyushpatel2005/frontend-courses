test("awaits the user before dependent lookups", async () => {
  await globalThis.initialDashboard;
  const saved = [globalThis.fetchUser, globalThis.fetchPosts, globalThis.fetchNotifications];
  let release; const gate = new Promise(resolve => { release = resolve; });
  const started = []; let pending;
  try {
    globalThis.fetchUser = () => { started.push("user"); return gate; };
    globalThis.fetchPosts = async () => { started.push("posts"); return []; };
    globalThis.fetchNotifications = async () => { started.push("notifications"); return []; };
    pending = globalThis.loadDashboard();
    let settled = false;
    Promise.resolve(pending).then(() => { settled = true; }, () => { settled = true; });
    for (let i = 0; i < 8; i++) await Promise.resolve();
    assert.equal(started.join(","), "user", "Request only the user while it is pending");
    assert.equal(settled, false, "Await the user before completing loadDashboard");
  } finally {
    release({ id: 42, name: "Guest" });
    await Promise.resolve(pending).catch(() => {});
    [globalThis.fetchUser, globalThis.fetchPosts, globalThis.fetchNotifications] = saved;
  }
});
test("starts both dependent requests before awaiting either", async () => {
  await globalThis.initialDashboard;
  const saved = [globalThis.fetchUser, globalThis.fetchPosts, globalThis.fetchNotifications];
  const started = []; let releasePosts, releaseNotifications;
  const postsGate = new Promise(resolve => { releasePosts = resolve; });
  const notificationsGate = new Promise(resolve => { releaseNotifications = resolve; }); let pending;
  try {
    globalThis.fetchUser = async () => ({ id: 42, name: "Guest" });
    globalThis.fetchPosts = id => { started.push(`posts:${id}`); return postsGate.then(() => []); };
    globalThis.fetchNotifications = id => { started.push(`notifications:${id}`); return notificationsGate.then(() => []); };
    pending = globalThis.loadDashboard();
    let settled = false;
    Promise.resolve(pending).then(() => { settled = true; }, () => { settled = true; });
    for (let i = 0; i < 8; i++) await Promise.resolve();
    assert.equal(started.length, 2, "Start each dependent lookup once");
    assert.equal(started.includes("posts:42") && started.includes("notifications:42"), true, "Use the fetched ID for both lookups");
    assert.equal(settled, false, "Wait for both pending results");
    releasePosts();
    for (let i = 0; i < 12; i++) await Promise.resolve();
    assert.equal(settled, false, "Do not finish while notifications are still pending");
  } finally {
    releasePosts(); releaseNotifications(); await Promise.resolve(pending).catch(() => {});
    [globalThis.fetchUser, globalThis.fetchPosts, globalThis.fetchNotifications] = saved;
  }
});
test("summarizes varied and empty activity", async () => {
  await globalThis.initialDashboard;
  const saved = [globalThis.fetchUser, globalThis.fetchPosts, globalThis.fetchNotifications];
  try {
    for (const [name, posts, notifications, unread] of [["Mira", [{}, {}], [{read:true},{read:false}], 1], ["Empty", [], [], 0], ["Read", [{}], [{read:true}], 0]]) {
      globalThis.fetchUser = async () => ({id:9, name});
      globalThis.fetchPosts = async () => posts;
      globalThis.fetchNotifications = async () => notifications;
      const data = await globalThis.loadDashboard();
      assert.equal(data?.userName, name, "Use the fetched name");
      assert.equal(data?.postCount, posts.length, "Count all posts");
      assert.equal(data?.unreadCount, unread, "Count only unread notifications");
    }
  } finally { [globalThis.fetchUser, globalThis.fetchPosts, globalThis.fetchNotifications] = saved; }
});
test("returns the fallback for each rejected fixture", async () => {
  await globalThis.initialDashboard;
  const keys = ["fetchUser", "fetchPosts", "fetchNotifications"];
  const saved = keys.map(key => globalThis[key]);
  try {
    for (const failed of keys) {
      globalThis.fetchUser = async () => ({id:2, name:"Mira"});
      globalThis.fetchPosts = async () => [];
      globalThis.fetchNotifications = async () => [];
      globalThis[failed] = async () => { throw new Error("Offline"); };
      const data = await globalThis.loadDashboard();
      assert.equal(data?.userName, "Unknown", "Catch a rejection from " + failed);
      assert.equal(data?.postCount, 0); assert.equal(data?.unreadCount, 0);
    }
  } finally { keys.forEach((key, i) => { globalThis[key] = saved[i]; }); }
});
test("reports the returned dashboard fields", async () => {
  await globalThis.initialDashboard;
  const saved = globalThis.loadDashboard; const log = console.log; const lines = [];
  try {
    console.log = (...args) => lines.push(args.join(" "));
    globalThis.loadDashboard = async () => ({userName:"Alex",postCount:3,unreadCount:2});
    await globalThis.reportDashboard();
    globalThis.loadDashboard = async () => ({userName:"Mira",postCount:0,unreadCount:1});
    await globalThis.reportDashboard();
    assert.equal(lines.join("\n"), "Alex | posts: 3 | unread: 2\nMira | posts: 0 | unread: 1", "Log the loaded values, not a fixed summary");
  } finally { globalThis.loadDashboard = saved; console.log = log; }
});
