/* NotFound.jsx — 404 page */

import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <p style={{ color: "var(--text-soft)", fontSize: 13, textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 700 }}>
        404
      </p>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.04em", marginTop: 10 }}>
        Page not found.
      </h1>
      <p style={{ marginTop: 14, color: "var(--text-soft)", fontSize: 16, lineHeight: 1.7 }}>
        That page doesn't exist. Head back to explore universities and student life.
      </p>
      <NavLink to="/" style={{ display: "inline-flex", alignItems: "center", marginTop: 24, background: "var(--btn-gradient)", color: "var(--white)", padding: "10px 18px", borderRadius: 999, textDecoration: "none", fontWeight: 600, fontSize: 13 }}>
        Back to home
      </NavLink>
    </div>
  );
}