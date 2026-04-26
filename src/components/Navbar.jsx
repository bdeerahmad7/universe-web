/* Navbar.jsx — top navigation bar */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, saveUser, removeUser } from "../data/storage";

/* nav links */
const navLinks = [
  { to: "/",             label: "Home",        end: true  },
  { to: "/universities", label: "Universities", end: false },
  { to: "/guides",       label: "Life Guide",   end: false },
  { to: "/motivation",   label: "Motivation",   end: false },
  { to: "/forum",        label: "Forum",        end: false },
];

/* active class helper */
const linkClass = ({ isActive }) => isActive ? "navbarLink active" : "navbarLink";

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [user,      setUser]      = useState(null);
  const [dropOpen,  setDropOpen]  = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [nameError, setNameError] = useState("");

  /* load saved user on mount */
  useEffect(() => {
    const saved = getUser();
    if (saved) setUser(saved);
  }, []);

  const closeMenu = () => setOpen(false);

  /* sign in with name */
  const handleSignIn = () => {
    if (nameInput.trim().length < 2) {
      setNameError("Please enter your name.");
      return;
    }
    const newUser = {
      name:   nameInput.trim(),
      avatar: `https://i.pravatar.cc/60?u=${nameInput.trim()}`,
    };
    saveUser(newUser);
    setUser(newUser);
    setShowModal(false);
    setNameInput("");
    setNameError("");
    setOpen(false);
  };

  /* logout */
  const handleLogout = () => {
    removeUser();
    setUser(null);
    setOpen(false);
    setDropOpen(false);
  };

  return (
    <header className="navbarWrap">

      {/* sign in modal */}
      {showModal && (
        <div className="navModalWrap" onClick={() => setShowModal(false)}>
          <div className="navModal" onClick={(e) => e.stopPropagation()}>
            <h2 className="navModalTitle">Sign in to UniVerse</h2>
            <p className="navModalSub">Enter your name to get started. No password needed.</p>
            <input
              className="navModalInput"
              placeholder="Your name"
              value={nameInput}
              onChange={(e) => { setNameInput(e.target.value); setNameError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
              autoFocus
            />
            {nameError && <p className="navModalError">{nameError}</p>}
            <div className="navModalActions">
              <button className="navModalBtn" type="button" onClick={handleSignIn}>
                Sign in
              </button>
              <button className="navModalGhost" type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
            <p className="navModalNote">
              Your progress and posts are saved to this device. Full account sync coming soon.
            </p>
          </div>
        </div>
      )}

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
              <button className="navbarGhost" type="button" onClick={() => setShowModal(true)}>
                Sign in
              </button>
              <button className="navbarButton" type="button" onClick={() => setShowModal(true)}>
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

                  {/* user info */}
                  <div className="navDropdownUser">
                    <img src={user.avatar} alt={user.name} className="navDropdownAvatar" />
                    <div>
                      <p className="navDropdownName">{user.name}</p>
                      <p className="navDropdownRole">Student</p>
                    </div>
                  </div>

                  <div className="navDropdownDivider" />

                  {/* account actions — UI only, Firebase coming soon */}
                  <button className="navDropdownItem" type="button" onClick={() => setDropOpen(false)}>
                    <span className="navDropdownItemIcon">👤</span>
                    My Profile
                    <span className="navDropdownItemBadge">Soon</span>
                  </button>

                  <button className="navDropdownItem" type="button" onClick={() => setDropOpen(false)}>
                    <span className="navDropdownItemIcon">🔖</span>
                    Saved Universities
                    <span className="navDropdownItemBadge">Soon</span>
                  </button>

                  <button className="navDropdownItem" type="button" onClick={() => setDropOpen(false)}>
                    <span className="navDropdownItemIcon">⚙️</span>
                    Settings
                    <span className="navDropdownItemBadge">Soon</span>
                  </button>

                  <button className="navDropdownItem" type="button" onClick={() => setDropOpen(false)}>
                    <span className="navDropdownItemIcon">🌐</span>
                    Language
                    <span className="navDropdownItemBadge">Soon</span>
                  </button>

                  <div className="navDropdownDivider" />

                  {/* logout — works now */}
                  <button
                    className="navDropdownItem logout"
                    type="button"
                    onClick={() => { handleLogout(); setDropOpen(false); }}
                  >
                    <span className="navDropdownItemIcon">🚪</span>
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
                <button className="navbarMobileGhost" type="button" onClick={() => { setShowModal(true); setOpen(false); }}>
                  Sign in
                </button>
                <button className="navbarMobileButton" type="button" onClick={() => { setShowModal(true); setOpen(false); }}>
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