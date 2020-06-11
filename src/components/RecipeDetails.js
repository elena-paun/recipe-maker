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
        &#10005;
      </button>
      <div>
        <div className="recipe-title">{recipe.title}</div>
        <p className="ingredients-title">
          {" "}
          Ingredients <br />
        </p>
        <ul>
          {recipe.ingredient.map((el, i) => {
            console.log(el);
            return (
              <li key={i} className="recipe-ingredient">
                {el}
              </li>
            );
          })}
        </ul>

        {/* {console.log(recipe.ingredient)} */}
        <p className="instructions-title">Instructions</p>
        <div className="recipe-instructions">{recipe.instructions}</div>
      </div>
    </li>
  );
};
