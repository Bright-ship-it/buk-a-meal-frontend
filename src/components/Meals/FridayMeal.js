import React from 'react'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import '../Meals/meal.css'

function FridayMeal() {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/categories/5")
      .then((response) => response.json())
      .then((data) => setCards(data.meals));
  }, []);

  return (
    <div>
    <Navbar />
    {/* <div className="meals-board-one">
    <h1 className="board-one">Daily Menus: </h1>
    <Link to={`/meal/`}>
      <button className="board-one">Monday</button >
      </Link>
      <h1 className="board-one">Tuesday</h1>
      <h1 className="board-one">Wednesday</h1>
      <h1 className="board-one">Thursday</h1>
      <h1 className="board-one">Friday</h1>
      <h1 className="board-one">Saturday</h1>
      <h1 className="board-one">Sunday</h1>
    </div> */}

    <div className="meals-container-one">
      {cards.map((card) => (
        <div className="meals-dets-one" key={card.id}>
          <div className="meals-image-one">
            <img src={card.image_url} alt="article url" />
          </div>
          <div className="meals-det-one">
  
            <div className='meals-det-price-one'>Ksh{card.price}</div>
            <h2 className='meals-det-name-one'>
             <span>{card.name}</span>
            </h2>
            <div className='meals-det-desc-one'>{card.description} </div>
            <div className='btn-meals-one'>
            <Link to={`/meal/${card.id}`}>
              <button className="btn-view-one">View</button>
            </Link>

            <Link to={`/orders/${card.id}`}>
            <button className="btn-view-one btn-view2">Order Now</button>  
          </Link>
          </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}


export default FridayMeal;


