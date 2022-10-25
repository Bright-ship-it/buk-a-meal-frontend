import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


import "../App.css";

function Login() {
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
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          user.admin === true ? navigate("/register") : navigate("/dashboard");
        });

        setEmail("");
        setPassword("");
        setIsShown((current) => !current);
      } else {
        alert("failed to log in");
      }
    });

    form.current.reset();
  };

  return (
    <div>
      <form className="login-form" ref={form} onSubmit={handleSubmit}>
        <h3>Login With Username and password</h3>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          Login
        </button>
      </form>
      <div>
        {isShown && (
          <div>
            <h2>You are now logged in!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
