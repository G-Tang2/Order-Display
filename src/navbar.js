import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => (
  <header>
    <div className="wrapper full-height no-background-color">
      <div className="store-name">
        <h1>Orders Ready</h1>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </div>
        <div className="nav-container">
          <NavLink to="/orders_ready" activeClassName="active">
            Menu
          </NavLink>
        </div>
      </nav>
    </div>
  </header>
);

export default NavBar;
