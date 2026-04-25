/* Navbar.jsx — top navigation bar */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

/* nav links used in both desktop and mobile */
const navLinks = [
  { to: "/",             label: "Home",        end: true  },
  { to: "/universities", label: "Universities", end: false },
  { to: "/guides",       label: "Life Guide",   end: false },
  { to: "/forum",        label: "Forum",        end: false },
];

/* active class helper */
const linkClass = ({ isActive }) => isActive ? "navbarLink active" : "navbarLink";

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [user,     setUser]     = useState(null);
  const [dropOpen, setDropOpen] = useState(false);

  /* load saved user on mount */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("universe-user") || "null");
    if (saved) setUser(saved);
  }, []);

  const closeMenu = () => setOpen(false);

  /* demo login — no real auth in MVP */
  const handleDemoLogin = () => {
    const demoUser = {
      name:   "Student",
      avatar: "https://i.pravatar.cc/60?img=12",
    };
    localStorage.setItem("universe-user", JSON.stringify(demoUser));
    setUser(demoUser);
    setOpen(false);
  };

  /* logout */
  const handleLogout = () => {
    localStorage.removeItem("universe-user");
    setUser(null);
    setOpen(false);
    setDropOpen(false);
  };

  return (
    <header className="navbarWrap">

      {/* main bar */}
      <div className="navbar">

        {/* brand */}
        <NavLink to="/" className="navbarBrand" onClick={closeMenu}>
          UniVerse
        </NavLink>

        {/* desktop links */}
        <nav className="navbarLinks">
          {navLinks.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* desktop actions */}
        <div className="navbarActions">
          {!user ? (
            <>
              <button className="navbarGhost" type="button" onClick={handleDemoLogin}>
                Sign in
              </button>
              <button className="navbarButton" type="button" onClick={handleDemoLogin}>
                Sign up
              </button>
            </>
          ) : (
            <div className="navUser">
              <img
                src={user.avatar}
                alt={user.name}
                className="navAvatar"
                onClick={() => setDropOpen((prev) => !prev)}
              />
              {dropOpen && (
                <div className="navDropdown">
                  <span className="navDropdownName">{user.name}</span>
                  <NavLink
                    to="/universities"
                    className="navDropdownLink"
                    onClick={() => { closeMenu(); setDropOpen(false); }}
                  >
                    Explore
                  </NavLink>
                  <NavLink
                    to="/guides"
                    className="navDropdownLink"
                    onClick={() => { closeMenu(); setDropOpen(false); }}
                  >
                    Life guide
                  </NavLink>
                  <button
                    className="navDropdownBtn"
                    type="button"
                    onClick={() => { handleLogout(); setDropOpen(false); }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* mobile toggle */}
        <button
          className={`navbarToggle ${open ? "open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          type="button"
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

      </div>

      {/* mobile menu */}
      {open && (
        <div className="navbarMobile">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="navbarMobileLink"
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}

          <div className="navbarMobileActions">
            {!user ? (
              <>
                <button className="navbarMobileGhost" type="button" onClick={handleDemoLogin}>
                  Sign in
                </button>
                <button className="navbarMobileButton" type="button" onClick={handleDemoLogin}>
                  Sign up
                </button>
              </>
            ) : (
              <>
                <div className="navbarMobileProfile">
                  <img src={user.avatar} alt={user.name} className="navbarMobileAvatar" />
                  <span>{user.name}</span>
                </div>
                <button className="navbarMobileGhost" type="button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}

    </header>
  );
}