import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components';
import MealCard from "./components/MealCard";
import "./Home.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: {}
    }
  }

  componentDidMount() {
    const Home = "";

    axios.get(Home)
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
      <AppContainer className="App">
      {data.length > 0 && <MealCard meals={data} />}
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
background: #fff;
padding: 2em;
`