import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()

  const [name, setname] = useState("");
  const [user_name, setusername] = useState("");
  const [user, setUser] = useState("")

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    fetch("https://buk-a-meal.herokuapp.com/users", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        username: user_name,
        email: email,
        password: password,
      }
      ),

    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
         navigate("/login")
         setname("");
         setemail("");
         setusername("")
         setpassword("");
         e.target.reset("");

      }
      else{
        alert()

      }
    });
    

  }
  return (
    <form onSubmit={handlesubmit}>
      <div className="reg">
        <h1>Create an Account</h1>
        <div className="control">
          <label htmlFor="name">Name</label>
            <input
                className="loginInput"
                placeholder="Enter your name"
                type="text"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                required
              />{" "}
        </div>

      
        <div className="control">
          <label htmlFor="name">User Name</label>
          {/* <input type="text" required id="name" /> */}
          <input
                className="loginInput"
                placeholder="Enter your User Name"
                type="text"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                required
              />{" "}
        </div>
        <div className="control">
          <label htmlFor="name">Email:</label>
          {/* <input type="text" required id="name" /> */}
          <input
                className="loginInput"
                placeholder="Enter your email"
                type="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />{" "}
        </div>

        <div className="control">
          <label htmlFor="name">Password</label>
          {/* <input type="text" required id="name" /> */}
          <input
                className="loginInput"
                placeholder="Enter your password"
                type="text"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                required
              />{" "}
        </div>

        {/* <div className="control">
          <label htmlFor="name">Confirm-password</label>
          <input type="text" required id="name" />
        </div> */}

        {/* <NavLink to={"/"} exact="true" className="btn-menu">
          Sign-Up &rarr;
        </NavLink> */}
         <input
                className="btn-menu"
                type="submit"
                value="Submit"
              />
      </div>
      
    </form>
  );
}

export default Register;
