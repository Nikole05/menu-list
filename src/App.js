import React, { Component } from "react";
import axios from "axios";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: ""
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
    return <div className="App" />;
  }
}

export default App;
