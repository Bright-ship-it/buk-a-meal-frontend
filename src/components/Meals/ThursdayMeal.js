import React from 'react'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import '../Meals/meal.css'

function ThursdayMeal() {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/categories/4")
      .then((response) => response.json())
      .then((data) => setCards(data.meals));
  }, []);

  return (
    <div>
    <Navbar />
    {/* <div className="meals-board-one">
    <h1 className="board-one">Daily Menus: </h1>
      <h1 className="board-one">Monday</h1>
      <h1 className="board-one">Tuesday</h1>
      <h1 className="board-one">Wednesday</h1>
      <h1 className="board-one">Thursday</h1>
      <h1 className="board-one">Friday</h1>
      <h1 className="board-one">Saturday</h1>
      <h1 className="board-one">Sunday</h1>
    </div> */}
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


export default ThursdayMeal;


