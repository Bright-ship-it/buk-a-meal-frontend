import React from 'react'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import Navbar from "../Navbar";

function AdminOrders() {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/orders")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>

   

    <div className="orders-container">
    {cards.map((card) => (
      <div className="order-details" key={card.id}>
          <div> 
             <h1>{card.name}</h1> 
              </div>
              <div> 
             <h1>{card.price}</h1> 
              </div>

          </div>
      

          
  
    ))}
  </div>
  </div>
);
}


export default AdminOrders;