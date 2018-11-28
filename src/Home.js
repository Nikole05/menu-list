import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components';
import MealCard from "./components/MealCard";
import "./Home.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: []
    }
  }

  componentDidMount() {

    

  }

  render() {
    var data = this.state.meal;
    return (
      <AppContainer className="App">
          <MealCard />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
background: #fff;
padding: 2em;
`
