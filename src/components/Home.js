import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import food from "../components/img/foof.jpg";
import rice from "../components/img/Beef-fries.jpg";
import beef from "../components/img/rice.jpg";
import person1 from "../components/img/person1.jpeg";
import person2 from "../components/img/person2.jpeg";
import chips from "../components/img/chips.jpeg";
import eggs from "../components/img/eggs.jpeg";
import meat from "../components/img/meat.jpg";


import "../App.css";
function Home() {
  return (
    <div className="home">
      <div className="home-1">
        <Navbar />
        <NavLink to={"/login"} exact="true" className="btn-view-1">
          Login
        </NavLink>
      </div>

      <div className="info">
        <div className="sect-1">
          <h1>Delicious Food For Your cravings</h1>
          <p>We Cook Fresh And Healthy Foods With Different Recipes</p>
          <NavLink to={"/"} exact="true" className="btn-menu">
            View-Menu &rarr;
          </NavLink>
        </div>

        <div className="sect-2">
          <div class="composition">
            <img
              src={food}
              alt="food-1"
              class="composition__photo composition__photo--p1"
            />
            <img
              src={rice}
              alt="food-2"
              class="composition__photo composition__photo--p2"
            />
            <img
              src={beef}
              alt="food-3"
              class="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>

      <section className="about-us">
     
      <div className="about">
      
        <div className="about-image">
          <img src={meat} alt="beef" />
        </div>
        <div className="about-info">
          <h1>History</h1>
          <h3>Strange Stories of Emergence of Healthy Foods</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illo
            quo, eligendi iusto incidunt perspiciatis repudiandae doloremque
           
          </p>
          <NavLink to={"/"} exact="true" className="btn-text">
          Read-More
        </NavLink>
         
        </div>

        <div className="about-image">
        <img src={eggs} alt="beef" />
      </div>


    
    <div className="about-info">
      <h1>Community</h1>
      <h3>Healthy food in social networks, with us is interesting</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illo
        quo, eligendi iusto incidunt perspiciatis repudiandae doloremque
       
      </p>
      <NavLink to={"/"} exact="true" className="btn-text">
      Read-More
    </NavLink>
    </div>

    <div className="about-image">
    <img src={chips} alt="beef" />
  </div>

     <div className="about-info">
      <h1>Phillosophy</h1>
      <h3>Only the Best Food,the best musicians the best guests</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illo
        quo, eligendi iusto incidunt perspiciatis repudiandae doloremque
       
      </p>
      <NavLink to={"/"} exact="true" className="btn-text">
      Read-More
    </NavLink>
    </div>
      </div>
      
      
      </section>

      

      <section className="section-stories">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">We make people Genuinely happy</h2>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={person2} alt="tour" className="story__img" />
              <ficaption className="story__caption">Carol Gacheri</ficaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                I enjoyed my Beef-rice
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                aspernatur est rerum? Eveniet aut minus a corporis voluptatem
                est, accusamus saepe quaerat mollitia repellendus, perferendis,
                perspiciatis sit repellat. Laborum, aperiam?
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={person1} alt="tour" className="story__img" />
              <ficaption className="story__caption">Alex Kim</ficaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                The Food was So Delicious
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                aspernatur est rerum? Eveniet aut minus a corporis voluptatem
                est, accusamus saepe quaerat mollitia repellendus, perferendis,
                perspiciatis sit repellat. Laborum, aperiam?
              </p>
            </div>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="/" className="btn-text">
            Read all stories &rarr;
          </a>
        </div>
      </section>

      <section className="footer">
        <div className="sect-footer">
          <div className="right">
            <h1>Tasty</h1>
     
          </div>

          <div className="links">
            <ul>
              <h2>Links</h2>
              <li>Home</li>
              <li>About-Us</li>
              <li>Contact-Us</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="contact">
            <h1>Contact</h1>
            <p>123 Street, Nairobi, Kenya</p>
            <p>+25471234566</p>
            <p>Tasty@gmail.com</p>
          </div>

          <div className="opening">
            <h1>Opening-Hours</h1>
            <p>Monday - Saturday</p>
            <p>09AM - 09PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
