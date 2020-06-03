import React, { useContext, useState } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { IngredientList } from "./IngredientList";

export const Recipe = () => {
  const { dispatch } = useContext(RecipeContext);

  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_RECIPE",
      recipe: { title, ingredient, instructions },
    });
    setTitle("");
    setIngredient("");
    setInstructions("");
  };

  return (
    <form>
      <h2>Recipe Book</h2>
      <br />
      <div className="title">
        <label htmlFor="title">Name your new recipe</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
        />
      </div>
      <br />
      <IngredientList />
      <br />
      <div className="instructions">
        <p>Instructions</p>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Save Recipe"
          className="save"
        />
      </div>
    </form>
  );
};
