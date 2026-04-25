/* Motivation.jsx — daily tips and motivation for international students */

import "./Motivation.css";
import { useState } from "react";

// localStorage key
const SAVED_KEY = "universe-saved-tips";

// all tips data
const tipsData = [
  // mindset
  { id: 1, category: "Mindset", tip: "Every expert was once a beginner. You are not behind — you are exactly where you need to be." },
  { id: 2, category: "Mindset", tip: "Being far from home takes courage most people will never understand. That courage is already your strength." },
  { id: 3, category: "Mindset", tip: "Confusion is not failure. It is the first stage of understanding something new." },
  { id: 4, category: "Mindset", tip: "You did not come this far to only come this far. Keep going." },
  { id: 5, category: "Mindset", tip: "Comparing your chapter one to someone else's chapter ten will always mislead you. Focus on your own progress." },
  { id: 6, category: "Mindset", tip: "The discomfort you feel right now is not a sign you made the wrong choice. It is a sign you are growing." },

  // study
  { id: 7,  category: "Study", tip: "One focused hour beats three distracted hours every time. Protect your concentration." },
  { id: 8,  category: "Study", tip: "Start with the hardest task first. Everything after it will feel easier." },
  { id: 9,  category: "Study", tip: "Reading once and understanding is worth more than reading ten times and forgetting." },
  { id: 10, category: "Study", tip: "Ask questions in class. Nobody remembers the person who asked — they only remember the person who understood." },
  { id: 11, category: "Study", tip: "Your notes are only useful if you can read them later. Write clearly, even when you are in a hurry." },
  { id: 12, category: "Study", tip: "A short break every 45 minutes is not wasted time. It is how your brain consolidates what it just learned." },

  // wellbeing
  { id: 13, category: "Wellbeing", tip: "Sleep is not a luxury. It is the single most important thing you can do for your academic performance." },
  { id: 14, category: "Wellbeing", tip: "Eating properly is not optional. Your brain runs on food, not just caffeine." },
  { id: 15, category: "Wellbeing", tip: "Homesickness is normal. It means you had something worth missing." },
  { id: 16, category: "Wellbeing", tip: "If you are struggling, tell someone. Your university has support services specifically for international students." },
  { id: 17, category: "Wellbeing", tip: "A 20 minute walk outside will do more for your focus than an extra hour at your desk." },
  { id: 18, category: "Wellbeing", tip: "You are allowed to have bad days. They do not cancel out your good ones." },

  // finance
  { id: 19, category: "Finance", tip: "Track every pound you spend for one week. The results will surprise you and help you budget better." },
  { id: 20, category: "Finance", tip: "Student discounts exist everywhere in the UK. Always ask before you pay full price." },
  { id: 21, category: "Finance", tip: "Cook at home at least five days a week. It is the single biggest way to save money as a student." },
  { id: 22, category: "Finance", tip: "Set up a weekly budget on Sunday. It takes ten minutes and saves you from stress all week." },
  { id: 23, category: "Finance", tip: "An emergency fund of even £100 set aside will protect you from the small crises that derail students." },
  { id: 24, category: "Finance", tip: "Free events at your university are not just for socialising. They are free food, free entertainment, and free connections." },

  // social
  { id: 25, category: "Social", tip: "The first conversation is always the hardest. After that it gets easier every time." },
  { id: 26, category: "Social", tip: "Join one society or club in your first month. It is the fastest way to meet people who share your interests." },
  { id: 27, category: "Social", tip: "Not every friendship starts immediately. Some of the best ones take a whole semester to develop." },
  { id: 28, category: "Social", tip: "Your cultural background is not something to hide. It is something that makes you interesting to everyone around you." },
  { id: 29, category: "Social", tip: "Say yes to at least one social invitation per week, even when you do not feel like it." },
  { id: 30, category: "Social", tip: "Being kind costs nothing and opens more doors than any qualification ever will." },
];

const categories = ["All", "Mindset", "Study", "Wellbeing", "Finance", "Social"];

const categoryIcons = {
  Mindset:   "🧠",
  Study:     "📚",
  Wellbeing: "💚",
  Finance:   "💷",
  Social:    "🤝",
};

