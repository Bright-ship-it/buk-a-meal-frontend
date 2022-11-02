import React from 'react'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import '../Meals/meal.css'

function Meals() {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/meals")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
    <Navbar />
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


export default Meals


