import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">
        <NavLink to={"/#"} exact="true">
          Tasty
        </NavLink>
      </div>
      <div className="items">
      <ul>
        <NavLink to={"/"} exact="true" className="btn-text">
          Menu
        </NavLink>
        <NavLink to={"/"} exact="true" className="btn-text">
          About-us
        </NavLink>
        <NavLink to={"/"} exact="true" className="btn-text">
          Contact-us
        </NavLink>
        
      </ul>
      
      </div>
      
    </nav>
  );
}

export default Navbar;
