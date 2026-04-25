/* Forum.jsx — student forum with accordion posts and author permissions */

import "./Forum.css";
import { useMemo, useState } from "react";

// localStorage key
const FORUM_KEY = "universe-forum-posts-v2";

// category options
const categories = ["All", "Accommodation", "Banking", "Transport", "Work", "University", "Other"];

// starter posts
const starterPosts = [
  {
    id: 1,
    title: "Best area to live near University of Greenwich?",
    category: "Accommodation",
    status: "Pending",
    author: "Amina",
    text: "I want somewhere safe, practical, and not too expensive for daily travel. Which areas should I check first?",
    replies: [
      { id: 11, text: "Try places with easy DLR access first.", author: "Yusuf" },
      { id: 12, text: "Check travel time before rent price only.", author: "Sara" },
    ],
  },
  {
    id: 2,
    title: "What documents do I need for a student bank account?",
    category: "Banking",
    status: "Answered",
    author: "Yusuf",
    text: "I have my passport and university letter, but I keep hearing mixed things about proof of address.",
    replies: [
      { id: 21, text: "Usually passport, visa, and proof of address.", author: "Amina" },
      { id: 22, text: "A university letter can help too.", author: "Sara" },
    ],
  },
];

// get current logged in user
const getUser = () =>
  JSON.parse(localStorage.getItem("universe-user") || "null");

