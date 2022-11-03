
import './App.css';
import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Allmeals from './components/Allmeals';
import Allmealsdetails from './components/Allmealsdetails';
import NewMealForm from './components/NewMealForm';
import Meal from './components/Meals/meal'
import MealDetails from './components/Meals/allmeals';
import MainMenu from './components/MainMenu';
import MondayMeal from './components/Meals/MondayMeal';
import TuesdayMeal from './components/Meals/TuesdayMeal';
import WednesdayMeal from './components/Meals/WednesdayMeal';
import ThursdayMeal from './components/Meals/ThursdayMeal';
import FridayMeal from './components/Meals/FridayMeal';
import SaturdayMeal from './components/Meals/SaturdayMeal';
import SundayMeal from './components/Meals/SundayMeal';
import Profile from "./components/Profile";
import Orders from './components/Orders/Orders';
import AdminOrders from './components/Orders/AdminOrders'

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>

    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login user={user} setUser={setUser}/> } />
        <Route path="/register" element={<Register user={user} setUser={setUser}/> } />
        <Route path="/admin" element={<Admin /> } />
        <Route path="/allmeals/" element={<Allmeals /> } />
        <Route path="/newmealform/" element={<NewMealForm /> } />
        <Route path="/allmealsdetails/:mealId" element={<Allmealsdetails /> } />
        <Route path="/meals" element={<Meal /> } />
        <Route path="/meal/:mealId" element={<MealDetails /> } />
        <Route path="/dashboard" element={<MainMenu /> } />
        <Route path="/mondaymenu" element={<MondayMeal /> } />
        <Route path="/tuesdaymenu" element={<TuesdayMeal /> } />
        <Route path="/wednesdaymenu" element={<WednesdayMeal /> } />
        <Route path="/thursdaymenu" element={<ThursdayMeal /> } />
        <Route path="/fridaymenu" element={<FridayMeal /> } />
        <Route path="/saturdaymenu" element={<SaturdayMeal /> } />
        <Route path="/sundaymenu" element={<SundayMeal /> } />
        <Route exact path="/account" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/orders/:mealId" element={<Orders user={user} setUser={setUser} />} />
        <Route path="/admin-orders" element={<AdminOrders /> } />
        

      
        
    </Routes>
</Router>
    </div>

   
  );
}

export default App;
