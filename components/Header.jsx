import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const login = localStorage.getItem("loggedin");

  const navigate = useNavigate();

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
    navigate("/");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <Link to={login ? "/host" : "/login"} className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
        <button
          onClick={fakeLogOut}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
