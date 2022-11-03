import { Link, useNavigate } from "react-router-dom";
import pic3 from "../components/img/Avatar.png";
import Navbar from './Navbar'

function Profile({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogoutClick(e) {
    e.preventDefault();
    fetch("https://buk-a-meal.herokuapp.com/logout", 
    { method: "DELETE" }
    ).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }else {
        alert("This session has not been stored!");
      }
    });
  }

  return (
    <div>
      <Navbar />
        <div className="profile">
            <div className="profile-image">
                <img className="" src={pic3} alt="" />
                <div className="profile-dets">
                    <p className="">{user ? (`${user.name}`) : null }</p>
                    <p className="">{user ? (user.email) : null }</p>
                    <p className="">{user ? (user.password) : null }</p>
                    { user ?
                    <button className="btn-view" onClick={handleLogoutClick}>Logout</button> 
                    : <Link to={"/login"} className="btn-view">Sign In</Link>}
                </div>
            </div>
        </div>
    
    </div>
  );
}

export default Profile;