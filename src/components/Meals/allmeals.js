import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useNavigate,useParams } from "react-router-dom";

import { Link } from "react-router-dom";


function MealDetails() {
    const params = useParams();

    const [meal, setMeals] = useState([]);

  
  
    useEffect(() => {
      fetch(`https://buk-a-meal.herokuapp.com/meals/${params.mealId}`)
        .then((response) => response.json())
        .then((data) => setMeals(data));
    }, );
    
  

  
    React.useEffect(() => {
      console.log("params", params);
    }, [params]);


    
  
    const history = useNavigate();
    const handleDelete = () => {
      fetch("/meals/" +meal.id, {
        method: "DELETE",
      }).then(() => {
        history("/allmeals");
      });
    };
  
    return (
      <div>
      <Navbar />
      <div className="meals-con">

      <div className="meals-dets-1" key={meal.id}>
        <div className="meals-image-1">
          <img src={meal.image_url} alt="article url" />
        </div>
        <div className="meals-det-1">
          <h2>{meal.name}</h2>
          <h1><span>ingredient</span> <br/>{meal.ingredients}</h1>
          <h5>Price Ksh:{meal.price}</h5>
          <h1><span>Desc</span> <br/>{meal.description}</h1>
     
        </div>

        <div className="btn">
        <Link to={`/meals`} >
          <button className="btn-view" >Book This Meal</button> 
          </Link>
          <Link to={`/meals`} >
          <button className="btn-view" >Check-out </button> 
          </Link >      
        </div>
      </div>
      </div>
    </div>
  );
}
export default MealDetails