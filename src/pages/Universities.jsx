/* Universities.jsx — browse, filter, save, and compare universities */

import "./Universities.css";
import { NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { universitiesData } from "../data/universitiesData";

// localStorage keys
const SAVED_KEY = "universe-saved-universities";
const COMPARE_KEY = "universe-compare-universities";

// subject filter options
const subjectOptions = [
  "All",
  "Medicine & Health",
  "Computing & Tech",
  "Business & Finance",
  "Engineering & STEM",
  "Law & Politics",
  "Media & Communication",
  "Humanities & Social Science",
];

export default function Universities() {
  const [saved, setSaved] = useState([]);
  const [compare, setCompare] = useState([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [cityFilter, setCityFilter] = useState("All");
  const [budgetFilter, setBudgetFilter] = useState("All");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Default");
  const [search, setSearch] = useState("");
  const [showCompare, setShowCompare] = useState(false);
  const [notice, setNotice] = useState("");

  // load saved state
  useEffect(() => {
    setSaved(JSON.parse(localStorage.getItem(SAVED_KEY) || "[]"));
    setCompare(JSON.parse(localStorage.getItem(COMPARE_KEY) || "[]"));
  }, []);

  // auto hide notice
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 2200);
    return () => clearTimeout(t);
  }, [notice]);

  // toggle save
  const toggleSave = (id) => {
    const updated = saved.includes(id)
      ? saved.filter((i) => i !== id)
      : [...saved, id];
    setSaved(updated);
    localStorage.setItem(SAVED_KEY, JSON.stringify(updated));
  };

  // toggle compare
  const toggleCompare = (id) => {
    if (compare.includes(id)) {
      const updated = compare.filter((i) => i !== id);
      setCompare(updated);
      localStorage.setItem(COMPARE_KEY, JSON.stringify(updated));
      return;
    }
    if (compare.length >= 3) {
      setNotice("Maximum 3 universities for compare.");
      return;
    }
    const updated = [...compare, id];
    setCompare(updated);
    localStorage.setItem(COMPARE_KEY, JSON.stringify(updated));
    setNotice("Added to compare.");
  };

  // clear compare
  const clearCompare = () => {
    setCompare([]);
    localStorage.setItem(COMPARE_KEY, JSON.stringify([]));
    setShowCompare(false);
  };

  // reset all filters
  const resetFilters = () => {
    setSavedOnly(false);
    setCityFilter("All");
    setBudgetFilter("All");
    setSubjectFilter("All");
    setSortBy("Default");
    setSearch("");
  };

  // city options from data
  const cities = useMemo(
    () => ["All", ...new Set(universitiesData.map((u) => u.city))],
    []
  );

  // filter + sort logic
  const filteredUniversities = useMemo(() => {
    let list = universitiesData.filter((uni) => {
      const matchSaved = savedOnly ? saved.includes(uni.id) : true;
      const matchCity = cityFilter === "All" ? true : uni.city === cityFilter;
      const matchSubject = subjectFilter === "All" ? true : uni.subjectGroup === subjectFilter;
      const matchSearch = search.trim() === "" ? true :
        uni.name.toLowerCase().includes(search.toLowerCase()) ||
        uni.city.toLowerCase().includes(search.toLowerCase());

      let matchBudget = true;
      if (budgetFilter === "Low") matchBudget = uni.tuition < 20000;
      if (budgetFilter === "Mid") matchBudget = uni.tuition >= 20000 && uni.tuition <= 30000;
      if (budgetFilter === "High") matchBudget = uni.tuition > 30000;

      return matchSaved && matchCity && matchSubject && matchSearch && matchBudget;
    });

    // sort by tuition
    if (sortBy === "Low to High") list = [...list].sort((a, b) => a.tuition - b.tuition);
    if (sortBy === "High to Low") list = [...list].sort((a, b) => b.tuition - a.tuition);

    return list;
  }, [saved, savedOnly, cityFilter, budgetFilter, subjectFilter, search, sortBy]);

  const comparedUniversities = universitiesData.filter((u) => compare.includes(u.id));

  const activeFilters = [
    savedOnly ? "Saved" : null,
    cityFilter !== "All" ? cityFilter : null,
    budgetFilter !== "All" ? budgetFilter : null,
    subjectFilter !== "All" ? subjectFilter : null,
    sortBy !== "Default" ? sortBy : null,
    search.trim() !== "" ? `"${search}"` : null,
  ].filter(Boolean);

  return (
    <div className="uniPage page">

      {/* intro */}
      <section className="uniIntro">
        <p className="uniEyebrow">Universities</p>
        <h1 className="uniTitle">Explore with clarity.</h1>
        <p className="uniSub">
          Find the right UK university by filtering city, budget, subject area, or searching by name.
        </p>
      </section>

      {/* search bar */}
      <input
        className="uniSearch"
        type="text"
        placeholder="Search by university name or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* filter bar */}
      <section className="uniFilterBar">
        <button
          className={`uniFilterBtn ${savedOnly ? "active" : ""}`}
          type="button"
          onClick={() => setSavedOnly((prev) => !prev)}
        >
          {savedOnly ? "Showing saved" : "Show saved"}
        </button>

        <select className="uniSelect" value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
          {cities.map((city) => (
            <option key={city} value={city}>{city === "All" ? "All cities" : city}</option>
          ))}
        </select>

        <select className="uniSelect" value={budgetFilter} onChange={(e) => setBudgetFilter(e.target.value)}>
          <option value="All">All budgets</option>
          <option value="Low">Lower cost</option>
          <option value="Mid">Mid range</option>
          <option value="High">Higher cost</option>
        </select>

        <select className="uniSelect" value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}>
          {subjectOptions.map((s) => (
            <option key={s} value={s}>{s === "All" ? "All subjects" : s}</option>
          ))}
        </select>

        <select className="uniSelect" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="Default">Sort: Default</option>
          <option value="Low to High">Tuition: Low to High</option>
          <option value="High to Low">Tuition: High to Low</option>
        </select>

        <button className="uniResetBtn" type="button" onClick={resetFilters}>
          Reset
        </button>
      </section>

      {/* results count + active chips */}
      <div className="uniResultsBlock">
        <span className="uniResultsText">
          <strong>{filteredUniversities.length}</strong> result{filteredUniversities.length === 1 ? "" : "s"} ready to explore
        </span>
        {activeFilters.length > 0 && (
          <div className="uniActiveFilters">
            {activeFilters.map((item) => (
              <span className="uniActiveChip" key={item}>{item}</span>
            ))}
          </div>
        )}
      </div>

      {/* university cards */}
      <div className="uniGrid">
        {filteredUniversities.map((uni) => {
          const isSaved = saved.includes(uni.id);
          const isCompared = compare.includes(uni.id);

          return (
            <article className="uniCard" key={uni.id}>
              <NavLink to={`/universities/${uni.id}`} className="uniMedia">
                <div
                  className="uniMediaImage"
                  style={{ backgroundImage: `url(${uni.img})` }}
                  aria-label={uni.name}
                />
                <div className="uniOverlay" />
                <span className="uniTag">{uni.tag}</span>
              </NavLink>

              <div className="uniContent">
                <div className="uniTopRow">
                  <div>
                    <h3 className="uniName">{uni.name}</h3>
                    <p className="uniCity">📍 {uni.city}</p>
                  </div>
                  <button
                    className={`uniSaveBtn ${isSaved ? "saved" : ""}`}
                    type="button"
                    onClick={() => toggleSave(uni.id)}
                  >
                    {isSaved ? "Saved" : "Save"}
                  </button>
                </div>

                <p className="uniDesc">{uni.desc}</p>
                <p className="uniFee">From £{uni.tuition.toLocaleString()} / year</p>

                <div className="uniActionsRow">
                  <NavLink to={`/universities/${uni.id}`} className="uniBtn">
                    View details
                  </NavLink>
                  <button
                    className={`uniCompareBtn ${isCompared ? "active" : ""}`}
                    type="button"
                    onClick={() => toggleCompare(uni.id)}
                  >
                    {isCompared ? "In compare" : "Compare"}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* empty state */}
      {filteredUniversities.length === 0 && (
        <div className="uniEmpty">
          <h3>No universities match</h3>
          <p>Try adjusting your search, filters, or reset to see all options.</p>
        </div>
      )}

      {/* notice */}
      {notice && <div className="uniNotice">{notice}</div>}

      {/* compare dock */}
      {compare.length > 0 && (
        <div className="compareDock">
          <div>
            <p className="compareDockTitle">Compare ready</p>
            <p className="compareDockText">{compare.length} selected</p>
          </div>
          <div className="compareDockActions">
            <button className="compareDockGhost" type="button" onClick={clearCompare}>
              Clear
            </button>
            <button className="compareDockMain" type="button" onClick={() => setShowCompare(true)}>
              Compare selected
            </button>
          </div>
        </div>
      )}

      {/* compare modal */}
      {showCompare && comparedUniversities.length > 0 && (
        <div className="compareModalWrap" onClick={() => setShowCompare(false)}>
          <div className="compareModal" onClick={(e) => e.stopPropagation()}>
            <div className="compareModalHead">
              <div>
                <h2>Compare universities</h2>
                <p>Your selected options side by side.</p>
              </div>
              <button
                className="compareCloseBtn"
                type="button"
                onClick={() => setShowCompare(false)}
              >
                Close
              </button>
            </div>

            <div className="compareGrid">
              {comparedUniversities.map((uni) => (
                <div className="compareCard" key={uni.id}>
                  <div
                    className="compareImage"
                    style={{ backgroundImage: `url(${uni.img})` }}
                    aria-label={uni.name}
                  />
                  <div className="compareBody">
                    <h3>{uni.name}</h3>
                    <p><strong>City:</strong> {uni.city}</p>
                    <p><strong>Subject area:</strong> {uni.subjectGroup}</p>
                    <p><strong>Focus:</strong> {uni.focus}</p>
                    <p><strong>Tuition:</strong> From £{uni.tuition.toLocaleString()} / year</p>
                    <p><strong>Lifestyle:</strong> {uni.lifestyle}</p>
                    <button
                      className="compareRemoveBtn"
                      type="button"
                      onClick={() => toggleCompare(uni.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}