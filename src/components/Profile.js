import { Link, useNavigate } from "react-router-dom";
import pic3 from "../components/img/Avatar.png";

function Profile({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/login");
      }
    });
  }

  return (
    <div>
        <div className="w-full flex justify-center mb-10">
            <div className="w-[70%] bg-slate-200 h-[450px] rounded-lg flex flex-col items-center">
                <img className="w-[160px] rounded-full my-6" src={pic3} alt="" />
                <div className="flex flex-col justify-center items-center">
                    <p className="mb-2 text-2xl font-bold">{user ? (`${user.first_name} ${user.last_name}`) : null }</p>
                    <p className="mb-2">{user ? (user.email) : null }</p>
                    <p className="mb-4">{user ? (user.phone_number) : null }</p>
                    { user ?
                    <button className="mt-12 px-6 py-3 border-2 border-[red] bg-[white] rounded-md text-[black]" onClick={handleLogoutClick}>Logout</button> 
                    : <Link to={"/login"} className="mt-12 px-6 py-3 border-2 border-black bg-[white] rounded-md text-[black]">Sign In</Link>}
                </div>
            </div>
        </div>
    
    </div>
  );
}

export default Profile;