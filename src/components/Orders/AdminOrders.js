import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Navbar from "../Navbar";

function AdminOrders() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://buk-a-meal.herokuapp.com/orders")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="table">
      <div className="orders-container">
        <h1>Orders Table</h1>
        <hr />
        <div className="header">
          <h1>OrderName</h1>
          <hr />
          <h1>Price</h1>
        </div>
        <hr />
        <div>
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

        {/* <div className="total">
              <h1>price</h1>
            </div> */}


        </div>
      </div>
    </div>
  );
}

export default AdminOrders;
