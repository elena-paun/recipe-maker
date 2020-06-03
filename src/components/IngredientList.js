import React, { useContext, useState } from "react";

import { IngredientContext } from "../contexts/IngredientContext";
import { Ingredient } from "./Ingredient";

export const IngredientList = ({ children }) => {
  // const [count, setCount] = useState(0);
  const { dispatch } = useContext(IngredientContext);
  const { ingredient } = useContext(IngredientContext);
  const handleClick = (e) => {
    e.preventDefault();

    dispatch({ type: "INCREMENT" });
  };
  return (
    <div>
      <p className="add-ingredient">Add Ingredient</p>

      <button className="add" onClick={handleClick}>
        +
      </button>
      <ul className="ingredientlist">
        <p className="input"></p>

        {ingredient.map((ingredient) => {
          return <Ingredient ingredient={ingredient} key={ingredient.id} />;
        })}
      </ul>
    </div>
  );
};
