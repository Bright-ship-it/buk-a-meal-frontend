import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";



function Allmealsdetails() {
    const params = useParams();

    const [meal, setMeal] = useState([]);
  
    useEffect(() => {
      fetch(`/meals/${params.mealId}`)
        .then((response) => response.json())
        .then((data) => setMeal(data));
    }, );
    
  

  
    React.useEffect(() => {
      console.log("params", params);
    }, [params]);
  
    const history = useNavigate();
    const handleDelete = () => {
      fetch("http://localhost:3000/meals" + meal.id, {
        method: "DELETE",
      }).then(() => {
        history("/");
      });
    };
  
    return (
      <div>
        <Navbar />
        <div className="meals-container">
  
        <div className="meals-dets-1" key={meal.id}>
          <div className="meals-image-1">
            <img src={meal.image_url} alt="article url" />
          </div>
          <div className="meals-det-1">
            <h2>Title:{meal.title}</h2>
            <h4>{meal.created_at}</h4>
            <h3>Author:{meal.author}</h3>
            <h3>contact:{meal.contact}</h3>
            <h4>{meal.description}</h4>
          </div>
  
          <div className="btn">
            <button className="btn-view" onClick={handleDelete}>Delete</button>
        
          
          </div>
        </div>
        </div>
      </div>
    );
  }

export default Allmealsdetails