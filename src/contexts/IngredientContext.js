import React, { createContext, useReducer, useEffect } from "react";
import { ingredientReducer } from "../reducers/ingredientReducer";

const initialState = [];

export const IngredientContext = createContext();

export const IngredientContextProvider = ({ children }) => {
  const [ingredient, dispatch] = useReducer(ingredientReducer, initialState);
  return (
    <IngredientContext.Provider value={{ ingredient, dispatch }}>
      {children}
    </IngredientContext.Provider>
  );
};
