import React, { useState } from "react";
import Card from "../components/ui/Card"
import classes from "../components/NewMealForm.module.css";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function NewMealForm() {
  const [name, setName] = useState("");
  const [image_url, setImage_url] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category_id, setCategoryID] = useState("");
  const [description, setDescription] = useState("");

  const history = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const Meal = { name, image_url, price, description,ingredients,category_id };

    fetch("/meals", {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Application' : 'application/json'
      },
      body: JSON.stringify(Meal),
    
    }).then(() => {
      history("/allmeals");
      alert(" Meal was created  successfully")
    })
    .catch((error)=>console.log(error))
  }

  return (
    <div className="back">
    <Navbar />
    <Card>
    <div className="heading-post">
    <h4>Post A Meals</h4>
    </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meals-Image</label>
          <input
            type="url"
            required
            id="image"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">price</label>
          <input
            required
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="ingredients">ingredients</label>
          <input
            type="text"
            required
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div className={classes.control}>
        <label htmlFor="day">Day: </label>
        <input
          type="text"
          required
          id="day"
          value={category_id}
          onChange={(e) => setCategoryID(e.target.value)}
        />
      </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        
        <div className={classes.actions}>
          <button>Add Meal</button>
        </div>
      </form>
    </Card>
    </div>
  );
}

export default NewMealForm;
