import React, { ReactElement } from "react";
import "./Navbar.scss";

const Navbar = (): ReactElement => {
  return (
    <nav className="main-navbar">
      <aside className="main-navbar__logo">
        <a href="/">TouchyTyper</a>
      </aside>
      <ul className="main-navbar__menu">
        <li className="main-navbar__menu-item">
          <a href="/">Home</a>
        </li>
        <li className="main-navbar__menu-item">
          <a href="/">Exercises</a>
        </li>
        <li className="main-navbar__menu-item">
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
