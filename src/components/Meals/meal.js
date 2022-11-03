import React from 'react'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function Meals() {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://buk-a-meal.herokuapp.com/meals")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
    <Navbar />


    <div className="meals-container">
      {cards.map((card) => (
        <div className="meals-dets" key={card.id}>
          <div className="meals-image">
            <img src={card.image_url} alt="article url" />
          </div>
          <div className="meals-det">
  
            <div>Ksh{card.price}</div>
           
             <span>{card.name}</span>
          
          
            <div className='btn-meals'>
            <Link to={`/meal/${card.id}`}>
              <button className="btn-view">View</button>
            </Link>

            <Link to={`/orders/${card.id}`}>
            <button className="btn-view">Order Now</button>  
          </Link>
  
          </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}


export default Meals






