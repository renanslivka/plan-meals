const { MEALS } = require("../../data/dummy-data");
import MealsActionTypes from "./meals.types";

const INITIAL_STATE = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};
const mealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MealsActionTypes.TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload
      );
      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favoriteMeals];
        updateFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updateFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.payload);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
      break;
    case MealsActionTypes.SET_FILTERS:
      const appliedFilters = action.payload;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.gluteinFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarion) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
