import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import "./styles/RecipeDetails.styles.css";
import { v4 } from "uuid";
export const RecipeDetails = ({ recipe }) => {
  const { dispatch } = useContext(RecipeContext);
  return (
    <li className="recipe-details">
      <button
        className="recipe-close"
        onClick={() => dispatch({ type: "REMOVE_RECIPE", id: recipe.id })}
      >
        x
      </button>
      <div>
        <div className="recipe-title">{recipe.title}</div>

        {recipe.ingredient.map((el) => {
          console.log(el);
          return <div className="recipe-ingredient">{el}</div>;
        })}
        {/* {console.log(recipe.ingredient)} */}

        <div className="recipe-instructions">{recipe.instructions}</div>
      </div>
    </li>
  );
};
