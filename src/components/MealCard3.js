import React, { Component } from "react";
import styled from "styled-components";

export default class MealCard3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      black: true
    };
  }

  render() {
    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    console.log("PROPS=>", this.props);
    return (
      <div>
        <h3>The new year dinner:</h3>
        <div class="container">
          <div class="row">
            <div class="col col-sm-6 col-md-4">
              <h4>Drinks</h4>
              <ul>
                <li>pepsi</li>
                <li>sampanie</li>
                <li>vin</li>
              </ul>
              <input class="btn btn-primary" type="reset" value="Change" />
            </div>
            <div class="col col-sm-6 col-md-4">
              <h4>Desert</h4>
              <ul>
                <li>prajituri/biscuiti</li>
                <li>gogosi</li>
                <li>inghetata</li>
              </ul>
              <input class="btn btn-primary" type="reset" value="Change" />
            </div>
            <div class="col col-sm-6 col-md-4">
              <h4>Solid food</h4>
              <ul>
                <li>piftie</li>
                <li>salata beof</li>
                <li>toba</li>
                <li>friptura cratita</li>
                <li>carnati</li>
                <li>musaca</li>
                <li>legume la cuptor</li>
              </ul>
              <input class="btn btn-primary" type="reset" value="Change" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Card = styled.a`
  max-width: 350px;
  width: 100%;
  display: inline-block;
  border-radius: 3px;
  text-decoration: none;
  color: #000;
  margin: 0 10px 15px;
  box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, 0.5);
`;
