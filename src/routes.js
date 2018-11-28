
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MealCard from "./components/MealCard";

const Index = () => <h2>Home</h2>;
const Image = () => <h2>Image</h2>;
const MealCard = () => <h2>MealCard</h2>;
const Title = () => <h2>Title</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/image/">Image</Link>
          </li>
          <li>
            <Link to="/mealcard/">MealCard</Link>
          </li>
          <li>
            <Link to="/title/">Title</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/image/" component={Image} />
      <Route path="/mealcard/" component={MealCard} />
      <Route path="/title/" component={Title} />
    </div>
    </Router>
);

export default AppRouter;
