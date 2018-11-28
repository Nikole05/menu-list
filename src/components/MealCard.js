import React, { Component } from "react";
import styled from "styled-components";

export default class MealCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      black: true
    };
  }

  render() {
    console.log("PROPS=>", this.props);
    return (
      <div>
        <h3>St. Nicolas dinner:</h3>
        <div class="container">
          <div class="row">
            <div class="col col-sm-6 col-md-4">
              <h4>Drinks</h4>
              <ul>
                <li>fanta</li>
                <li>suc portocale</li>
                <li>vin</li>
                <li>bere</li>
              </ul>
              <input class="btn btn-primary" type="reset" value="Change" />
            </div>
            <div class="col col-sm-6 col-md-4">
              <h4>Desert</h4>
              <ul>
                <li>turta dulce</li>
                <li>bomboane lichior</li>
                <li>cremsnit</li>
                <li>jeleuri</li>
              </ul>
              <input class="btn btn-primary" type="reset" value="Change" />
            </div>
            <div class="col col-sm-6 col-md-4">
              <h4>Solid food</h4>
              <ul>
                <li>carnati</li>
                <li>chiftele</li>
                <li>piure</li>
                <li>cartofi prajiti</li>
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
