import React from "react";
import { v4 } from "uuid";
export const Ingredient = ({ onChange, ingredient }) => {
  return (
    <li className="ingredient">
      <input
        className="input"
        type="text"
        placeholder="add ingredient"
        onChange={onChange}
      />
    </li>
  );
};
