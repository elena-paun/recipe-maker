import { v4 } from "uuid";

export const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return [...state, { ingredient: state.ingredient + 1, id: v4() }];
    case "DECREMENT":
      return state.filter((ingredient) => ingredient.id !== action.id);
    default:
      return state;
  }
};
