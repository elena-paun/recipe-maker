(this["webpackJsonprecipes-app"]=this["webpackJsonprecipes-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),i=n(4),u=n(1),s=n(16),m=function(e,t){switch(t.type){case"ADD_RECIPE":return[].concat(Object(i.a)(e),[{title:t.recipe.title,ingredient:t.recipe.ingredient,instructions:t.recipe.instructions,id:Object(s.a)()}]);case"REMOVE_RECIPE":return e.filter((function(e){return e.id!==t.id}));default:return e}},o=Object(a.createContext)(),p=function(e){var t=e.children,n=Object(a.useReducer)(m,[],(function(){var e=localStorage.getItem("recipes");return e?JSON.parse(e):[]})),r=Object(u.a)(n,2),l=r[0],i=r[1];return Object(a.useEffect)((function(){localStorage.setItem("recipes",JSON.stringify(l))}),[l]),c.a.createElement(o.Provider,{value:{recipes:l,dispatch:i}},t)},d=function(){var e=Object(a.useContext)(o).dispatch,t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],l=n[1],m=Object(a.useState)([" "]),p=Object(u.a)(m,2),d=p[0],E=p[1],f=Object(a.useState)(""),v=Object(u.a)(f,2),b=v[0],g=v[1];return c.a.createElement("form",null,c.a.createElement("h2",null,"Recipe Book"),c.a.createElement("br",null),c.a.createElement("div",{className:"title"},c.a.createElement("label",{htmlFor:"title"},"Name your new recipe"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)},placeholder:"Title..."})),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("p",{className:"add-ingredient"},"Add Ingredient"),c.a.createElement("button",{className:"add",onClick:function(e){e.preventDefault(),E([].concat(Object(i.a)(d),[{ingredient:" ",id:Object(s.a)()}]))}},"+"),c.a.createElement("ul",{className:"ingredientlist"},c.a.createElement("p",{className:"input"}),d.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("input",{className:"input",type:"text",placeholder:"add ingredient",onChange:function(e){return E(d.map((function(n,a){return t===a&&(n=e.target.value),n})))}}))})))),c.a.createElement("br",null),c.a.createElement("div",{className:"instructions"},c.a.createElement("p",null,"Instructions"),c.a.createElement("textarea",{value:b,onChange:function(e){return g(e.target.value)}}),c.a.createElement("input",{onClick:function(t){t.preventDefault(),e({type:"ADD_RECIPE",recipe:{title:r,ingredient:d,instructions:b}}),l(""),E([]),g("")},type:"submit",value:"Save Recipe",className:"save"})))},E=(n(13),n(14),function(e){var t=e.recipe,n=Object(a.useContext)(o).dispatch;return c.a.createElement("li",{className:"recipe-details"},c.a.createElement("button",{className:"recipe-close",onClick:function(){return n({type:"REMOVE_RECIPE",id:t.id})}},"\u2715"),c.a.createElement("div",null,c.a.createElement("div",{className:"recipe-title"},t.title),c.a.createElement("p",{className:"ingredients-title"}," ","Ingredients ",c.a.createElement("br",null)),c.a.createElement("ul",null,t.ingredient.map((function(e,t){return console.log(e),c.a.createElement("li",{key:t,className:"recipe-ingredient"},e)}))),c.a.createElement("p",{className:"instructions-title"},"Instructions"),c.a.createElement("div",{className:"recipe-instructions"},t.instructions)))}),f=function(){var e=Object(a.useContext)(o).recipes;return e.length?c.a.createElement("div",{className:"recipe-list"},c.a.createElement("ul",null,e.map((function(e){return c.a.createElement(E,{recipe:e,key:e.id})})))):c.a.createElement("div",{className:"empty"},"No recipes added yet. ")};var v=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(p,null,c.a.createElement(d,null),c.a.createElement("div",{className:"recipes"}),c.a.createElement(f,null)))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.54b7db5d.chunk.js.map