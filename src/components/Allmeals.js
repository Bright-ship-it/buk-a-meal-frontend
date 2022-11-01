import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link, NavLink, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Allmeals() {
  const params = useParams();
  const [meal, setMeals] = useState([]);
  const [pageNumber, setPageNumber] = useState(4);

  

  const mealsPerPage = 5;
  const pagesVisited = pageNumber * mealsPerPage;

  const pageCount = Math.ceil(meal.length / mealsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayMeals = meal
    .slice(pagesVisited, pagesVisited + mealsPerPage)
    .map((meals) => {
      return (
        <div>
          <div className="meals-container">
            {meal.map((meals) => (
              <div className="meals-dets" key={meals.id}>
                <div className="meals-image">
                  <img src={meals.image_url} alt="article url" />
                </div>
                <div className="meals-det">
                  <h2>
                    <span>{meals.name}</span>
                  </h2>
                  <h3>Ksh{meals.price}</h3>
                  <div className="btn-meals">
                    <Link to={`/allmealsdetails/${meals.id}`}>
                      <button className="btn-view">View</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    });

  useEffect(() => {
    fetch("/meals")
      .then((response) => response.json())
      .then((data) => setMeals(data));
  }, []);

  React.useEffect(() => {
    console.log("params", params);
  }, [params]);

  return (
    <div>
      {/* <div className="home-1"> */}
        <Navbar />
        <div className="navs">
          <NavLink to={"/"} exact="true" className="btn-view-2">
            View orders
          </NavLink>

          <NavLink to={"/newmealform"} exact="true" className="btn-view-2">
            Add Meals
          </NavLink>
        </div>
      {/* </div> */}
      {/* <div className="meals-board">
        <h1 className="board">Meals Board</h1>
      </div> */}
      {displayMeals}

      <ReactPaginate
        pageNumber = {pageNumber}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtns"}
        nextLinkClassName={"nextBtns"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Allmeals;
