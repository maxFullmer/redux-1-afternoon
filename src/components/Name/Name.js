import React, { Component } from "react";
import store, {UPDATE_RECIPE_NAME, UPDATE_RECIPE_CATEGORY} from './../../store.js';
import { Link } from "react-router-dom";
import "./Name.css";

class Name extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      recipeName: reduxState.recipeName,
      recipeCategory: reduxState.recipeCategory,
    };

  }

  handleNameChange(nameVal) {
    this.setState({
      recipeName: nameVal
    });
  }

  handleCategoryChange(catVal) {
    this.setState({
      recipeCategory: catVal
    });
  }
  saveChanges() {
    // Send data to Redux state
    store.dispatch({
      type: UPDATE_RECIPE_NAME,
      payload: this.state.recipeName
    })
    store.dispatch({
      type: UPDATE_RECIPE_CATEGORY,
      payload: this.state.recipeCategory
    })
  }
  render() {
    return (
      <div className="Name forms">
        <div className="input_container">
          <h2>Recipe Name:</h2>
          <input
            value={this.state.name}
            onChange={e => this.handleNameChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Category:</h2>
          <select
            value={this.state.category}
            onChange={e => this.handleCategoryChange(e.target.value)}
          >
            <option value={""}>----</option>
            <option value={"Breakfast"}>Breakfast</option>
            <option value={"Second Breakfast"}>Second Breakfast</option>
            <option value={"Brunch"}>Brunch</option>
            <option value={"Lunch"}>Lunch</option>
            <option value={"Dinner"}>Dinner</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Dessert"}>Dessert</option>
          </select>
        </div>
        <Link to="/add/author">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Name;