export default function Forum() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem(FORUM_KEY);
    return saved ? JSON.parse(saved) : starterPosts;
  });

  const [openId, setOpenId] = useState(1);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [askOpen, setAskOpen] = useState(false);

  // new post fields
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [newCategory, setNewCategory] = useState("Other");

  // reply field per post
  const [replyText, setReplyText] = useState({});

  // edit state
  const [editingPostId, setEditingPostId] = useState(null);
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");
  const [editCategory, setEditCategory] = useState("Other");
  const [editReplyText, setEditReplyText] = useState("");

  const [notice, setNotice] = useState("");

  // current user
  const user = getUser();

  // save posts to localStorage
  const savePosts = (updated) => {
    setPosts(updated);
    localStorage.setItem(FORUM_KEY, JSON.stringify(updated));
  };

  // show notice then auto hide
  const showNotice = (msg) => {
    setNotice(msg);
    setTimeout(() => setNotice(""), 2200);
  };

  // toggle post open/closed
  const togglePost = (id) => setOpenId((prev) => (prev === id ? null : id));

  // filter posts
  const filteredPosts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return posts.filter((post) => {
      const matchCat = activeCategory === "All" || post.category === activeCategory;
      const matchSearch = !q || post.title.toLowerCase().includes(q) || post.text.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [posts, search, activeCategory]);

  // add new post
  const addPost = () => {
    if (!user) { showNotice("Sign in to post a question."); return; }
    if (newTitle.trim().length < 6) { showNotice("Title is too short."); return; }
    if (newText.trim().length < 12) { showNotice("Add a bit more detail."); return; }

    const post = {
      id: Date.now(),
      title: newTitle.trim(),
      category: newCategory,
      status: "Pending",
      author: user.name,
      text: newText.trim(),
      replies: [],
    };

    savePosts([post, ...posts]);
    setOpenId(post.id);
    setNewTitle("");
    setNewText("");
    setNewCategory("Other");
    setAskOpen(false);
    showNotice("Question posted.");
  };

  // delete post — author only
  const deletePost = (postId) => {
    savePosts(posts.filter((p) => p.id !== postId));
    if (openId === postId) setOpenId(null);
    showNotice("Question deleted.");
  };

  // start edit post — author only
  const startEditPost = (post) => {
    setEditingPostId(post.id);
    setEditTitle(post.title);
    setEditText(post.text);
    setEditCategory(post.category);
  };

  // save edit post
  const saveEditPost = () => {
    if (editTitle.trim().length < 6 || editText.trim().length < 12) {
      showNotice("Make the post a bit clearer.");
      return;
    }
    savePosts(posts.map((p) =>
      p.id === editingPostId
        ? { ...p, title: editTitle.trim(), text: editText.trim(), category: editCategory }
        : p
    ));
    setEditingPostId(null);
    showNotice("Question updated.");
  };

  // add reply — any logged in user
  const addReply = (postId) => {
    if (!user) { showNotice("Sign in to reply."); return; }
    const text = (replyText[postId] || "").trim();
    if (text.length < 2) { showNotice("Reply is too short."); return; }

    savePosts(posts.map((p) =>
      p.id === postId
        ? { ...p, replies: [...p.replies, { id: Date.now(), text, author: user.name }] }
        : p
    ));
    setReplyText((prev) => ({ ...prev, [postId]: "" }));
    showNotice("Reply added.");
  };

  // delete reply — author only
  const deleteReply = (postId, replyId) => {
    savePosts(posts.map((p) =>
      p.id === postId
        ? { ...p, replies: p.replies.filter((r) => r.id !== replyId) }
        : p
    ));
    setEditingReplyId(null);
    showNotice("Reply deleted.");
  };

  // start edit reply — author only
  const startEditReply = (reply) => {
    setEditingReplyId(reply.id);
    setEditReplyText(reply.text);
  };

  // save edit reply
  const saveEditReply = (postId) => {
    if (editReplyText.trim().length < 2) { showNotice("Reply is too short."); return; }
    savePosts(posts.map((p) =>
      p.id === postId
        ? { ...p, replies: p.replies.map((r) => r.id === editingReplyId ? { ...r, text: editReplyText.trim() } : r) }
        : p
    ));
    setEditingReplyId(null);
    showNotice("Reply updated.");
  };

  // toggle status — post author only
  const toggleStatus = (post) => {
    savePosts(posts.map((p) =>
      p.id === post.id
        ? { ...p, status: p.status === "Answered" ? "Pending" : "Answered" }
        : p
    ));
    showNotice(post.status === "Answered" ? "Marked as pending." : "Marked as answered.");
  };

  // check if current user is author
  const isAuthor = (authorName) => user && user.name === authorName;

  return (
    <div className="forumPage page">

      {/* intro */}
      <div className="forumHead">
        <p className="forumEyebrow">Forum</p>
        <h1 className="forumTitle">Ask, browse, and get unstuck.</h1>
        <p className="forumSub">Clear questions, useful replies, and simple student-to-student help.</p>
      </div>

      {/* search + tabs */}
      <div className="forumTools">
        <input
          className="forumSearch"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="forumTabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`forumTab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ask box — login required */}
      <div className="forumAskWrap">
        {user ? (
          <>
            <button
              className="forumAskToggle"
              type="button"
              onClick={() => setAskOpen((prev) => !prev)}
            >
              <span>{askOpen ? "✕ Cancel" : "+ Ask a question"}</span>
            </button>

            {askOpen && (
              <div className="forumAskBox">
                <input
                  className="forumInput"
                  placeholder="Question title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <select
                  className="forumInput forumSelect"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                >
                  {categories.filter((c) => c !== "All").map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <textarea
                  className="forumTextarea"
                  placeholder="Explain your situation clearly..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
                <button className="forumMainBtn" type="button" onClick={addPost}>
                  Post question
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="forumSignInPrompt">
            <p>Sign in to ask a question or reply to others.</p>
          </div>
        )}
      </div>

      {/* accordion posts */}
      <div className="forumAccordion">
        {filteredPosts.map((post) => {
          const isOpen = openId === post.id;
          const canManagePost = isAuthor(post.author);

          return (
            <div
              key={post.id}
              className={`forumPost ${isOpen ? "open" : ""} ${post.status === "Answered" ? "answered" : ""}`}
            >
              {/* post header */}
              <button
                className="forumPostHeader"
                type="button"
                onClick={() => togglePost(post.id)}
              >
                <div className="forumPostHeaderLeft">
                  <span className="forumPostTitle">{post.title}</span>
                  <div className="forumPostMeta">
                    <span className="forumCategory">{post.category}</span>
                    <span className={`forumStatus ${post.status === "Answered" ? "solved" : ""}`}>
                      {post.status}
                    </span>
                    <span className="forumPostAuthor">by {post.author}</span>
                  </div>
                </div>
                <div className="forumPostHeaderRight">
                  <span className="forumReplyCount">💬 {post.replies.length}</span>
                  <span className="forumArrow">{isOpen ? "▲" : "▼"}</span>
                </div>
              </button>

              {/* post body */}
              {isOpen && (
                <div className="forumPostBody">

                  {/* edit mode */}
                  {editingPostId === post.id ? (
                    <div className="forumEditBox">
                      <input
                        className="forumInput"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                      />
                      <select
                        className="forumInput forumSelect"
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                      >
                        {categories.filter((c) => c !== "All").map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <textarea
                        className="forumTextarea"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <div className="forumActions">
                        <button className="forumMainBtn" type="button" onClick={saveEditPost}>Save changes</button>
                        <button className="forumGhostBtn" type="button" onClick={() => setEditingPostId(null)}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="forumPostText">{post.text}</p>

                      {/* author-only actions */}
                      {canManagePost && (
                        <div className="forumActions">
                          <button className="forumGhostBtn small" type="button" onClick={() => toggleStatus(post)}>
                            {post.status === "Answered" ? "Mark as pending" : "Mark as answered"}
                          </button>
                          <button className="forumGhostBtn small" type="button" onClick={() => startEditPost(post)}>
                            Edit
                          </button>
                          <button className="forumDeleteBtn small" type="button" onClick={() => deletePost(post.id)}>
                            Delete
                          </button>
                        </div>
                      )}
                    </>
                  )}

                  {/* replies */}
                  <div className="forumReplies">
                    <p className="forumRepliesTitle">
                      Replies {post.replies.length > 0 && `(${post.replies.length})`}
                    </p>

                    {post.replies.length > 0 ? (
                      post.replies.map((r) => (
                        <div className="forumReplyWrap" key={r.id}>
                          {editingReplyId === r.id ? (
                            <div className="forumEditReplyBox">
                              <input
                                className="forumReplyInput"
                                value={editReplyText}
                                onChange={(e) => setEditReplyText(e.target.value)}
                              />
                              <div className="forumActions">
                                <button className="forumMainBtn small" type="button" onClick={() => saveEditReply(post.id)}>Save</button>
                                <button className="forumGhostBtn small" type="button" onClick={() => setEditingReplyId(null)}>Cancel</button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="forumReply">
                                <span className="forumReplyAuthor">{r.author || "Student"}</span>
                                <p>{r.text}</p>
                              </div>
                              {/* author-only reply actions */}
                              {isAuthor(r.author) && (
                                <div className="forumReplyActions">
                                  <button className="forumGhostBtn small" type="button" onClick={() => startEditReply(r)}>Edit</button>
                                  <button className="forumDeleteBtn small" type="button" onClick={() => deleteReply(post.id, r.id)}>Delete</button>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="forumReplyEmpty">No replies yet — be the first to help.</div>
                    )}
                  </div>

                  {/* reply input — login required */}
                  {user ? (
                    <div className="forumReplyBox">
                      <input
                        className="forumReplyInput"
                        placeholder="Write a reply..."
                        value={replyText[post.id] || ""}
                        onChange={(e) => setReplyText((prev) => ({ ...prev, [post.id]: e.target.value }))}
                      />
                      <button className="forumMainBtn" type="button" onClick={() => addReply(post.id)}>
                        Reply
                      </button>
                    </div>
                  ) : (
                    <div className="forumSignInPrompt small">
                      <p>Sign in to reply to this question.</p>
                    </div>
                  )}

                </div>
              )}
            </div>
          );
        })}

        {filteredPosts.length === 0 && (
          <div className="forumEmpty">No questions found. Try a different search or category.</div>
        )}
      </div>

      {/* notice */}
      {notice && <div className="forumNotice">{notice}</div>}

    </div>
  );
}