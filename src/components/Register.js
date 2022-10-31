import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import classes from "../components/NewMealForm.module.css";

function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        return navigate("/allmeals")
      }
    });
  }
  return (
    <section>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className="reg">
        <h1>Create an Account</h1>
        <div className="control">
          <label htmlFor="name">Name</label>
          <input
          type="text"
          required
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>

      
        <div className="control">
          <label htmlFor="email">email</label>
          <input
          type="text"
          required
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        <div className="control">
          <label htmlFor="password">Password</label>
          <input
          type="password"
          required
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm-password</label>
          <input
          type="password"
          required
          id="confirm-password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        </div>

        <NavLink to={"/"} exact="true" className="btn-menu">
          Sign-Up &rarr;
        </NavLink>
      </div>
      </form>
    </section>
  );
}

export default Register;
