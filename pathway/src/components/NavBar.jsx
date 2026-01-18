import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const authorized = Boolean(localStorage.getItem("accessToken"));

  function logoutHandler() {
    localStorage.removeItem("accessToken");
    window.location.reload();
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LEFT: Logo/Brand */}
        <Link className="navbar-brand" to="/">
          Pathway
        </Link>

        <nav className="navbar-links">
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/universities">
            Universities
          </Link>
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
