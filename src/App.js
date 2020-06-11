import React from "react";

import { Recipe } from "./components/RecipeForm";
import "./App.css";

import { RecipesList } from "./components/RecipesList";
import { RecipeContextProvider } from "./contexts/RecipeContext";
//import { IngredientContextProvider } from "./contexts/IngredientContext";

function App() {
  return (
    <div className="background">
      {" "}
      <div className="container layer">
        <RecipeContextProvider>
          {/* <IngredientContextProvider> */}
          <Recipe />
          <div className="recipes"></div>
          <RecipesList />
          {/* </IngredientContextProvider> */}
        </RecipeContextProvider>
      </div>
    </div>
  );
}

export default App;
