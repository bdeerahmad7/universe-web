/* UniversityDetails.jsx — single university detail page */

import "./UniversityDetails.css";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUniversityById, universitiesData } from "../data/universitiesData";
import { getData, setData, STORAGE_KEYS } from "../data/storage";

// localStorage keys
const SAVED_KEY   = STORAGE_KEYS.savedUnis;
const COMPARE_KEY = STORAGE_KEYS.compareUnis;

export default function UniversityDetails() {
  const { id }  = useParams();
  const uni     = getUniversityById(id);

  const [saved,   setSaved]   = useState([]);
  const [compare, setCompare] = useState([]);
  const [notice,  setNotice]  = useState("");

  // load state + scroll to top on id change
  useEffect(() => {
  setSaved(getData(SAVED_KEY, []));
  setCompare(getData(COMPARE_KEY, []));
  window.scrollTo(0, 0);
}, [id]);

  // auto hide notice
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 2000);
    return () => clearTimeout(t);
  }, [notice]);

  // not found state
  if (!uni) {
    return (
      <div className="detailsPage page">
        <div className="detailsEmpty">
          <h1>University not found</h1>
          <p>Please go back and choose a valid option.</p>
          <NavLink to="/universities" className="detailsPrimaryBtn">
            Back to universities
          </NavLink>
        </div>
      </div>
    );
  }

  const isSaved    = saved.includes(uni.id);
  const isCompared = compare.includes(uni.id);

  // toggle save
  const toggleSave = () => {
  const updated = isSaved
    ? saved.filter((i) => i !== uni.id)
    : [...saved, uni.id];
  setSaved(updated);
  setData(SAVED_KEY, updated);
};

  // toggle compare
  const toggleCompare = () => {
  if (isCompared) {
    const updated = compare.filter((i) => i !== uni.id);
    setCompare(updated);
    setData(COMPARE_KEY, updated);
    return;
  }
  if (compare.length >= 3) { setNotice("Max 3 universities reached"); return; }
  const updated = [...compare, uni.id];
  setCompare(updated);
  setData(COMPARE_KEY, updated);
  setNotice("Added to compare");
};

  // related universities — same subject group, exclude current
  const related = universitiesData
    .filter((u) => u.id !== uni.id && u.subjectGroup === uni.subjectGroup)
    .slice(0, 3);

  return (
    <div className="detailsPage page">

      {/* back */}
      <NavLink to="/universities" className="detailsBack">
        ← Back
      </NavLink>

      {/* hero */}
      <section className="detailsHero">
        <div className="detailsMedia">
          <div
            className="detailsImage"
            style={{ backgroundImage: `url(${uni.img})` }}
          />
          <div className="detailsImageShade" />
          <span className="detailsTag">{uni.tag}</span>
        </div>

        <div className="detailsIntroCard">
          {/* pills row */}
          <div className="detailsPills">
            <span className="detailsCityPill">{uni.city}</span>
            <span className="detailsSubjectPill">{uni.subjectGroup}</span>
          </div>

          <h1 className="detailsTitle">{uni.name}</h1>
          <p className="detailsOverview">{uni.overview}</p>

          {/* actions */}
          <div className="detailsActions">
            <button
              className={`detailsPrimaryBtn ${isSaved ? "saved" : ""}`}
              onClick={toggleSave}
            >
              {isSaved ? "Saved" : "Save"}
            </button>
            <button
              className={`detailsGhostBtn ${isCompared ? "active" : ""}`}
              onClick={toggleCompare}
            >
              {isCompared ? "Added to compare" : "Compare"}
            </button>
          </div>
        </div>
      </section>

      {/* content cards */}
      <section className="detailsGrid">

        {/* highlights */}
        <div className="detailsCard">
          <h2>Highlights</h2>
          <div className="detailsHighlights">
            {uni.highlights.map((item) => (
              <div className="detailsHighlightItem" key={item}>
                <span className="detailsDot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* summary */}
        <div className="detailsCard">
          <h2>Quick summary</h2>
          <p className="detailsFit">{uni.bestFor}</p>

          <div className="detailsFacts">
            <p><strong>Focus:</strong>    {uni.focus}</p>
            <p><strong>City:</strong>     {uni.city}</p>
            <p><strong>Tuition:</strong>  £{uni.tuition.toLocaleString()} / year</p>
            <p><strong>Lifestyle:</strong>{uni.lifestyle}</p>
          </div>

          {/* official links */}
          <div className="detailsNext">
            <h3>Official links</h3>
            <a href={uni.officialUrl}       target="_blank" rel="noreferrer" className="detailsInlineBtn">
              Website
            </a>
            <a href={uni.internationalUrl}  target="_blank" rel="noreferrer" className="detailsInlineBtn secondary">
              International info
            </a>
          </div>
        </div>

      </section>

      {/* related universities */}
      {related.length > 0 && (
        <section className="detailsRelated">
          <h2 className="detailsRelatedTitle">You might also like</h2>
          <div className="detailsRelatedGrid">
            {related.map((u) => (
              <NavLink to={`/universities/${u.id}`} key={u.id} className="detailsRelatedCard">
                <div
                  className="detailsRelatedImage"
                  style={{ backgroundImage: `url(${u.img})` }}
                />
                <div className="detailsRelatedBody">
                  <p className="detailsRelatedName">{u.name}</p>
                  <p className="detailsRelatedCity">📍 {u.city}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </section>
      )}

      {/* notice */}
      {notice && <div className="detailsNotice">{notice}</div>}

    </div>
  );
}