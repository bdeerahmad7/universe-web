/* NotFound.jsx — 404 page */

import "./NotFound.css";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFoundPage page">
      <p className="notFoundCode">404</p>
      <h1 className="notFoundTitle">Page not found.</h1>
      <p className="notFoundText">
        That page doesn't exist. Head back to explore universities and student life.
      </p>
      <NavLink to="/" className="notFoundBtn">
        Back to home
      </NavLink>
    </div>
  );
}