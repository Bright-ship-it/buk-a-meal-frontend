import React from "react";
import meat from "../components/img/logo.jpg";
import { NavLink } from "react-router-dom";

import "../App.css";

function Login() {
  return (
    
    <div className="login">
      <div className="login-left">

        <img src={meat} alt="meet" />
      </div>

      <div className="login-right">
      <h1>Tasty</h1>
      <p>welcome To Tasty</p>
        

        <div className="login-label">
          <label htmlFor="email">username</label>
          <input type="text" required id="email" />
        </div>

        <div className="login-label">
          <label htmlFor="password">password</label>
          <input type="text" required id="password" />
        </div>

        <NavLink to={"/"} exact="true" className="btn-menu">
        Login &rarr;
      </NavLink>

      <div className="link">
      <NavLink to={"/register"} exact="true" className="">
      Dont have an Account? <span>click here!!</span>
    </NavLink>
      
      </div>

     

     

      </div>
    </div>
  );
}

export default Login;
