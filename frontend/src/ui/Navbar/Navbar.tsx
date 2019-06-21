import React, { ReactElement } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = (): ReactElement => {
  return (
    <nav className="main-navbar">
      <aside className="main-navbar__logo">
        <Link to="/">TouchyTyper</Link>
      </aside>
      <ul className="main-navbar__menu">
        <li className="main-navbar__menu-item">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li className="main-navbar__menu-item">
          <NavLink to="/exercises">Exercises</NavLink>
        </li>
        <li className="main-navbar__menu-item">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
