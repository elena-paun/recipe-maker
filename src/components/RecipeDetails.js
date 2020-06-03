import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import "./styles/RecipeDetails.styles.css";
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
        <div className="recipe-ingredient">{recipe.ingredient}</div>
        <div className="recipe-instructions">{recipe.instructions}</div>
      </div>
    </li>
  );
};
