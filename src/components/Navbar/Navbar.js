import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/moviedblogo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="moviedb logo" className="nav-logo" />
        </Link>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
