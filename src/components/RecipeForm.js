import React, { useContext, useState } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { v4 } from "uuid";
//import { IngredientList } from "./IngredientList";

export const Recipe = () => {
  const { dispatch } = useContext(RecipeContext);

  const [title, setTitle] = useState("");
  // const [input, setInput] = useState([]);
  const [ingredient, setIngredient] = useState([" "]);
  const [instructions, setInstructions] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setIngredient([...ingredient, { ingredient: " ", id: v4() }]);
    // dispatch({ type: "INCREMENT", recipe: { ingredient } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_RECIPE",
      recipe: { title, ingredient, instructions },
    });
    setTitle("");
    setIngredient([]);
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
      <div>
        <p className="add-ingredient">Add Ingredient</p>

        <button className="add" onClick={handleClick}>
          +
        </button>
        <ul className="ingredientlist">
          <p className="input"></p>

          {ingredient.map((element, i) => {
            return (
              <div key={i}>
                {/* <label>Ingredient {i + 1}</label> */}
                <input
                  className="input"
                  type="text"
                  placeholder="add ingredient"
                  onChange={(e) =>
                    setIngredient(
                      ingredient.map((value, j) => {
                        if (i === j) {
                          value = e.target.value;
                        }
                        return value;
                      })
                    )
                  }
                />
              </div>
            );
          })}
        </ul>
      </div>

      {/* <IngredientList
        className="input"
        onChange={(e) => setIngredient(e.target.value)}
      /> */}
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
