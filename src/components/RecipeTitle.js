import React, { useState } from "react";

export const RecipeTitle = () => {
  const [title, setTitle] = useState("");
  return (
    <div className="title">
      <p htmlFor="title">Name your new recipe</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title..."
      />
    </div>
  );
};
