import MealsActionTypes from "./meals.types";

export const toggleFavorite = (id) => {
  return { type: MealsActionTypes.TOGGLE_FAVORITE, payload: id };
};

export const setFilters = (filterSettings) => {
  return { type: MealsActionTypes.SET_FILTERS, payload: filterSettings };
};
