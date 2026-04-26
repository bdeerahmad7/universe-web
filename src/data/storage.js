/* storage.js — centralised localStorage manager for UniVerse */

// all storage keys in one place
const KEYS = {
  user:            "universe-user",
  savedUnis:       "universe-saved-universities",
  compareUnis:     "universe-compare-universities",
  guideProgress:   "universe-guide-progress",
  forumPosts:      "universe-forum-posts-v2",
  savedTips:       "universe-saved-tips",
  userTips:        "universe-user-tips",
};

// get current logged in user
export const getUser = () =>
  JSON.parse(localStorage.getItem(KEYS.user) || "null");

// save user
export const saveUser = (user) =>
  localStorage.setItem(KEYS.user, JSON.stringify(user));

// remove user
export const removeUser = () =>
  localStorage.removeItem(KEYS.user);

// build a user-specific key
const userKey = (key) => {
  const user = getUser();
  return user ? `${key}__${user.name}` : key;
};

// get any value — user-specific if logged in
export const getData = (key, fallback = null) => {
  try {
    const val = localStorage.getItem(userKey(key));
    return val !== null ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
};

// set any value — user-specific if logged in
export const setData = (key, value) => {
  try {
    localStorage.setItem(userKey(key), JSON.stringify(value));
  } catch (e) {
    console.error("Storage error:", e);
  }
};

// export keys so pages can use them
export const STORAGE_KEYS = KEYS;