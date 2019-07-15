import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from './../../store.js';
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      recipeList: reduxState.recipeList
    };
  }

  render() {
    const recipeList = this.state.recipeList.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          recipeName={recipe.recipeName}
          recipeCategory={recipe.recipeCategory}
          authorFirstName={recipe.authorFirstName}
          authorLastName={recipe.authorLastName}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipeList}</div>
      </div>
    );
  }
}

export default Home;
