// import React,{use} from 'react'
// import Allmeals from './Allmeals';
import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Admin() {
  const params = useParams();
  const [meal, setMeals] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://buk-a-meal.herokuapp.com/meals")
      .then((response) => response.json())
      .then((data) => setMeals(data));
  }, []);

  React.useEffect(() => {
    console.log("params", params);
  }, [params]);

  function handleDestroySession(e) {
    e.preventDefault();
    fetch("/logout", {
      method: "DELETE"
    })
    .then((r) => {
      if (r.ok) {
        navigate("/")
      
 

      }
      else{
        alert()

      }
    });
    

  }

  return (
    <div>
      <Navbar />
      
      <div className="home-1">
        
        <div className="navs">
          <br></br>
        <NavLink to={"/admin-orders"} exact="true" className="btn-view-2">
          View orders
        </NavLink>

        <NavLink to={"/newmealform"} exact="true" className="btn-view-2">
        Add Meal
      </NavLink>


      </div>
      
      </div>
      
      {/* <div className="meals-board">
        <h1 className="board">Meals Board</h1>
      </div> */}

      <div className="meals-container">
        {meal.map((meals) => (
          <div className="meals-dets" key={meals.id}>
            <div className="meals-image">
              <img src={meals.image_url} alt="article url" />
            </div>
            <div className="meals-det">
              <h2>
                <span>{meals.name}</span>
              </h2>
              <h3>Ksh{meals.price}</h3>
              <div className="btn-meals">
                <Link to={`/allmealsdetails/${meals.id}`}>
                  <button className="btn-view">View</button>
                </Link>

              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  
  
  
}

export default Admin