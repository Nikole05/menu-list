import React, { Component } from "react";
import axios from "axios";
import MealCard from "./components/MealCard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {}
    };
  }
  componentDidMount() {
    const URL = "https://www.themealdb.com/api/json/v1/1/latest.php";
    axios
      .get(URL)
      .then(res => {
        const meal = res.data.meals;
        if (typeof meal === "object") {
          this.setState({ meal });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    var data = this.state.meal;
    return (
      <div className="App">{data.length > 0 && <MealCard meals={data} />}</div>
    );
  }
}

export default App;
