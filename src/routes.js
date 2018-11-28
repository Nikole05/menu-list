import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import MealCard from "./components/MealCard";
import MealCard2 from "./components/MealCard2";
import MealCard3 from "./components/MealCard3";


const title = () => <h2>Holliday's menus!</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={title} />
      <Route path="/mealcard-1" exact component={MealCard} />
      <Route path="/mealcard-2" exact component={MealCard2} />
      <Route path="/mealcard-3" exact component={MealCard3} />
      <div class="container">
        <div class="row">
            <div class="col col-sm-6 col-md-4">
              <Link to="/mealcard-1/">
                St. Nicolas day!
                <img src="/imag/mesaje-mos-nicolae.jpg" alt="sf.nicolae" />
              </Link>
            </div>
            <div class="col col-sm-6 col-md-4">
              <Link to="/mealcard-2/">
                Christmos day!
                <img src="/imag/Craciunul.jpg" alt="craciun" />
              </Link>
            </div>
            <div class="col col-sm-6 col-md-4">
              <Link to="/mealcard-3/">
                The new year!
                <img src="/imag/new year.jpg" alt="new year" />
              </Link>
            </div>
        </div>
      </div>
    </div>
  </Router>
);

export default AppRouter;
