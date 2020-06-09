// import React, { useContext, useState } from "react";
// import { v4 } from "uuid";

// import { RecipeContext } from "../contexts/RecipeContext";
// import { Ingredient } from "./Ingredient";

// export const IngredientList = ({ children, onChange, value }) => {
//   // const [count, setCount] = useState(0);
//   const { dispatch } = useContext(RecipeContext);
//   const [inputs, setInputs] = useState([]);
//   const [ingredient, setIngredient] = useState([""]);
//   const handleClick = (e) => {
//     e.preventDefault();

//     dispatch({ type: "INCREMENT", input: { ingredient } });
//   };
//   return (
//     <div>
//       <p className="add-ingredient">Add Ingredient</p>

//       <button className="add" onClick={handleClick}>
//         +
//       </button>
//       <ul className="ingredientlist">
//         <p className="input"></p>

//         {ingredient.map((element, i) => {
//           return (
//             <div key={i}>
//               <label>Ingredient {i + 1}</label>
//               <input
//                 value={value}
//                 className="input"
//                 type="text"
//                 placeholder="add ingredient"
//                 onChange={(e) =>
//                   setIngredient(
//                     ingredient.map((value, j) => {
//                       if (i === j) {
//                         value = e.target.value;
//                       }
//                       return value;
//                     })
//                   )
//                 }
//               />
//             </div>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
