import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const authorized = Boolean(localStorage.getItem("accessToken"));
  const [open, setOpen] = useState(false);

  function logoutHandler() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.reload();
  }

  const guestLinks = [
    { to: "/", label: "Home" },
    { to: "/universities", label: "Universities" },
    { to: "/careers", label: "Careers" },
  ];

  const authLinks = [
    { to: "/", label: "Home" },
    { to: "/universities", label: "Universities" },
    { to: "/planner", label: "Planner" },
    { to: "/path", label: "Path" },
    { to: "/favorites", label: "Favorites" },
    { to: "/profile", label: "Profile" },
  ];

  const links = authorized ? authLinks : guestLinks;

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
          Pathway
        </Link>

        <nav className="navbar-links">
          {links.map((l) => (
            <Link key={l.to} className="navbar-link" to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          {!authorized ? (
            <>
              <Link className="btn btn-outline" to="/login">
                Login
              </Link>
              <Link className="btn btn-dark" to="/register">
                Register
              </Link>
            </>
          ) : (
            <button className="btn btn-dark" onClick={logoutHandler}>
              Logout
            </button>
          )}
        </div>

        <button
          className="navbar-burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            {links.map((l) => (
              <Link
                key={l.to}
                className="navbar-link"
                to={l.to}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            {!authorized ? (
              <div className="mobile-actions">
                <Link className="btn btn-outline" to="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link className="btn btn-dark" to="/register" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </div>
            ) : (
              <div className="mobile-actions">
                <button className="btn btn-dark" onClick={logoutHandler}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
