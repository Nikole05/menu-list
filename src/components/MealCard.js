import React, { Component } from "react";
import styled from 'styled-components';
import Title from "./Title";
import Image from "./Image";

export default class MealCard extends Component {
  render() {
    let btn_class = this.state.black ? "blackButton" : "whiteButton";
      console.log("PROPS=>", this.props);
    return (
      
      <div>
        {this.props.meals.map((item, index) => {
          return (
            <Card 
            key={index} 
            href={item.strSource}>
              <Image source={item.strMealThumb} text={item.strMeal} />
              <Title title={item.strMeal} />
            </Card>
          )
        })}
      
      <div className="meals">
      
      <body>
      <h3>St. Nicolas dinner:</h3>
      <h4>Drinks</h4>
      <ul>
        <li>fanta</li>
        <li>suc portocale</li>
        <li>vin</li>
        <li>bere</li>
      </ul>
      <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
      <h4>Desert</h4>
      <ul>
        <li>turta dulce</li>
        <li>bomboane lichior</li>
        <li>cremsnit</li>
        <li>jeleuri</li>
      </ul>
      <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
      <h4>Solid food</h4>
      <ul>
        <li>carnati</li>
        <li>chiftele</li>
        <li>piure</li>
        <li>cartofi prajiti</li>
      </ul>
      <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
      <h3>Christmos dinner:</h3>
      <h4>Drinks</h4>
      <ul>
        <li>coca-cola</li>
        <li>vin</li>
        <li>bere</li>
      </ul>
      <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
      <h4>Desert</h4>
      <ul>
        <li>negrese</li>
        <li>placinta</li>
        <li>cozonac</li>
      </ul>
      <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
      <h4>Solid food</h4>
      <ul>
        <li>toba</li>
        <li>sunca</li>
        <li>carnati</li>
        <li>sarmale</li>
        <li>pui la cuptor</li>
      </ul>
      <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
      <h3>The new year dinner:</h3>
      <h4>Drinks</h4>
      <ul>
        <li>pepsi</li>
        <li>sampanie</li>
        <li>vin</li>
      </ul>
      <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
      <h4>Desert</h4>
      <ul>
      <li>prajituri/biscuiti</li>
        <li>gogosi</li>
        <li>inghetata</li>
        
      </ul>
      <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
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
      <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
      </body>
      </div>
      </div>
    )
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
box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
`;