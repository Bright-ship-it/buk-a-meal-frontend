import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";

function Navbar({ user }) {
  return (
    <div>
      <nav className="nav">
        <div className="site-title">
          <NavLink to={"/"} exact="true">
            Tasty
          </NavLink>
        </div>
        <div className="items">
          <ul>
            <NavLink to={"/"} exact="true" className="btn-text">
              Home
            </NavLink>

            <Link to={"/account"} className="btn-text">
              <h3 className="">{user ? `${user.first_name}` : "Account"}</h3>
            </Link>

            <NavLink to={"/"} exact="true" className="btn-text">
              Orders
            </NavLink>
          </ul>
        </div>
      </nav>
      <div className="meals-board-one">
        <h1 className="board-one">Daily Menus: </h1>
        <Link to={`/mondaymenu`}>
          <button className="btn-view">Monday</button>
        </Link>
        <Link to={`/tuesdaymenu`}>
          <button className="btn-view">Tuesday</button>
        </Link>
        <Link to={`/wednesdaymenu`}>
          <button className="btn-view">Wednesday</button>
        </Link>
        <Link to={`/thursdaymenu`}>
          <button className="btn-view">Thursday</button>
        </Link>
        <Link to={`/fridaymenu`}>
          <button className="btn-view">Friday</button>
        </Link>
        <Link to={`/saturdaymenu`}>
          <button className="btn-view">Saturday</button>
        </Link>
        <Link to={`/sundaymenu`}>
          <button className="btn-view">Sunday</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
