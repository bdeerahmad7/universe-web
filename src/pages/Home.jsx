/* Home.jsx — landing page */

import "./Home.css";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import { universitiesData } from "../data/universitiesData";

/* feature cards */
const features = [
  { icon: "🎓", title: "Explore universities",    text: "Compare options and find what fits your goals." },
  { icon: "🏙️", title: "Understand student life", text: "Clear steps for housing, money, and daily living." },
  { icon: "💬", title: "Ask practical questions",  text: "Get useful answers from real student situations." },
];

/* hero stats */
const stats = [
  "Multilingual friendly",
  "UK Wide",
  "Student driven",
];

/* first 3 universities from data */
const featuredUnis = universitiesData.slice(0, 3);

export default function Home() {
  return (
    <div className="home page">

      {/* hero */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="heroOverlay" />

        <div className="heroContent">
          <h1>UniVerse</h1>
          <p>A simple, clear way to explore universities and student life in the UK.</p>

          {/* stats pills */}
          <div className="heroStats">
            {stats.map((label) => (
              <span className="heroStatPill" key={label}>{label}</span>
            ))}
          </div>

          {/* buttons */}
          <div className="heroActions">
            <NavLink to="/universities" className="btnPrimary">Explore universities</NavLink>
            <NavLink to="/guides" className="btnGhost">Life guide</NavLink>
          </div>
        </div>
      </section>

      {/* feature cards */}
      <section className="features">
        {features.map(({ icon, title, text }) => (
          <div className="card" key={title}>
            <span className="cardIcon">{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      {/* top universities */}
      <section className="topUnis">
        <div className="sectionHead">
          <h2>Top universities</h2>
          <NavLink to="/universities">View all</NavLink>
        </div>

        <div className="uniGrid">
          {featuredUnis.map((uni) => (
            <div className="uniCard" key={uni.id}>
              <img src={uni.img} alt={uni.name} />
              <div className="uniInfo">
                <h3>{uni.name}</h3>
                <p>{uni.city}</p>
                <div className="uniCardActions">
                  <NavLink to={`/universities/${uni.id}`} className="uniMiniBtn">
                    View
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="homeCta">
        <p className="homeCtaText">Ready to start building your shortlist?</p>
        <NavLink to="/universities" className="homeCtaBtn">Start your journey</NavLink>
      </section>

    </div>
  );
}