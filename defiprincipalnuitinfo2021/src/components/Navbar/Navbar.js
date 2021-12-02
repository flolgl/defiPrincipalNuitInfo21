import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="#" className="navbar__logo">Logo</a>
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label for="nav-toggle" className="nav-toggle-label">
          <span className="label-span"></span>
        </label>
        <nav>
          <ul>
            <li>
              <a>menu1</a>
            </li>
            <li>
              <a>menu2</a>
            </li>
            <li>
              <a>menu3</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;