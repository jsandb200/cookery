import React, { useState } from "react";
import Ratings from "./Ratings";
import Wishlist from "./Wishlist";

const click = event => {



  var currentDiv = event.currentTarget.parentElement;

  console.log(currentDiv)
  if(currentDiv.classList.contains("small")){
    currentDiv.classList.remove("small");
    currentDiv.classList.add("big");
    }
  else {
    currentDiv.classList.remove("big");
    currentDiv.classList.add("small");
  }
}









var list = [];


const Recipes = ({ recipe }) => {

  
  
  const wishlist = event => {

 let title = event.currentTarget.parentElement.parentElement.previousSibling.previousSibling.previousSibling.children[0].innerHTML;

  list.push(title);

  console.log(list);
 

  document.getElementById("wishes").innerHTML = list.map(r => {

    
   return r;

  }).join("<br/>");
  

  
}

  
 
  
    return (
      
      
      <div className="recipe small">
        <div className="recipeinfo" onClick={click}><h2>{recipe.title}</h2></div>
        <div className="recipeinfo" onClick={click}>
            <h2>Ingredients:</h2>
            <p>{recipe.ingredients}</p>
        </div>
        <div className="recipeinfo" onClick={click}>
            <h2>Instructions:</h2>
            <p>{recipe.instructions}</p>
        </div>
        <div className="recipeinfo last">
            
              <div className="flexbox" id="ratings">
                <div>Rating:</div>
                <div id="stars"><Ratings /></div>
              </div>
              
            
            <div id="addtolist" className="flexbox">
              <div id="addtolistbut" onClick={wishlist}>&#10133;</div>
              <div>Add to Wish List</div>
            </div>
        </div>
        
      </div>
    );

    

  };
  export default Recipes;
  