import { v4 } from "uuid";

export const recipeReducer = (state, action) => {
  switch (action.type) {
    // case "INCREMENT":
    //   return [
    //     ...state,
    //     {
    //       input: state.ingredient + 1,
    //       id: v4(),
    //       value: Math.random() * 100,
    //     },
    //   ];
    case "ADD_RECIPE":
      return [
        ...state,
        {
          title: action.recipe.title,
          ingredient: action.recipe.ingredient,
          instructions: action.recipe.instructions,
          id: v4(),
        },
      ];
    case "REMOVE_RECIPE":
      return state.filter((recipe) => recipe.id !== action.id);

    default:
      return state;
  }
};
