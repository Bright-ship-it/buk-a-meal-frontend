import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
   <div><nav className="nav">
      <div className="site-title">
        <NavLink to={"/#"} exact="true">
          Tasty
        </NavLink>
      </div>
      <div className="items">
      <ul>
        <NavLink to={"/"} exact="true" className="btn-text">
          Home
        </NavLink>
        <NavLink to={"/"} exact="true" className="btn-text">
          Account
        </NavLink>
        <NavLink to={"/"} exact="true" className="btn-text">
          Cart
        </NavLink>
        
      </ul>
      
      </div>
      
    </nav>
    {/* <div className="meals-board-one">
    <h1 className="board-one">Daily Menus: </h1>
    <Link to={`/mondaymenu`}>
      <button className="board-one">Monday</button >
      </Link>
      <Link to={`/tuesdaymenu`}>
      <button className="board-one">Tuesday</button >
      </Link>
      <Link to={`/wednesdaymenu`}>
      <button className="board-one">Wednesday</button >
      </Link>
      <Link to={`/thursdaymenu`}>
      <button className="board-one">Thursday</button >
      </Link>
      <Link to={`/fridaymenu`}>
      <button className="board-one">Friday</button >
      </Link>
      <Link to={`/saturdaymenu`}>
      <button className="board-one">Saturday</button >
      </Link>
      <Link to={`/sundaymenu`}>
      <button className="board-one">Sunday</button >
      </Link>
    </div> */}

    </div> 
  );
}

export default Navbar;
