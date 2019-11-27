import React, { Component } from "react";
import style from "./recipe.module.css";
class Recipe extends Component {
  render() {
    return (
      <div className={style.recipe}>
        <h1>{this.props.title}</h1>
        <p>DietLabel: {this.props.dietLabels}</p>

        <p>Calories: {this.props.calories}</p>
        <img className={style.image} src={this.props.image} />
        <ol>
          {this.props.ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Recipe;
