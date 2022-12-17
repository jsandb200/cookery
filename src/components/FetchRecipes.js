import React, { useEffect, useState, useCallback } from "react";
import DisplayRecipes from "./DisplayRecipes";


const FetchRecipeData = ({ query }) => {
  const [recipeInfo, setRecipeInfo] = useState([{
    title: ' ',
    ingredients: ' ',
    servings: ' ',
    instructions: ' ',
  }]);
  

  
  

  const fetchRecipeData = useCallback(() => {
    const url =
    'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=' + query;
    console.log(url);
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cbbc8e30ccmsh8e9a851ae46406cp18a4eejsn252ebcf221e7',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url, options)
	.then(response => response.json())
	.then((response) => {

    console.log(recipeInfo);
            setRecipeInfo(response);
            
        }
    )
	.catch(err => console.error(err));
  }, [query]);

  useEffect(() => {
    fetchRecipeData();
  }, [fetchRecipeData, query]);

  
  return (
    
    

    <div>
          <DisplayRecipes items={recipeInfo} />
          
    </div>
  );
  
};
export default FetchRecipeData;