import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const authorized = Boolean(localStorage.getItem("accessToken"));

  function logoutHandler() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          Pathway
        </Link>

        <nav className="navbar-links">
          {!authorized ? (
            <>
              <Link className="navbar-link" to="/">
                Home
              </Link>
              <Link className="navbar-link" to="/universities">
                Universities
              </Link>
              <Link className="navbar-link" to="/careers">
                Careers
              </Link>
            </>
          ) : (
            <>
              <Link className="navbar-link" to="/">
                Home
              </Link>
              <Link className="navbar-link" to="/universities">
                Universities
              </Link>
              <Link className="navbar-link" to="/planner">
                Planner
              </Link>
              <Link className="navbar-link" to="/path">
                Path
              </Link>
              <Link className="navbar-link" to="/favorites">
                Favorites
              </Link>
              <Link className="navbar-link" to="/profile">
                Profile
              </Link>
            </>
          )}
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
      </div>
    </header>
  );
};

export default NavBar;
