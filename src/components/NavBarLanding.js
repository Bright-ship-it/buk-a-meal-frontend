import React from "react";
import { NavLink, Link} from "react-router-dom";
import '../App.css';

function Navbar({user}) {
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
       
        <Link to={"/account"} className="btn-text" >
          <h3 className="">{user ? (`${user.first_name}`) : "Account"}</h3>
        </Link>

        <NavLink to={"/"} exact="true" className="btn-text">
          Cart
        </NavLink>
        
      </ul>
      
      </div>
      
    </nav>
   

    </div> 
  );
}

export default Navbar;
