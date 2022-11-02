import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useNavigate,useParams } from "react-router-dom";

import { Link } from "react-router-dom";


function MealDetails() {
    const params = useParams();

    const [meal, setMeals] = useState([]);

  
  
    useEffect(() => {
      fetch(`/meals/${params.mealId}`)
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
          <h1>{meal.name}</h1>
          <h2>ingredient: {meal.ingredients}</h2>
          <h3>Price Ksh{meal.price}</h3>
          <h5>Desc: {meal.description}</h5>
          <h4>{meal.created_at}</h4>
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