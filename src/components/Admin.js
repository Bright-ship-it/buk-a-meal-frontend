import React from 'react'
import { NavLink } from "react-router-dom";

function Admin() {
  return (
    <div>
    <NavLink to={"/allmeals"} exact="true" className="btn-view-1">
    view All Menus
  </NavLink>
    </div>
  )
}

export default Admin