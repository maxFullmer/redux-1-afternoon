import {createStore} from 'redux';

const initialState = {
    recipeName: "",
    recipeCategory: "",
    authorFirstName: "",
    authorLastName: "",
    ingredients: [],
    instructions: [],
    recipeList: []
};

//action types
export const UPDATE_RECIPE_NAME = "UPDATE_RECIPE_NAME";
export const UPDATE_RECIPE_CATEGORY = "UPDATE_RECIPE_CATEGORY";
export const UPDATE_AUTHOR_FIRST_NAME = "UPDATE_AUTHOR_FIRST_NAME";
export const UPDATE_AUTHOR_LAST_NAME = "UPDATE_AUTHOR_LAST_NAME";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const UPDATE_RECIPE_LIST = "UPDATE_RECIPE_LIST";


//reducer
function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_RECIPE_NAME:
            //copies old state, updates a property of new copy with the payload of the action (the end result of an action that will take place)
            return {...state, recipeName: payload}
        case UPDATE_RECIPE_CATEGORY:
            return {...state, recipeCategory: payload}
        case UPDATE_AUTHOR_FIRST_NAME:
            return {...state, authorFirstName: payload}
        case UPDATE_AUTHOR_LAST_NAME:
            return {...state, authorLastName: payload}
        case UPDATE_INGREDIENTS:
            const newIngredients = [...state.ingredients, payload];
            return {...state, ingredients: newIngredients}
        case UPDATE_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload];
            return {...state, instructions: newInstructions}
        case UPDATE_RECIPE_LIST:
            const {
                recipeName,
                recipeCategory,
                authorFirstName,
                authorLastName,
                ingredients,
                instructions
            } = state;
            
            const recipe = {
                recipeName,
                recipeCategory,
                authorFirstName,
                authorLastName,
                ingredients,
                instructions
            }
            const newRecipeList = [...state.recipeList, recipe];
            return {...state, recipeList: newRecipeList}
        default:
            return state;
    }
}

export default createStore(reducer);