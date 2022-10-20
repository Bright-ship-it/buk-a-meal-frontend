import React from "react";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <section>
      <div className="reg">
        <h1>Create an Account</h1>
        <div className="control">
          <label htmlFor="name">First-Name</label>
          <input type="text" required id="name" />
        </div>

        <div className="control">
          <label htmlFor="name">Second-Name</label>
          <input type="text" required id="name" />
        </div>
        <div className="control">
          <label htmlFor="name">email</label>
          <input type="text" required id="name" />
        </div>

        <div className="control">
          <label htmlFor="name">Password</label>
          <input type="text" required id="name" />
        </div>

        <div className="control">
          <label htmlFor="name">Confirm-password</label>
          <input type="text" required id="name" />
        </div>

        <NavLink to={"/"} exact="true" className="btn-menu">
          Sign-Up &rarr;
        </NavLink>
      </div>
    </section>
  );
}

export default Register;
