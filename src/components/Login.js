import { useState, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import meat from "../components/img/logo.jpg";

import "../App.css";

function Login({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(false);


  const navigate = useNavigate();
  const form = useRef(null);
  const handleClick = () => {
    setIsShown((current) => !current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      console.log("empty state");
      return;
    }

    console.log(
      JSON.stringify({
        email,
        password,
      })
    );

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),

    //   .then((r) => {
    //     if (r.ok) {
    //       r.json().then((user) => {setUser(user)});
    //       navigate("/");
    //     } else {
    //       r.json().then((err) => setErrors(err.errors));
    //     }
    //   });
    // }
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
          user.admin === true ? navigate("/admin") : navigate("/mondaymenu");
        });

        setEmail("");
        setPassword("");
        setIsShown((current) => !current);
      } else {
        alert("Failed to Log in");
      }
    });

    form.current.reset();
  };

  return (
    <div className="login">
      <div className="login-left">
        <img src={meat} alt="meet" />
      </div>
      <div className="login-right">
        <h1>Tasty</h1>
        <p>welcome To Tasty</p>

        <div className="login-label">
          <form className="login-label" ref={form} onSubmit={handleSubmit}>
            <div className="login-label">
              <label className="label-1" htmlFor="email">
                Email:{" "}
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-label">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn-right">
              <button type="submit" onClick={handleClick} className="btn-menu">
                Login
              </button>
              <div className="link">
                <NavLink to={"/register"} exact="true" className="">
                  Dont have an Account? <span>click here!!</span>
                </NavLink>
              </div>
            </div>
          </form>

          <div>
            {isShown && (
              <div>
                <h2>You are now logged in!</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
