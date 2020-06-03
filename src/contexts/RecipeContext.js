import React, { createContext, useReducer, useEffect } from "react";
import { recipeReducer } from "../reducers/recipeReducer";

//const initialState = { recipes: [] };
export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const [recipes, dispatch] = useReducer(recipeReducer, []);

  return (
    <RecipeContext.Provider value={{ recipes, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};