export default function Motivation() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [saved, setSaved] = useState(() =>
    JSON.parse(localStorage.getItem(SAVED_KEY) || "[]")
  );
  const [savedOnly, setSavedOnly] = useState(false);
  const [randomTip, setRandomTip] = useState(null);
  const [newTip, setNewTip] = useState("");
  const [newCategory, setNewCategory] = useState("Mindset");
  const [userTips, setUserTips] = useState(() =>
    JSON.parse(localStorage.getItem("universe-user-tips") || "[]")
  );
  const [notice, setNotice] = useState("");

  // save tip toggle
  const toggleSave = (id) => {
    const updated = saved.includes(id)
      ? saved.filter((i) => i !== id)
      : [...saved, id];
    setSaved(updated);
    localStorage.setItem(SAVED_KEY, JSON.stringify(updated));
  };

  // show notice then hide
  const showNotice = (msg) => {
    setNotice(msg);
    setTimeout(() => setNotice(""), 2200);
  };

  // add user tip
  const addTip = () => {
    if (newTip.trim().length < 10) { showNotice("Tip is too short."); return; }
    const tip = {
      id: Date.now(),
      category: newCategory,
      tip: newTip.trim(),
      userAdded: true,
    };
    const updated = [tip, ...userTips];
    setUserTips(updated);
    localStorage.setItem("universe-user-tips", JSON.stringify(updated));
    setNewTip("");
    showNotice("Tip added!");
  };

  // get random tip
  const getRandomTip = () => {
    const all = [...tipsData, ...userTips];
    const random = all[Math.floor(Math.random() * all.length)];
    setRandomTip(random);
  };

  // all tips combined
  const allTips = [...tipsData, ...userTips];

  // filtered tips
  const filtered = allTips.filter((t) => {
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    const matchSaved = savedOnly ? saved.includes(t.id) : true;
    return matchCat && matchSaved;
  });

  return (
    <div className="motivationPage page">

      {/* intro */}
      <section className="motivationIntro">
        <p className="motivationEyebrow">Motivation</p>
        <h1 className="motivationTitle">Stay focused. Keep going.</h1>
        <p className="motivationSub">
          Practical tips and honest encouragement for international students navigating university life in the UK.
        </p>
      </section>

      {/* random tip card */}
      <div className="motivationRandom">
        <div className="motivationRandomCard">
          {randomTip ? (
            <>
              <span className="motivationRandomIcon">
                {categoryIcons[randomTip.category] || "💡"}
              </span>
              <p className="motivationRandomText">{randomTip.tip}</p>
              <span className="motivationRandomCat">{randomTip.category}</span>
            </>
          ) : (
            <p className="motivationRandomPrompt">
              Click below for a random tip to start your day.
            </p>
          )}
        </div>
        <button className="motivationRandomBtn" type="button" onClick={getRandomTip}>
          {randomTip ? "Another tip" : "Get a random tip"}
        </button>
      </div>

      {/* add your own tip */}
      <div className="motivationAddBox">
        <p className="motivationAddTitle">Share your own tip</p>
        <p className="motivationAddSub">Add something that has genuinely helped you as a student.</p>
        <div className="motivationAddForm">
          <select
            className="motivationSelect"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          >
            {categories.filter((c) => c !== "All").map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input
            className="motivationInput"
            placeholder="Write your tip here..."
            value={newTip}
            onChange={(e) => setNewTip(e.target.value)}
          />
          <button className="motivationMainBtn" type="button" onClick={addTip}>
            Add tip
          </button>
        </div>
      </div>

      {/* filters */}
      <div className="motivationFilters">
        <div className="motivationTabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`motivationTab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat !== "All" && categoryIcons[cat]} {cat}
            </button>
          ))}
        </div>
        <button
          className={`motivationSavedBtn ${savedOnly ? "active" : ""}`}
          type="button"
          onClick={() => setSavedOnly((prev) => !prev)}
        >
          {savedOnly ? "Showing saved" : "Show saved"}
        </button>
      </div>

      {/* tips grid */}
      <div className="motivationGrid">
        {filtered.map((item) => (
          <div
            className={`motivationCard ${item.userAdded ? "userAdded" : ""}`}
            key={item.id}
          >
            <div className="motivationCardTop">
              <span className="motivationCardIcon">
                {categoryIcons[item.category] || "💡"}
              </span>
              <span className="motivationCardCat">{item.category}</span>
              {item.userAdded && (
                <span className="motivationUserBadge">Your tip</span>
              )}
            </div>
            <p className="motivationCardText">{item.tip}</p>
            <button
              className={`motivationSaveBtn ${saved.includes(item.id) ? "saved" : ""}`}
              type="button"
              onClick={() => toggleSave(item.id)}
            >
              {saved.includes(item.id) ? "Saved" : "Save"}
            </button>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="motivationEmpty">
            No tips found. Try a different category or reset your filters.
          </div>
        )}
      </div>

      {/* notice */}
      {notice && <div className="motivationNotice">{notice}</div>}

    </div>
  );
}