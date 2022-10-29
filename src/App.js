
import './App.css';

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

function App() {
  return (
    <div>

    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/admin" element={<Admin /> } />
        <Route path="/allmeals/" element={<Allmeals /> } />
        <Route path="/newmealform/" element={<NewMealForm /> } />
        <Route path="/allmealsdetails/:mealId" element={<Allmealsdetails /> } />
        <Route path="/meals" element={<Meal /> } />
        <Route path="/meal/:mealId" element={<MealDetails /> } />

      
        
    </Routes>
</Router>
    </div>

   
  );
}

export default App;
