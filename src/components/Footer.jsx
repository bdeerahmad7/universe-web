/* Footer.jsx — site footer */

import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">

        {/* brand */}
        <div className="footerBrand">
          <span className="footerLogo">UniVerse</span>
          <p className="footerTagline">
            Helping international students explore, settle, and succeed in the UK.
          </p>
        </div>

        {/* quick links */}
        <nav className="footerLinks">
          <p className="footerLinksTitle">Explore</p>
          <NavLink to="/" className="footerLink">Home</NavLink>
          <NavLink to="/universities" className="footerLink">Universities</NavLink>
          <NavLink to="/guides" className="footerLink">Life Guide</NavLink>
          <NavLink to="/motivation" className="footerLink">Motivation</NavLink>
          <NavLink to="/forum" className="footerLink">Forum</NavLink>
        </nav>

      </div>

      {/* bottom bar */}
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} UniVerse — Built for international students.</p>
      </div>
    </footer>
  );
}