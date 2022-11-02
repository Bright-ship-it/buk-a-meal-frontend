import { Link, useNavigate } from "react-router-dom";
import pic3 from "../components/img/Avatar.png";

function Profile({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }

  return (
    <div>
        <div className="">
            <div className="">
                <img className="" src={pic3} alt="" />
                <div className="">
                    <p className="">{user ? (`${user.name}`) : null }</p>
                    <p className="">{user ? (user.email) : null }</p>
                    <p className="">{user ? (user.password) : null }</p>
                    { user ?
                    <button className="btn-view-1" onClick={handleLogoutClick}>Logout</button> 
                    : <Link to={"/login"} className="btn-view-1">Sign In</Link>}
                </div>
            </div>
        </div>
    
    </div>
  );
}

export default Profile;