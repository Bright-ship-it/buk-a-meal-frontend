import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useNavigate,useParams } from "react-router-dom";
import '../Meals/allmeals.css'
import { Link } from "react-router-dom";
import '../Orders/order.css'


function Orders() {
  const [ name, setName] = useState([])
  const [ price, setPrice] = useState([])
    const params = useParams();

    const [meal, setMeals] = useState([]);

    function submitHandler(e) {
      e.preventDefault();
      const Meal = { name, price,};
  
      fetch("/orders", {
        method: "POST",
        headers: {
          'Content-Type':'application/json',
          'Application' : 'application/json'
        },
        body: JSON.stringify(Meal),
      
      }).then(() => {
        history("/meals");
        alert(" Meal was booked successfully")
      })
      .catch((error)=>console.log(error))
    }

  
  
    useEffect(() => {
      fetch(`/meals/${params.mealId}`)
        .then((response) => response.json())
        .then((data) => setMeals(data));
    }, );
    
  

  
    React.useEffect(() => {
      console.log("params", params);
    }, [params]);


    
  
    const history = useNavigate();
    // const handleSubmit = () =>{
    //   fetch
    // }
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
      <div className="top-order">

      <div className="left-order" key={meal.id}>
        <div className="left-order-main">
        <div className="meals-image-1-1">
          <img src={meal.image_url} alt="article url" />
        </div>
        <div className="meals-det-1-1">
          <h1 value={name}
            onChange={(e) => setName(e.target.value)}>
              {meal.name}             
          </h1>
          <h2 value={price}
            onChange={(e) => setPrice(e.target.value)}
          >Price Ksh{meal.price}</h2>
          {/* <h5>Desc: {meal.description}</h5> */}
          <h4>{meal.created_at}</h4>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            id="name"
            value={meal.name}
            onSelect={(e) => setName(e.target.value)}
          />
               <label htmlFor="name">Price</label>
          <input
            type="text"
            required
            id="name"
            value={meal.price}
            onSelect={(e) => setPrice(e.target.value)}

          />
        </div>
        </div>
        {/* <div>
          <h1> Meals for how many?</h1>
          <button>1</button> <br></br>
          <button>2</button> <br></br>
          <button>3</button> <br></br>
        </div> */}
        </div>
        <div className="right-order">

        <div className="btn">
{/*     
          <Link to={`/checkout`} > */}
            <h1>Total: {meal.price}</h1>
          <button className="btn-view" onClick={submitHandler} >Check-out </button> 
          {/* onClick={handleSubmit()}  */}
          {/* </Link >       */}
        </div>
        </div>
      
      </div>
    </div>
  );
}
export default Orders